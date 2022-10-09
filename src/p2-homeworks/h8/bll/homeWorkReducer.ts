import { SingleUserType } from '../HW8'

type SortType = {
  type: 'sort'
  payload: 'down' | 'up'
}

type CheckType = {
  type: 'check'
  payload: 18
}

type ActionType = SortType | CheckType

export const homeWorkReducer = (state: Array<SingleUserType>, action: ActionType): any => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      const newArray = [...state]
      if (action.payload === 'up') {
        return newArray.sort((a, b) => b.age - a.age)
      } else {
        return newArray.sort((a, b) => a.age - b.age)
      }
    }
    case 'check': {
      return state.filter((el) => el.age >= 18)
    }
    default:
      return state
  }
}
