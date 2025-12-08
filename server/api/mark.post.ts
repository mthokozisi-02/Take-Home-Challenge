import { defineEventHandler, readBody } from "h3";
import { tasks } from "../db/tasks";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = body?.id;

  if (!id) {
    return { ok: false, error: "Missing id" };
  }

  const filteredTasks = tasks.find((x) => x.id === id);
  if (!filteredTasks) {
    return { ok: false, error: "Task not found" };
  }

  if (filteredTasks.done === true) {
    filteredTasks.done = false;
  } else {
    filteredTasks.done = true;
  }
  console.log(`Task ${id} marked as done.`, filteredTasks);

  return { ok: true, task: filteredTasks };
});
