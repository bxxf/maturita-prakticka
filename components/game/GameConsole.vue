<template>
  <div>
    <textarea
      v-model="consoleString"
      disabled
      class="h-50 w-100 border-gray-200 border-2 rounded-md"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, Ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const consoleStore = inject('consoleStore')
    const consoleCommands: Ref<Array<string>> = consoleStore.commands
    const consoleString = computed(() => consoleCommands.value.join('\n'))
    return { consoleString }
  },
})
</script>
