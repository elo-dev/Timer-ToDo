import { useState } from 'react'
import style from './App.module.scss'
import './icons/index'
import { ButtonsSetting } from './components/ButtonsSetting/ButtonsSetting'
import { Timer } from './components/Timer/Timer'
import { SettingModal } from './components/Modal/Modal'

function App() {
  const [key, setKey] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <p className={style.completeTimer}>Выполнено</p>
    }
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    return (
      <p className={style.timeCount}>
        {minutes >= 10 ? minutes : `0${minutes}`} :{' '}
        {seconds >= 10 ? seconds : `0${seconds}`}
      </p>
    )
  }

  return (
    <div className={style.app}>
      <div className={style.app__container}>
        <SettingModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        <Timer keyTimer={key} renderTime={renderTime} setKey={setKey} />
        <ButtonsSetting setKey={setKey} openModal={openModal} />
      </div>
    </div>
  )
}

export default App
