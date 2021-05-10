<template>
  <div :class="[state.filled ? 'bg-red-500' : 'bg-gray-200']">
    <game-robot
      v-if="state.robotLoc"
      :direction="robotState.state.direction"
    ></game-robot>
  </div>
</template>
<script lang="ts">
import { inject, PropType } from '@nuxtjs/composition-api'
import { IField } from '@/interfaces/IField'
import { Direction } from '../../store/robotStore'
export default {
  props: {
    state: {
      type: Object as PropType<IField>,
      required: true,
    },
  },
  setup(props: any) {
    const robotState = inject('robotStore')

    return { robotState }
  },
}
</script>
