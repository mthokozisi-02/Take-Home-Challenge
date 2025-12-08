
        <template>
          <div>
            <button @click="load">Reload</button>
            <ul>
              <li v-for="t in tasks" :key="t.id">
                {{ t.title }} - {{ t.done ? 'Done' : 'Pending' }}
                <button @click="mark(t.id)">Mark Done</button>
              </li>
            </ul>
          </div>
        </template>

        <script setup>
import { ref } from 'vue'

const tasks = ref([])

// Bug: wrong endpoint call
async function load() {
  const res = await $fetch('/api/taks') // misspelled
  tasks.value = res
}

// Bug: mark endpoint does nothing
async function mark(id) {
  await $fetch('/api/mark', { method: 'POST', body: { id } })
  load()
}

load()
        </script>
