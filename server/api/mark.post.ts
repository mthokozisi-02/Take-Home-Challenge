import { defineEventHandler, readBody, setResponseStatus } from "h3";

export default defineEventHandler(async (event) => {
  // read body
  const body = await readBody(event);
  const id = typeof body === "object" && body !== null ? body.id : undefined;

  if (typeof id === "undefined") {
    setResponseStatus(event, 400);
    return { ok: false, error: "Missing `id` in request body" };
  }

  // Since this example project has no DB, we simply respond OK
  return { ok: true, id };
});
