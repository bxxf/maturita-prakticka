<template>
  <div>
    <button
      class="py-1 px-2 bg-blue-500 rounded-md text-white"
      @click="makeStep"
    >
      Krok
    </button>
    <button
      class="py-1 px-2 bg-blue-500 rounded-md text-white"
      @click="makeRotation"
    >
      Otoč
    </button>
    <button
      class="py-1 px-2 bg-blue-500 rounded-md text-white"
      @click="makeFill"
    >
      Vyplň
    </button>
    <button
      class="py-1 px-2 bg-blue-500 rounded-md text-white"
      @click="makeClear"
    >
      Vymaž
    </button>
    <button
      class="py-1 px-2 bg-blue-500 rounded-md text-white"
      @click="makeReset"
    >
      Reset
    </button>
    <button
      class="py-1 px-2 bg-blue-500 rounded-md text-white"
      @click="makeSave"
    >
      Uloz
    </button>
    <button
      class="py-1 px-2 bg-blue-500 rounded-md text-white"
      @click="makeLoad"
    >
      Nacti
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(_, { emit }) {
    const makeStep = () => {
      emit('step')
    }
    const makeRotation = () => {
      emit('rotate')
    }
    const makeFill = () => {
      emit('fill')
    }
    const makeClear = () => {
      emit('clear')
    }
    const makeReset = () => {
      emit('reset')
    }
    const makeSave = () => {
      emit('save')
    }
    const makeLoad = () => {
      emit('load')
    }
    return {
      makeStep,
      makeFill,
      makeRotation,
      makeClear,
      makeReset,
      makeSave,
      makeLoad,
    }
  },
})
</script>
