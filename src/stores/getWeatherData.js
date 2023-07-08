import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weatherData: null,
    loading: false,
  }),
  actions: {
    async getweatherData(cityname) {
      try {
        console.log("res1");
        this.loading = true;
        let key = "5751bf5574d44192aee55741230607";
        const res = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityname}&days=3`
        );
        if (res.status === 200) {
          this.weatherData = res.data;
        }
      } catch (error) {
        console.log("error");
      } finally {
        this.loading = false;
      }
    },
  },
});
