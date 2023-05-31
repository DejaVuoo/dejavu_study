import axios from "axios";

const request = axios.create({
  baseURL: "https://restapi.amap.com",
  timeout: 3000,
});
request.interceptors.response.use(
  (data) => {
    return data.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default request;
