import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AppStoreType } from '../h10/bll/store'
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect'
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio'
import { changeThemeC, ThemeType } from './bll/themeReducer'
import s from './HW12.module.css'

const themes = ['dark', 'red', 'some', 'pink', 'forest']

function HW12() {
  const theme = useSelector<AppStoreType, string>((state) => state.themes.themes) // useSelector
  const dispatch = useDispatch()
  // useDispatch, onChangeCallback
  const onChangeCallback = (callbackTheme: ThemeType) => {
    dispatch(changeThemeC(callbackTheme))
  }
  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + '-text']}>homeworks 12</span>
      <br />
      <SuperSelect value={theme} options={themes} onChangeOption={onChangeCallback} />
      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}
      <hr />
    </div>
  )
}

export default HW12
