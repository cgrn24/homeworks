const initState = {
  themes: 'dark',
}

export const themeReducer = (state = initState, action: changeThemeCType): any => {
  // fix any
  switch (action.type) {
    case 'some': {
      return { themes: action.type }
    }
    case 'dark': {
      return { themes: action.type }
    }
    case 'red': {
      return { themes: action.type }
    }
    case 'pink': {
      return { themes: action.type }
    }
    case 'forest': {
      return { themes: action.type }
    }
    default:
      return state
  }
}

export type ThemeType = 'some' | 'dark' | 'red' | 'pink' | 'forest'

type changeThemeCType = {
  type: ThemeType
}

export const changeThemeC = (theme: ThemeType): changeThemeCType => {
  return { type: theme }
} // fix any
