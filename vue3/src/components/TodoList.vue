<template>
  <section
    class="w-full max-w-md bg-white rounded shadow p-6"
    aria-labelledby="todos-heading"
  >
    <h1 id="todos-heading" class="sr-only">Todo List</h1>

    <TodoInput @add="todoStore.addTodo" />

    <ul class="mt-4 divide-y">
      <TodoItem
        v-for="todo in todoStore.todos"
        @toggle="todoStore.toggleTodo"
        @remove="todoStore.removeTodo"
        @edit="todoStore.editTodo"
        :todo="todo"
        :key="todo.id"
      />
    </ul>

    <div
      v-if="!todoStore.todos.length"
      class="text-center text-gray-400 mt-4"
      aria-live="polite"
    >
      No todos yet.
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTodoStore } from "../stores/todoStore";

import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";

const todoStore = useTodoStore();
</script>
