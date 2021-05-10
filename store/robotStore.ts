import { reactive, readonly } from '@nuxtjs/composition-api'

export enum Direction {
  Up = 0,
  Down = 180,
  Left = 90,
  Right = 270,
}

const state = reactive({
  direction: Direction.Right,
})
const setDirection = (direction: Direction) => {
  state.direction = direction
  console.log('Current direction: ' + state.direction)
}

const rotate = () => {
  state.direction =
    state.direction === 270 ? (state.direction = 0) : state.direction + 90
  console.log('Just rotated myself by 90 degrees!')
  console.log('Current direction: ' + state.direction)
}

export const robotStore = readonly({ setDirection, state, rotate })
