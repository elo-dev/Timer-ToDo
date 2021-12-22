import { useState } from 'react'
import style from './App.module.scss'
import './icons/index'
import { ButtonsSetting } from './components/ButtonsSetting/ButtonsSetting'
import { Timer } from './components/Timer/Timer'

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

function App() {
  const [key, setKey] = useState(0)
  return (
    <div className={style.app}>
      <div className={style.app__container}>
        <Timer keyTimer={key} renderTime={renderTime} />
        <ButtonsSetting setKey={setKey} />
      </div>
    </div>
  )
}

export default App
