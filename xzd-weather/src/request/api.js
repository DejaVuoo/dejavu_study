import request from "./axios";

export const queryCurIpData = () => {
  return request.get(
    `/v3/ip?ip=27.19.21.173&key=4bba98bac9c567cc71560dc66bc1c75d`
  );
};

export const queryGeocodeData = (city) => {
  return request.get(
    `/v3/geocode/geo?address=${city}&key=4bba98bac9c567cc71560dc66bc1c75d`
  );
}
 
export const queryCurWeatherData = (adcode) => {
  return request.get(
    `/v3/weather/weatherInfo?city=${adcode}&key=4bba98bac9c567cc71560dc66bc1c75d`
  );
 }
export const queryAllWeatherData = (adcode) => {
  return request.get(
    `/v3/weather/weatherInfo?city=${adcode}&key=4bba98bac9c567cc71560dc66bc1c75d&extensions=all`
  );
 }