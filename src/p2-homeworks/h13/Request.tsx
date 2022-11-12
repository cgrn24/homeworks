import React, { useEffect, useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox'
import { requestAPI } from './request_api'

export const Request = () => {
  const [value, setValue] = useState(false)
  const [status, setStatus] = useState<string>('')
  const onClickHandler = () => {
    setStatus('')
    requestAPI.postRequest(value).catch((error: any) => {
      console.log({ ...error })
      console.log(error.response ? error.response.data.errorText : error.message)
      setStatus(error.response ? error.response.data.errorText : error.message)
    })
  }
  return (
    <div>
      <SuperCheckbox checked={value} onChangeChecked={setValue}></SuperCheckbox>
      <br />
      <SuperButton onClick={onClickHandler}>Post value</SuperButton>
      <div>Статус ошибки: {status} </div>
    </div>
  )
}
