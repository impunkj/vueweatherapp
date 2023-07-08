<template>
  <div class="dark">
    <div class="container mx-auto weather-primary dark">
      <div class="flex justify-center">
        <div class="w-1/2">
          <BaseInput
            v-model:inputValue="cityName"
            type="text"
            placeholder="searchCity"
            id="my-input"
            @keyup.enter="getSearchResults"
            label="Search City"
          />
          <TodayWeatherData />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useWeatherStore } from "@/stores/getWeatherData";
import BaseInput from "@/components/base/InputText.vue";
import TodayWeatherData from "@/components/TodayWeatherData.vue";
import { ref, onMounted } from "vue";

export default {
  components: {
    BaseInput,
    TodayWeatherData,
  },
  setup() {
    const cityName = ref("Jaipur");
    const WeatherData = useWeatherStore();

    const getSearchResults = () => {
      WeatherData.getweatherData(cityName.value);
    };

    onMounted(() => {
      WeatherData.getweatherData(cityName.value);
    });

    return {
      cityName,
      getSearchResults,
    };
  },
};
</script>
