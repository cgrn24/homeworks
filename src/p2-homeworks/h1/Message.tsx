import React from 'react'
import s from './Message.module.css'

type PropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: PropsType) {
  return (
    <div className={s.message}>
      <img src={props.avatar} className={s.avatar} alt={'Avatar'} />
      <div className={s.angle} />
      <div className={s.wrapper}>
        <div className={s.name}>{props.name}</div>
        <div className={s.text}>{props.message}</div>
        <div className={s.time}>{props.time}</div>
      </div>
    </div>
  )
}

export default Message
