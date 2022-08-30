import React from 'react'
import logo from '../../assets/images/logo.png'
import style from './app.module.scss'

function App() {
  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
      </header>
    </div>
  )
}

export default App
