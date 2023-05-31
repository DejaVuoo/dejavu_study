<template>
  <div class="main">
    <div id="select-city">
      <input
        type="text"
        placeholder="请输入城市名称"
        v-model.trim="input"
        @input="handleInput"
        @keydown.enter="handleQuery"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-md"
      />
      <ul
        v-if="showSuggestions"
        class="absolute text-white w-full shadow-md py-2 px-1"
      >
        <li
          v-for="city in suggestions"
          :key="city"
          @click="handleSelectCity(city)"
        >
          {{ city }}
        </li>
      </ul>
    </div>
    <p v-if="error" class="text-red-500">{{ errorMessage }}</p>
    <h2 class="text-center duration-200" v-if="!saveCityList||!saveCityList.length">
      暂时没有保存过城市天气信息，请查询后点击右上角"🌟"号保存。
    </h2>
    <div class="SaveCityContainer">
      <div class="city" v-for="(item, index) in saveCityList">
        <div
          class="CityTemp mb-4 py-2 px-4 flex justify-between cursor-pointer w-full"
        >
          <h2>{{ item.city }}</h2>
          <h2>{{ item.temperature }}</h2>
        </div>
        <div class="buttons-container flex mb-4 gap-2 align-center">
          <el-button type="warning" @click="router.push(`/weather/${item.city}/${item.adcode}`)">查看</el-button>
          <el-button type="warning" @click="delItem(index)">删除</el-button>
        </div>
      </div>
    </div>
    <h2 class="mt-6">近期天气</h2>
    <div class="weather-container">
      <ul class="weather-list">
        <li class="weather-item" v-for="item in WeatherReport">
          <span>{{ item.week }}</span>
          <span>{{ item.date }}</span>
          <span>{{ item.dayweather }}</span>
          <span>{{ item.daypower }}</span>
        </li>
      </ul>
      <div class="echart-container">
        <v-chart class="echart" :option="option"></v-chart>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  queryCurIpData,
  queryGeocodeData,
  queryAllWeatherData,
} from "../../request/api";
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import VChart from "vue-echarts";
const input = ref("");
const showSuggestions = ref(false);
const suggestions = ref([]);
const error = ref(false);
const errorMessage = ref("");
const WeatherReport = ref([]);
const saveCityList = ref([]);

const option = ref({});
queryCurIpData().then((res) => {
  queryAllWeatherData(res.adcode).then((res) => {
    const forecastList = res.forecasts[0].casts;
    WeatherReport.value = forecastList.map((item, index) => {
      if (index == 0) {
        item.week = "今天";
      } else if (index == 1) {
        item.week = "明天";
      } else {
        const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
        const date = new Date(item.date);
        item.week = "周" + weekdays[date.getDay()];
      }
      item.date = item.date.slice(5);
      item.dayweather = item.dayweather;
      item.daypower = "风力" + item.daypower + "级";
      return item;
    });
    const daytempData = WeatherReport.value.map((item) => item.daytemp);
    const nigtempData = WeatherReport.value.map((item) => item.nighttemp);
    console.log(daytempData);
    option.value = {
      grid: { top: 30, left: 0, right: 0, bottom: 10 },
      xAxis: {
        show: false,
        type: "category",
      },
      yAxis: {
        show: false,
        type: "value",
      },
      series: [
        {
          type: "line",
          label: {
            show: true,
            color: "#fff",
            position: "top",
            formatter: "白 " + "{c}" + "℃",
          },
          data: daytempData,
          smooth: true,
        },
        {
          type: "line",
          label: {
            show: true,
            color: "#fff",
            position: "top",
            formatter: "晚 " + "{c}" + "℃",
          },
          data: nigtempData,
          smooth: true,
        },
      ],
    };
  });
});

const handleInput = () => {
  if (input.value === "") {
    showSuggestions.value = false;
    suggestions.value = [];
    clearError();
  } else {
    getSuggestions(input.value);
  }
};

