import React from 'react'
import { useSelector } from 'react-redux'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import style from './Timer.module.scss'

export const Timer = ({ keyTimer, renderTime }) => {

  const { pause } = useSelector((state) => state.timerReducer)

  return (
    <div className={style.timer}>
      <CountdownCircleTimer
        key={keyTimer}
        isPlaying={pause}
        duration={3}
        size={240}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
        onComplete={() => [false, 1000]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
}
