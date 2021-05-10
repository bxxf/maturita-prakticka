import { reactive, readonly, ref, Ref } from '@nuxtjs/composition-api'

const commands: Ref<Array<string>> = ref([])
const addCommand = (command: string) => {
  commands.value.unshift(command)
}
export const consoleStore = readonly({ commands, addCommand })
