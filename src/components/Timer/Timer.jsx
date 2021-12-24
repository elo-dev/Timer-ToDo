import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import style from './Timer.module.scss'
import { IS_PLAYING, TIMER_COMPLETED } from '../../redux/constants'

export const Timer = ({ keyTimer, renderTime, setKey }) => {
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

  return (
    <div className={style.timer}>
      <CountdownCircleTimer
        key={keyTimer}
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
    </div>
  )
}
