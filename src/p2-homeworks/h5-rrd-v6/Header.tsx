import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Pages'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      {/* // add NavLinks */}
      <NavLink to={PATH.PRE_JUNIOR} className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        Pre-junior
      </NavLink>
      <NavLink to={PATH.JUNIOR} className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        Junior
      </NavLink>
      <NavLink to={PATH.JUNIOR_PLUS} className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        Junior+
      </NavLink>
      <div className={styles.block} />
    </div>
  )
}

export default Header
