
        <template>
          <div>
            <h1>Task List</h1>
            <TaskList />
          </div>
        </template>

        <script setup>
// Bug: Component imported incorrectly (case mismatch)
import Tasklist from '~/components/TaskList.vue'
        </script>
