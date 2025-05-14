/**
 * Todo types
 */
export interface Todo {
  completed: boolean;
  text: string;
  id: number;
}

export interface TodoItemProps {
  todo: Todo;
}

export interface TodoEditPayload {
  text: string;
  id: number;
}

export interface TodoItemEmits {
  (e: "toggle", id: number): void;
  (e: "remove", id: number): void;
  (e: "edit", payload: TodoEditPayload): void;
}

export interface TodoItemRefs {
  editInput: HTMLInputElement | null;
}

export type TodoInputEmits = (e: "add", text: string) => void;

/**
 * Base input types
 */
export interface BaseInputProps {
  modelValue: string | number | boolean;
  type?: string;
}

/**
 * Base button types
 */
export interface BaseButtonProps {
  disabled?: boolean;
  class?: string;
  color?: ButtonColor;
  type?: ButtonType;
}

/**
 * Button color variants
 */
export type ButtonColor = "primary" | "danger" | "default";

/**
 * Button type variants
 */
export type ButtonType = "button" | "submit" | "reset";
