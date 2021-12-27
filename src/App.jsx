import { useState } from 'react'
import style from './App.module.scss'
import './icons/index'
import { Timer } from './components/Timer/Timer'
import { SettingModal } from './components/Modal/Modal'
import { Todo } from './components/Todo/Todo'

function App() {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <div className={style.app}>
      <div className={style.app__container}>
        <SettingModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        <Timer openModal={openModal} />
        <Todo />
      </div>
    </div>
  )
}

export default App
