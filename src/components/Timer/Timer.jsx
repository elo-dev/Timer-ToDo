import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import style from './Timer.module.scss'
import { IS_PLAYING, TIMER_COMPLETED } from '../../redux/constants'
import { ButtonsSetting } from '../ButtonsSetting/ButtonsSetting'

export const Timer = ({ openModal }) => {
  const [key, setKey] = useState(0)
  const { isPlaying, timerCompleted, duration } = useSelector(
    (state) => state.timerReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (timerCompleted) {
      const compl = setInterval(() => {
        dispatch({ type: TIMER_COMPLETED, payload: false })
        setKey((prevKey) => prevKey + 1)
        dispatch({ type: IS_PLAYING, payload: false })
        clearInterval(compl)
      }, 3000)
    }
  }, [timerCompleted])

  useEffect(() => {
    dispatch({ type: IS_PLAYING, payload: false })
    setKey((prevKey) => prevKey + 1)
  }, [duration])

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
    <div className={style.timer}>
      <CountdownCircleTimer
        key={key}
        isPlaying={isPlaying}
        duration={duration}
        trailColor={'#d8dfbb'}
        size={240}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
        onComplete={() => {
          dispatch({ type: TIMER_COMPLETED, payload: true })
          return [false, 1000]
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
      <ButtonsSetting setKey={setKey} openModal={openModal} />
    </div>
  )
}
