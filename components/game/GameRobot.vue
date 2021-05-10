<template>
  <div>
    <img :src="'/img/robot' + direction + '.svg'" alt="Obrazek robota" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    direction: {
      required: true,
      type: Number,
    },
  },
}
</script>
