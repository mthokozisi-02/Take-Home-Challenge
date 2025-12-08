<template>
  <div>
    <button @click="load">Reload</button>
    <ul>
      <li v-for="t in tasks" :key="t.id">
        {{ t.title }} - {{ t.done ? "Done" : "Pending" }}
        <button v-if="t.done == false" @click="mark(t.id)">Mark Done</button>
        <button v-if="t.done == true" @click="mark(t.id)">Mark UnDone</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tasks = ref([]);
const loading = ref(false);
const error = ref("");

// FIX: correct endpoint name "/api/tasks"
async function load() {
  loading.value = true;
  error.value = "";

  try {
    const res = await $fetch("/api/tasks");
    // Expecting { ok: true, tasks: [...] }
    if (res && res.ok && Array.isArray(res.tasks)) {
      tasks.value = res.tasks;
      console.log("Tasks loaded:", tasks.value);
    } else {
      throw new Error("Unexpected response from /api/tasks");
    }
  } catch (err) {
    error.value = err?.message || String(err);
    tasks.value = [];
  } finally {
    loading.value = false;
  }
}

// mark endpoint now works
async function mark(id) {
  try {
    const res = await $fetch("/api/mark", {
      method: "POST",
      body: { id },
    });

    if (!res || !res.ok) {
      throw new Error(res?.error || "Failed to mark task");
    }
  } catch (err) {
    error.value = err?.message || String(err);
  }
  await load();
}

load();
</script>
