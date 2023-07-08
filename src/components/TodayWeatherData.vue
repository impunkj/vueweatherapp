<template>
  <div
    class="weather_container flex bg-blue-700 mt-6 py-10 px-4 rounded-xl"
    v-if="weatherData"
  >
    <div class="one_side w-1/2 flex-auto">
      <div class="degree_celsius text-7xl">
        {{ loading ? "Loading..." : `${weatherData.current.temp_c} °C` }}
      </div>
      <div class="temp_name mt-2 text-2xl">
        {{ loading ? "Loading..." : weatherData.location.name }}
      </div>
      <div class="temp_name mt-2 text-2xl">
        {{ loading ? "Loading..." : weatherData.location.country }}
      </div>
    </div>
    <div class="two_side flex-auto">
      <div class="flex">
        <div class="left_side w-1/4">
          <img class="h-16" :src="weatherData.current.condition.icon" />
        </div>
        <div class="right_side w-full">
          <div class="wrap">Current Condition</div>
          <div class="text-5xl mt-2">
            {{ loading ? "Loading..." : weatherData.current.condition.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="weather_container flex bg-blue-700 mt-6 py-4 px-4" v-else>
    Loading
  </div>
</template>

<script setup>
import { useWeatherStore } from "@/stores/getWeatherData";
import { storeToRefs } from "pinia";

const { weatherData, loading } = storeToRefs(useWeatherStore());
</script>
