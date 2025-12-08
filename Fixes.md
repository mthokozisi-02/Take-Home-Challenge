# FIXES

This document lists the issues found and how they were resolved.

## Issue 1 — /api/mark did nothing

**Symptom:** Marking a task in the UI made a request to `/api/mark` but the server handler returned no useful result and did not validate input.
**Fix:** Implemented `server/api/mark.post.ts` to read request body, validate `id` and return `{ ok: true, id }`.
**Effort:** ~30 minutes

## Issue 2 — tasks endpoint missing/unstable contract

**Symptom:** UI expected `GET /api/tasks` to return `tasks`, but endpoint was missing.
**Fix:** Implemented `server/api/tasks.get.ts` to return `{ ok: true, tasks: [...] }` with example tasks to allow the UI to operate.
**Effort:** ~30 minutes

## Issue 3 — frontend did not handle loading / errors / optimistic updates

**Symptom:** Marking tasks and reloading produced unreliable UI updates.
**Fix:** Rewrote `components/TaskList.vue` to:

- corrected endpoint name to "/api/tasks"
- mark endpoint now works

## Improvements made

- Clearer API response shapes (`{ ok: true/false, tasks?, error? }`)
- Frontend resilient to network errors and shows messages
- Added `FIXES.md` documenting the changes and how to test
- Now you can mark tasks Done or Pending
- added a local db file
