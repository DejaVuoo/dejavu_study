<template>
  <div class="city-weather" >
    <div class="cur-city-info">
      <h2 class="text-center duration-200">你正在预览{{ city }}的天气信息</h2>
      <span>，可以通过右上角的"+"号按钮保存起来</span>
    </div>
    <div class="container flex flex-col text-center mt-6 gap-4">
      <h3>当日气温是：{{ TodayWeather.daytemp }}摄氏度</h3>
      <h3>当日天气是：{{ TodayWeather.dayweather }}</h3>
      <h3>当日风向是：{{ TodayWeather.daywind }}风</h3>
      <h3>当日风力是：{{ TodayWeather.daypower }}</h3>
    </div>
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
import VChart from "vue-echarts";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { queryAllWeatherData } from "../../request/api";
const route = useRoute();
const city = ref("");
const WeatherReport = ref([]);
const TodayWeather = ref({});
const option = ref({});

onMounted(() => {
  city.value = route.params.city;
});

queryAllWeatherData(route.params.geocode).then((res) => {
  const forecastList = res.forecasts[0].casts;
  console.log(forecastList);
  const todayData = forecastList[0];
  TodayWeather.value = todayData;
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
    // item.daytemp = `白${item.daytemp}℃`;
    // item.nigtemp = `晚${item.nighttemp}℃`;
    return item;
  });
  const daytempData = WeatherReport.value.map((item) => item.daytemp);
  const nigtempData = WeatherReport.value.map((item) => item.nighttemp);
  console.log(daytempData);
  option.value = {
    grid: { top: 30, left: 0, right: 0, bottom: 0 },
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
          position: "top",
        },
        data: daytempData,
        smooth: true,
      },
      {
        type: "line",
        label: {
          show: true,
          position: "top",
        },
        data: nigtempData,
        smooth: true,
      },
    ],
  };
});


</script>

<style lang="scss" scoped>
.city-weather {
  display: flex;
  flex-direction: column;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  .cur-city-info {
    display: block;
    padding: 0.5rem;
    text-align: center;
  }
}
</style>
