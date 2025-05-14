import type { Todo } from "../types";

import { ref, watch, readonly } from "vue";
import { defineStore } from "pinia";

const LOCAL_STORAGE_KEY = "todos";

function loadTodos(): Todo[] {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>(loadTodos());

  watch(
    todos,
    (newTodos) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
    },
    { deep: true }
  );

  /**
   * Add a new todo
   * @param text - The todo text
   */
  function addTodo(text: string) {
    const todo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    todos.value.push(todo);
  }

  /**
   * Remove a todo by id
   * @param id - The todo id
   */
  function removeTodo(id: number) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }

  /**
   * Toggle completion state of a todo
   * @param id - The todo id
   */
  function toggleTodo(id: number) {
    const todo = todos.value.find((t) => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  /**
   * Edit a todo's text
   * @param payload - Object with id and new text
   */
  function editTodo(payload: { id: number; text: string }) {
    const todo = todos.value.find((t) => t.id === payload.id);
    if (todo) todo.text = payload.text;
  }

  return { todos: readonly(todos), addTodo, removeTodo, toggleTodo, editTodo };
});
