import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<string | null>(null) // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const fixedName = e.currentTarget.value.trim() // need to fix

    if (fixedName) {
      setName(fixedName)
      error && setError(null)
    } else {
      setName('')
      setError('name is required')
    }
  }
  const addUser = () => {
    addUserCallback(name)
    alert(`Hello ${name} !`) // need to fix
  }

  const enterUser = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && name) {
      addUser()
      setName('')
    }
  }

  const totalUsers = users.length // need to fix

  return <Greeting name={name} setNameCallback={setNameCallback} addUser={addUser} error={error} totalUsers={totalUsers} enterUser={enterUser} />
}

export default GreetingContainer
