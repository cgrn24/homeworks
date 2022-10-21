export type StateType = {
  isLoading: boolean
}

const initState: StateType = {
  isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingACType): StateType => {
  // fix any
  switch (action.type) {
    case 'LOADING': {
      return { ...state, isLoading: action.isLoading }
    }
    default:
      return state
  }
}

type LoadingACType = {
  type: 'LOADING'
  isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingACType => ({ type: 'LOADING', isLoading })
// fix any
