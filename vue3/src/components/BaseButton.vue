<template>
  <button
    v-bind="$attrs"
    :type="type"
    :class="[
      'px-4 py-2 rounded transition focus:outline-none',
      colorClass,
      $attrs.class,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { BaseButtonProps } from "../types";

import { computed } from "vue";

const props = withDefaults(defineProps<BaseButtonProps>(), {
  type: "button",
  color: "primary",
});

const colorClass = computed(() => {
  switch (props.color) {
    case "primary":
      return "bg-blue-600 text-white hover:bg-blue-700";
    case "danger":
      return "bg-red-500 text-white hover:bg-red-700";
    default:
      return "bg-gray-200 text-gray-800 hover:bg-gray-300";
  }
});
</script>
