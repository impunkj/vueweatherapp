<template>
  <div class="flex flex-col relative mt-10">
    <input
      :value="inputValue"
      :id="id"
      class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      :placeholder="placeholder"
      @input="$emit('update:inputValue', $event.target.value)"
    />
    <span v-if="error" class="">{{ error }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  inputValue: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    default: "",
  },
});
defineEmits(["update:inputValue"]);
</script>

<style lang="scss" scoped></style>
