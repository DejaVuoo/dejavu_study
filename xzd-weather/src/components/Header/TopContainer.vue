<template>
  <div class="top">
    <div class="left">
      <el-icon><Sunny /></el-icon><h2><a href="/">新中地天气</a></h2>
      <div class="top-weather">
        <h4>{{CurCity}}</h4>
        <span>实时天气：{{CurCityWeather.weather}}&nbsp;{{ CurCityWeather.temperature }}℃</span>
        <span>{{ CurCityWeather.winddirection }}风{{ CurCityWeather.windpower }}级</span>
      </div>
    </div>
    <div class="right">
      <a href="#"><el-icon @click="toggleAboutModal"><InfoFilled /></el-icon></a>
      <a href="#" ><el-icon @click="addSaveCity" style="font-style: normal;" v-if="weatherStore.addShow">🌟</el-icon></a>
    </div>
  </div>
  <AboutModal v-if="isAboutModalVisible" @close="closeAboutModal"/>
</template>

<script setup>
import AboutModal from '../Header/AboutModal.vue';
import { Sunny, InfoFilled,StarFilled } from "@element-plus/icons-vue";
import { ref } from "vue";
import { queryCurIpData, queryCurWeatherData } from "../../request/api"
import { useRoute } from "vue-router";
import { useWeatherStore } from "../../store/index"
const weatherStore = useWeatherStore();
const route = useRoute();
const CurCity = ref({})
const CurCityWeather = ref({})


queryCurIpData().then(res => {
  CurCity.value = res.city
  queryCurWeatherData(res.adcode).then(res => {
    CurCityWeather.value = res.lives[0]
})
})
const isAboutModalVisible = ref(false);
const toggleAboutModal = () => {
  isAboutModalVisible.value = !isAboutModalVisible.value;
};

const closeAboutModal = () => {
  isAboutModalVisible.value = false;
};
function addSaveCity() {
  console.log(route.params.geocode)
  console.log(route.params.city)
  const adcode = route.params.geocode
  queryCurWeatherData(adcode).then(res => {
    console.log(res.lives[0].temperature)
    const temperature = res.lives[0].temperature + "℃"
    console.log(temperature)
    const city = route.params.city
    const storedCities = JSON.parse(localStorage.getItem("savedCities"));
    storedCities.push({city,temperature,adcode})
  localStorage.setItem("savedCities",JSON.stringify(storedCities))
  })
  weatherStore.addIsShow(0)
}

// weatherStore.topCurWeather()
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 150px;
  position: relative;

  align-items: center;
  background-color: royalblue;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1) ;
  .el-icon{
      font-size: 1.8em;
    }

  .left{
    display: flex;
    font-size: 20px;
    color: #fff;
    align-items: center;
    gap: 10px;
    
    a{
      display: block;
      padding-right: 20px;
    }
    .top-weather{
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  .right {
    display: flex;
    gap: 1rem;

    a{
      display: block;
      padding: 10px;
      animation: breathing 10s infinite;
    }
    a:hover{
      animation: breathing 2s infinite;
    }
  }
  
}
</style>