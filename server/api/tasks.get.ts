import { defineEventHandler } from "h3";

// Simple tasks endpoint that returns a small task list.
export default defineEventHandler(() => {
  const tasks = [
    { id: 1, title: "Buy milk", done: false },
    { id: 2, title: "Fix project", done: true },
  ];

  return { ok: true, tasks };
});
