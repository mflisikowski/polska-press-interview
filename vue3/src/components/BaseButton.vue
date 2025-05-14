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

import { BUTTON_COLOR_CLASSES } from "../constants";
import { DEFAULT_BUTTON_COLOR } from "../constants";
import { DEFAULT_BUTTON_TYPE } from "../constants";

import { computed } from "vue";

const props = withDefaults(defineProps<BaseButtonProps>(), {
  color: DEFAULT_BUTTON_COLOR,
  type: DEFAULT_BUTTON_TYPE,
});

const colorClass = computed(
  () => BUTTON_COLOR_CLASSES[props.color] ?? BUTTON_COLOR_CLASSES.default
);
</script>
