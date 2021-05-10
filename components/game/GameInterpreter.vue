<template>
  <div>
    <div>
      <textarea
        v-model="input"
        class="h-50 w-100 border-gray-200 border-2 rounded-md"
      ></textarea>
    </div>
    <button
      class="py-1 px-2 bg-blue-500 rounded-md text-white"
      @click="convertToCommands"
    >
      Convert
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { emit }) {
    const input = ref('')
    const convertToCommands = () => {
      let commands = []
      commands = input.value.split(/\n/)
      commands = commands
        .map((command) => {
          return command.trim()
        })
        .filter((command) => command.length > 0)
      emit('commands', commands)
      input.value = ''
    }
    return { input, convertToCommands }
  },
})
</script>
