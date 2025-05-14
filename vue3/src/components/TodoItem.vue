<template>
  <li class="flex items-center gap-2 py-2 border-b last:border-b-0 group">
    <BaseInput
      v-model="todo.completed"
      type="checkbox"
      :aria-checked="todo.completed"
      class="accent-blue-600 cursor-pointer"
      :id="`todo-checkbox-${todo.id}`"
    />

    <label
      :for="`todo-checkbox-${todo.id}`"
      :class="{ 'line-through text-gray-400': todo.completed }"
      class="flex-1 cursor-pointer select-none"
      tabindex="0"
      v-if="!isEditing"
      @dblclick="startEdit"
    >
      {{ todo.text }}
    </label>

    <BaseInput
      v-else
      v-model="editText"
      @keyup.enter="submitEdit"
      @blur="submitEdit"
      class="flex-1"
      :aria-label="`Edit todo: ${todo.text}`"
      ref="editInput"
      autofocus
    />

    <BaseButton
      @click="handleRemove"
      color="danger"
      class="opacity-0 group-hover:opacity-100 transition px-2"
      aria-label="Delete todo"
    >
      &times;
    </BaseButton>

    <span v-if="isEditing" aria-live="polite" class="sr-only"
      >Editing todo</span
    >
  </li>
</template>

<script setup lang="ts">
import type { Todo } from "../stores/todoStore";

interface TodoItemProps {
  todo: Todo;
}

interface TodoItemEmits {
  (e: "toggle", id: number): void;
  (e: "remove", id: number): void;
  (e: "edit", payload: { id: number; text: string }): void;
}

interface TodoItemRefs {
  editInput: HTMLInputElement | null;
}

import { ref, watch, nextTick } from "vue";

import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";

const props = defineProps<TodoItemProps>();
const emit = defineEmits<TodoItemEmits>();

const editInput = ref<TodoItemRefs["editInput"]>(null);
const isEditing = ref(false);
const editText = ref(props.todo.text);

const startEdit = () => {
  isEditing.value = true;
  editText.value = props.todo.text;

  nextTick(() => editInput.value?.focus());
};

const submitEdit = () => {
  if (!isEditing.value) return;

  const text = editText.value.trim();

  if (text && text !== props.todo.text) {
    emit("edit", { id: props.todo.id, text });
  }

  isEditing.value = false;
};

const handleToggle = () => emit("toggle", props.todo.id);
const handleRemove = () => emit("remove", props.todo.id);

watch(
  () => props.todo.text,
  (newText) => {
    if (!isEditing.value) editText.value = newText;
  }
);
</script>
