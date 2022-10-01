import React, { ChangeEvent } from 'react'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void // need to fix any
  enterUser: (e: React.KeyboardEvent<HTMLInputElement>) => void
  error: string | null // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers, enterUser } // деструктуризация пропсов
) => {
  const inputClass = error ? s.error : '' // need to fix with (?:)

  return (
    <div>
      <SuperInputText value={name} onChange={setNameCallback} className={inputClass} onKeyDown={enterUser} onBlur={setNameCallback} />
      {/* <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={enterUser} onBlur={setNameCallback} /> */}

      {/* <button onClick={addUser} disabled={!name}>
        add
      </button> */}
      <SuperButton onClick={addUser} disabled={!name}>
        add
      </SuperButton>
      <span>{totalUsers}</span>
      <div className={s.errorMessage}>{error}</div>
    </div>
  )
}

export default Greeting
