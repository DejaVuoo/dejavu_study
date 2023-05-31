import { defineStore } from "pinia";
import { ref, watch, computed } from "vue";
import {
  queryCurIpData,
  queryGeocodeData,
  queryCurWeatherData,
  queryAllWeatherData,
} from "../request/api";
import { useRoute } from "vue-router";
const useWeatherStore = defineStore("home", () => {
  const input = ref("");
  const showSuggestions = ref(false);
  const suggestions = ref([]);
  const error = ref(false);
  const errorMessage = ref("");
  const WeatherReport = ref([]);
  const option = ref({});
  const CurCity = ref({});
  const CurCityWeather = ref({});
  const addShow = ref(1);
  const route = useRoute();

  const addSaveCity = () => {};
  const topCurWeather = () => {
    queryCurIpData().then((res) => {
      CurCity.value = res.city;
      queryCurWeatherData(res.adcode).then((res) => {
        CurCityWeather.value = res.lives[0];
      });
    });
  };
  const homeWeather = () => {
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
  };

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

  const addIsShow = (num) => {
    addShow.value = num;
  };

  watch(input, () => {
    if (!showSuggestions.value) {
      clearError();
    }
  });
  watch(route, () => {    
    console.log(route.params.city == null);
    addIsShow(0);
    if (route.params.city == null) {
      addIsShow(0);
    } else {
      if (localStorage.getItem("savedCities") == null) {
        addIsShow(1);
      } else if (
        localStorage.getItem("savedCities") !== null &&
        JSON.parse(localStorage.getItem("savedCities")).every((item) => {
          return item.city !== route.params.city;
        })
      ) {
        addIsShow(1);
      } else {
        addIsShow(0);
      }
    }
  });

  return {
    addShow,
    topCurWeather,
    homeWeather,
    handleInput,
    getSuggestions,
    handleSelectCity,
    handleQuery,
    showError,
    clearError,
    addIsShow,
  };
});
export { useWeatherStore };
