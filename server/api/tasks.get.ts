import { defineEventHandler } from "h3";

// Simple tasks endpoint that returns a small task list.
export default defineEventHandler(() => {
  const tasks = [
    { id: 1, title: "Buy milk", completed: false },
    { id: 2, title: "Write report", completed: true },
    { id: 3, title: "Fix bug #42", completed: false },
  ];

  return { ok: true, tasks };
});
