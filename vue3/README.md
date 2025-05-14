# Vue 3 Todo List

A modern, maintainable Todo List application built with Vue 3, Vite, TypeScript, Pinia, Vue Router, and Tailwind CSS.

## Features

- Add, edit, toggle, and remove todos
- Persistent state with localStorage
- Modular, type-safe codebase using TypeScript interfaces
- Component-based architecture with reusable UI primitives
- State management via Pinia
- Routing ready (Vue Router configured)
- Styled with Tailwind CSS

## Tech Stack

- [Vue 3](https://vuejs.org/) (Composition API)
- [Vite](https://vite.dev/) (development/build tooling)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/) (state management)
- [Vue Router](https://router.vuejs.org/) (routing)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)

## Project Structure

```bash
src/
  assets/         # Static assets and global styles (Tailwind)
  components/     # UI components (BaseInput, BaseButton, TodoList, etc.)
  router/         # Vue Router setup (currently no routes defined)
  stores/         # Pinia stores (todoStore)
  types.ts        # TypeScript interfaces and types
  constants.ts    # App-wide constants (e.g., localStorage key)
  App.vue         # Root component
  main.ts         # App entry point
```

## Getting Started

### Install dependencies

```sh
pnpm install
```

### Start development server

```sh
pnpm dev
```

### Type-check, build, and preview production

```sh
pnpm build     # Type-checks and builds for production
pnpm preview   # Preview the production build
```

## Development Notes

- **Type Checking:** Uses `vue-tsc` for `.vue` file type safety.
- **State Persistence:** Todos are saved to localStorage automatically.
- **Styling:** Tailwind CSS is imported in `src/assets/main.css`.
- **Routing:** Vue Router is set up but no routes are currently defined.
- **State Management:** All todo logic is encapsulated in `src/stores/todoStore.ts`.

## License

MIT