const getSuggestions = (value) => {
  console.log("Getting suggestions for:", value);
  queryGeocodeData(value)
    .then((res) => {
      console.log("Geocode data:", res);
      if (res.geocodes && res.geocodes.length > 0) {
        const city = res.geocodes[0].city;
        suggestions.value = [city];
        showSuggestions.value = true;
        clearError();
      } else {
        suggestions.value = [];
        showSuggestions.value = false;
        showError("似乎没有找到你查找的城市");
      }
    })
    .catch(() => {
      suggestions.value = [];
      showSuggestions.value = false;
      showError("对不起，网络似乎出了点问题，请稍后再查询");
    });
};

const handleSelectCity = (city) => {
  console.log("Selected city:", city);
  input.value = city;
  showSuggestions.value = false;
  handleQuery();
};

const handleQuery = () => {
  if (input.value === "") {
    showError("请输入城市名称");
    return;
  }

  console.log("Querying geocode data for:", input.value);
  queryGeocodeData(input.value)
    .then((res) => {
      console.log("Geocode data:", res);
      if (res.geocodes && res.geocodes.length > 0) {
        const city = res.geocodes[0].city;
        input.value = city;
        const adcode = res.geocodes[0].adcode;
        // 导航到天气页面
        router.push({ name: "Weather", params: { city, geocode: adcode } });
        showSuggestions.value = false;
        suggestions.value = [];
        clearError();
      } else {
        showError("似乎没有找到你查找的城市");
      }
    })
    .catch(() => {
      showError("对不起，网络似乎出了点问题，请稍后再查询");
    });
};

const showError = (message) => {
  error.value = true;
  errorMessage.value = message;
};

const clearError = () => {
  error.value = false;
  errorMessage.value = "";
};



const delItem = (index) => {
  const storedCities = JSON.parse(localStorage.getItem("savedCities"));
  console.log(storedCities);
  storedCities.splice(index, 1);
  saveCityList.value = storedCities;
  localStorage.setItem("savedCities", JSON.stringify(storedCities));
};

onMounted(() => {
  // 从本地存储中获取数据
  saveCityList.value = JSON.parse(localStorage.getItem("savedCities"));
  console.log(saveCityList.value);
});


</script>

<style lang="scss" scoped>
.main {
  width: 80%;
  margin: 0 auto;
  #select-city {
    font-family: inherit;
    font-size: 120%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;

    input {
      border: none;
      border-bottom: 2px solid #d1d3d4;
      height: 40px;
    }
    input::placeholder {
      color: #ffffff;
    }
    input:focus {
      outline: none;
      border-color: #0b87ff;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
    ul {
      width: 80%;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
  }
  h2 {
    color: #ffffff;
    font-size: 1.5em;
    font-weight: inherit;
  }
  .SaveCityContainer {
    margin-top: 2.5rem;
    overflow: hidden;
    box-shadow: 0 15px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    .city {
      display: flex;
      justify-content: space-between;
    }

    .buttons-container {
      opacity: 0;
      transform: translateX(20px);
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    // .city-info:hover + .buttons-container,
    .buttons-container:hover {
      opacity: 1;
      transform: translateX(-15%);
    }
    .buttons-container:hover + .CityTemp,
    .buttons-container:hover ~ .CityTemp {
      width: 85%;
      transition: width 0.2s ease;
    }
    .CityTemp {
      position: relative;
      cursor: pointer;
      width: 85%;
      box-shadow: 0 15px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
      transition: width 0.2s ease;
    }
    .CityTemp:hover {
      width: 80%;
    }
    .CityTemp:hover + .buttons-container,
    .CityTemp:hover ~ .buttons-container {
      opacity: 1;
      transform: translateX(-15%);
    }
    .CityTemp::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: #0b87ff;
      transition: width 0.5s ease;
    }

    .CityTemp:hover::after {
      width: 100%;
    }
  }
}
</style>
