<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex gap-2 w-full"
    aria-label="Add todo"
  >
    <BaseInput
      v-model="input"
      type="text"
      class="flex-1"
      placeholder="Add a new todo..."
      aria-label="Todo text"
      :aria-invalid="!isValid"
      aria-describedby="todo-input-desc"
      required
      autofocus
      @keyup.enter="handleSubmit"
    />
    <BaseButton type="submit" color="primary"> Add </BaseButton>
  </form>

  <span id="todo-input-desc" class="sr-only"
    >Enter a todo and press Add or Enter</span
  >
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import BaseInput from "./BaseInput.vue";
import BaseButton from "./BaseButton.vue";

const emit = defineEmits<(e: "add", text: string) => void>();
const input = ref("");
const isValid = computed(() => !!input.value.trim());

function handleSubmit() {
  if (!isValid.value) return;
  emit("add", input.value.trim());
  input.value = "";
}
</script>
