// server/api/tasks.get.ts
import { defineEventHandler } from "h3";
import { tasks } from "../db/tasks";

export default defineEventHandler(() => {
  return { ok: true, tasks };
});
