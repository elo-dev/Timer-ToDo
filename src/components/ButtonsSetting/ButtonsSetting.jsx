import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './ButtonsSetting.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ButtonsSetting = ({ setKey }) => {
  const dispatch = useDispatch()
  const { pause } = useSelector((state) => state.timerReducer)

  const playTimer = () => {
    dispatch({ type: 'PAUSE', payload: true })
  }

  const pauseTimer = () => {
    dispatch({ type: 'PAUSE', payload: false })
  }

  const reloadTimer = () => {
    pauseTimer()
    setKey((prevKey) => prevKey + 1)
  }

  return (
    <div className={style.btnSetting}>
      <button className={style.btnSetting__reload} onClick={reloadTimer}>
        <FontAwesomeIcon icon="redo" />
      </button>
      {pause ? (
        <button className={style.btnSetting__pause} onClick={pauseTimer}>
          <FontAwesomeIcon icon="pause" />
        </button>
      ) : (
        <button className={style.btnSetting__play} onClick={playTimer}>
          <FontAwesomeIcon icon="play" />
        </button>
      )}
    </div>
  )
}
