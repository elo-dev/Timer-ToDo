import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './ButtonsSetting.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IS_PLAYING } from '../../redux/constants/index'
import cn from 'classnames'

export const ButtonsSetting = ({ setKey, openModal }) => {

  const dispatch = useDispatch()
  const { isPlaying } = useSelector((state) => state.timerReducer)

  const playTimer = () => {
    dispatch({ type: IS_PLAYING, payload: true })
  }

  const pauseTimer = () => {
    dispatch({ type: IS_PLAYING, payload: false })
  }

  const reloadTimer = () => {
    pauseTimer()
    setKey((prevKey) => prevKey + 1)
  }

  return (
    <div className={style.btnSetting}>
      <button className={cn(style.btnSetting__reload, style.btn)} onClick={reloadTimer}>
        <FontAwesomeIcon icon="redo" />
      </button>
      <button className={cn(style.btnSetting__settings, style.btn)} onClick={openModal}>
        <FontAwesomeIcon icon='cog' />
      </button>
      {isPlaying ? (
        <button className={cn(style.btnSetting__pause, style.btn)} onClick={pauseTimer}>
          <FontAwesomeIcon icon="pause" />
        </button>
      ) : (
        <button className={cn(style.btnSetting__play, style.btn)} onClick={playTimer}>
          <FontAwesomeIcon icon="play" />
        </button>
      )}
    </div>
  )
}
