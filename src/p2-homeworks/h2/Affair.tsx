import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { AffairType } from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType // need to fix any
  deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
  const deleteCallback = (value: number) => {
    props.deleteAffairCallback(value)
  } // need to fix

  return (
    <tr>
      <td>{props.affair.name}</td>{' '}
      <td className={props.affair.priority === 'high' ? s.high : props.affair.priority === 'middle' ? s.middle : s.low}>{props.affair.priority}</td>
      {/* <button onClick={() => deleteCallback(props.affair._id)}>X</button> */}
      <td>
        <SuperButton onClick={() => deleteCallback(props.affair._id)}>X</SuperButton>
      </td>
    </tr>
  )
}

export default Affair
