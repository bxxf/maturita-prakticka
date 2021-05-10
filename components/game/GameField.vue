<template>
  <div class="grid">
    <GameCell
      v-for="(cell, index) in field"
      :key="index"
      :state="cell"
    ></GameCell>
  </div>
</template>
<script lang="ts">
import { PropType } from '@nuxtjs/composition-api'
import { IField } from '@/interfaces/IField'

export default {
  props: {
    field: { type: Array as PropType<IField[]>, required: true },
  },
}
</script>
<style scoped>
.grid {
  max-width: 400px;
  max-height: 400px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}
</style>
