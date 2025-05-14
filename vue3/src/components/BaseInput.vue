<template>
  <input
    v-bind="inputAttrs"
    :type="type"
    v-if="type === 'checkbox'"
    :checked="modelValueProxy as boolean"
    @change="onCheckboxChange"
    :class="[
      'border rounded px-3 py-2 focus:outline-none focus:ring',
      $attrs.class,
    ]"
  />

  <input
    v-bind="inputAttrs"
    :type="type"
    v-model="modelValueProxy"
    v-else
    :class="[
      'border rounded px-3 py-2 focus:outline-none focus:ring',
      $attrs.class,
    ]"
  />
</template>

<script setup lang="ts">
import type { BaseInputProps } from "../types";

import { computed, useAttrs } from "vue";

const props = defineProps<BaseInputProps>();
const emit = defineEmits(["update:modelValue"]);
const attrs = useAttrs();

const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs;
  return rest;
});

const modelValueProxy = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const type = props.type || "text";

function onCheckboxChange(event: Event) {
  const checked = (event.target as HTMLInputElement).checked;
  emit("update:modelValue", checked);
}
</script>
