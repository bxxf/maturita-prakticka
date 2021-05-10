<template>
  <div>
    <h1 class="text-3xl">Praktická maturita</h1>
    <h2 class="text-2xl text-gray-500">Filip Brebera</h2>
    <div
      class="flex flex-row flex-wrap gap-10 mobile:flex-col mobile:gap-0 py-10 px-10"
    >
      <div>
        <h2 class="text-xl my-2">Game Field</h2>
        <game-field :field="gameField"></game-field>
        <h1 class="text-xl my-2">Game Controls</h1>
        <game-controls
          @step="makeStep"
          @rotate="makeRotation"
          @fill="makeFill"
          @clear="makeClear"
          @reset="makeReset"
          @save="makeSave"
          @load="makeLoad"
        />
      </div>
      <div>
        <h1 class="text-xl my-2">Game Interpreter</h1>
        <game-interpreter @commands="interpretCommands" />
      </div>
      <div>
        <h1 class="text-xl my-2">Game Console</h1>
        <game-console />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, provide } from '@nuxtjs/composition-api'
import { useGame } from '@/composable/useGame'
import { Direction, robotStore } from '~/store/robotStore'
import { consoleStore } from '~/store/consoleStore'

export default {
  setup() {
    const {
      gameField,
      initField,
      setRobotLoc,
      getRobotLoc,
      fillCell,
      clearCell,
      setField,
      resetField,
    } = useGame()

    onMounted(() => {
      initField()
    })

    // TODO: do other directions
    const makeStep = () => {
      const { x, y } = getRobotLoc()
      switch (robotStore.state.direction) {
        case Direction.Right:
          const resultRight = setRobotLoc(x + 1, y)
          resultRight
            ? consoleStore.addCommand('krok doprava')
            : consoleStore.addCommand('krok doprava NEVYŠEL')
          break
        case Direction.Left:
          const resultLeft = setRobotLoc(x - 1, y)
          resultLeft
            ? consoleStore.addCommand('krok doleva')
            : consoleStore.addCommand('krok doleva NEVYŠEL')
          break
        case Direction.Up:
          const resultUp = setRobotLoc(x, y - 1)
          resultUp
            ? consoleStore.addCommand('krok nahoru')
            : consoleStore.addCommand('krok nahoru NEVYŠEL')
          break
        case Direction.Down:
          const resultDown = setRobotLoc(x, y + 1)
          resultDown
            ? consoleStore.addCommand('krok dolu')
            : consoleStore.addCommand('krok dolu NEVYŠEL')
          break
      }
    }
    const makeRotation = () => {
      robotStore.rotate()
      consoleStore.addCommand('otocka o 90 stupnu')
    }

    // TODO: add return values with success status
    const makeFill = () => {
      const result = fillCell()
      result
        ? consoleStore.addCommand('vyplnit policko')
        : consoleStore.addCommand('vyplnit policko NEVYŠLO')
    }
    const makeClear = () => {
      const result = clearCell()
      result
        ? consoleStore.addCommand('vycistit policko')
        : consoleStore.addCommand('vycistit policko NEVYŠLO')
    }
    const makeReset = () => {
      resetField()
      consoleStore.addCommand('zrestartovat pole')
    }

    const interpretCommands = (commands: any) => {
      commands.forEach((command: string) => {
        switch (command) {
          case 'krok':
            makeStep()
            break
          case 'vypln':
            makeFill()
            break
          case 'otoc':
            makeRotation()
            break
          case 'vymaz':
            makeClear()
            break
        }
      })
    }
    const makeSave = () => {
      localStorage.setItem('gameField', JSON.stringify(gameField))
      consoleStore.addCommand('game saved to localstorage')
    }
    const makeLoad = () => {
      setField(JSON.parse(localStorage.getItem('gameField') as string).value)
      consoleStore.addCommand('game loaded from localstorage')
    }
    provide('robotStore', robotStore)
    provide('consoleStore', consoleStore)
    return {
      gameField,
      makeStep,
      makeRotation,
      makeFill,
      makeClear,
      makeReset,
      interpretCommands,
      makeSave,
      makeLoad,
    }
  },
}
</script>
