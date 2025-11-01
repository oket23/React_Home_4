# Vite + React + Tailwind

## What This Project Does

This is a React application that renders a fully interactive "TODO LIST" manager.

The main component (`TaskTracker`) allows a user to:

* **Add new tasks:** Enter text and add a new task to the list with the current time.
* **Toggle completion:** Mark tasks as complete or incomplete using a custom checkbox.
* **Delete tasks:** Remove individual tasks from the list.
* **Filter tasks:** View the list by "All", "Completed", or "Incomplete" status using a dropdown.
* **Reset tasks:** Clear the entire list with a "Reset" button.
* **View stats:** See a live-updating counter of completed tasks (e.g., "Completed: 1 / 2").

---

## Project Technologies

* **Bundler / Dev Tool:** [Vite](https://vitejs.dev/)
* **Language:** TypeScript
* **Framework:** React 19
* **Styling:** TailwindCSS (configured with `@tailwindcss/vite`)
* **Class Utilities:** `clsx` and `tailwind-merge` (combined into a custom `cn` utility)
* **Linter:** ESLint (configured for TypeScript, React Hooks, and React Refresh)

---

## Key Project Strengths

This project is built following professional standards and best practices:

### Clean Component Architecture
* `TaskTracker` is the **smart component** (container) that manages all application state (`tasks`, `filter`, `newTask`) and logic (`addTask`, `toggleTask`, `deleteTask`, `resetTasks`).
* `TaskItem` is a **dumb (presentational) component**. It only receives props (`task` data, `onToggle`, `onDelete`) and renders UI, making it highly reusable and testable.
* `MainLayout` is used in `App.tsx` to wrap the main content, a good practice for adding global elements like headers or footers later.

### Robust State Management
* Uses React's `useState` hook to manage all state cleanly.
* All state updates are **immutable**, using array `.map()` and `.filter()` methods (e.g., `setTasks(prev => prev.map(...))`) to prevent bugs.
* Includes input validation to prevent empty tasks from being added (`if (!newTask.trim()) return;`).

### Professional Styling
* Uses a `cn` utility function that merges `clsx` and `tailwind-merge`. This is a best practice for conditionally applying Tailwind classes and automatically resolving style conflicts (e.g., changing `TaskItem` styles based on its `completed` prop).
* The UI is fully **responsive**, adapting its layout for different screen sizes (`sm`, `md`).

### Strong Type Safety
* All components have clearly defined TypeScript props (`TaskItemProps`, `LayoutProps`) and state types, ensuring code reliability.

### Modern Tooling
* Built with a modern stack: **Vite + React 19 + TypeScript**.
* A preconfigured **ESLint** setup ensures consistent code quality and catches common errors related to React Hooks and Refresh.

---

## How to Run the Project

Follow these steps to set up and run the project locally:

### Clone the repository
```bash
git clone https://github.com/oket23/React_Home_4
cd react_app # Or your project's root directory
```

### Install dependencies
Make sure you have Node.js (v18 or higher) installed.
Then run:
```bash
npm install
```

### Start the development server
```bash
npm run dev
```
Once it’s running, open your browser and visit the local URL provided in your terminal (usually http://localhost:5173/).
