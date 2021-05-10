import { ref, Ref } from '@nuxtjs/composition-api'
import { IField } from '~/interfaces/IField'

export const useGame = () => {
  const gameField: Ref<IField[]> = ref([])

  const fillField = () => {
    let col = 1
    let row = 1
    for (let i = 0; i < 100; i++) {
      gameField.value.push({
        filled: false,
        robotLoc: false,
        col,
        row,
      })
      if (col % 10 === 0) {
        col = 0
        row++
      }
      col++
    }
  }

  const initField = () => {
    gameField.value = []
    fillField()
    setRobotLoc(1, 10)
  }

  const setRobotLoc = (x: number, y: number) => {
    if (x > 10 || x < 1 || y < 1 || y > 10) {
      console.log('prevented field overflow exception')
      return false
    }
    const robotField = gameField.value.find(
      (state: IField) => state.robotLoc === true
    )
    if (robotField != null) robotField.robotLoc = false
    gameField.value.find(
      (state: IField) => state.row === y && state.col === x
    )!.robotLoc = true
    console.log('Robot location successfully set to ' + x + ':' + y)
    return true
  }

  const getRobotLoc = () => {
    const robotField = gameField.value.find(
      (state: IField) => state.robotLoc === true
    )

    return { x: robotField!.col ?? 0, y: robotField!.row ?? 0 }
  }

  // could be done better
  const clearCell = () => {
    const robotField = gameField.value.find(
      (state: IField) => state.robotLoc === true
    )
    if (robotField === null) return

    if (!robotField?.filled) {
      console.log('This field aint even filled 💁‍♂️')
      return false
    }

    robotField.filled = false
    console.log(
      'Just cleared ' + robotField!.col + ':' + robotField!.row + ' cell!'
    )
    return true
  }

  // could be done better
  const fillCell = () => {
    const robotField = gameField.value.find(
      (state: IField) => state.robotLoc === true
    )
    if (robotField === null) return
    if (robotField?.filled) {
      console.log('This field aint even clear 💁‍♂️')
      return false
    }

    robotField!.filled = true

    console.log(
      'Just filled ' + robotField!.col + ':' + robotField!.row + ' cell!'
    )
    return true
  }

  const resetField = () => {
    initField()
    console.log('Field has been restarted 🪄')
  }
  const setField = (field: any) => {
    gameField.value = field
    console.log('loaded')
  }

  return {
    setRobotLoc,
    gameField,
    initField,
    setField,
    getRobotLoc,
    clearCell,
    fillCell,
    resetField,
  }
}
