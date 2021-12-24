import React, { useState } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Modal.module.scss'
import cn from 'classnames'
import { useDispatch } from 'react-redux'
import { DURATION } from '../../redux/constants'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'none',
  },
}

export const SettingModal = ({ modalIsOpen, closeModal }) => {
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)

  const dispatch = useDispatch()

  const setMinutes = (e) => {
    const re = /^[0-9\b]+$/
    const time = +e.target.value
    if (time === '' || re.test(time)) {
      if (time <= 60) {
        setMin(time)
      }
    }
  }

  const setSeconds = (e) => {
    const re = /^[0-9\b]+$/
    const time = +e.target.value
    if (time === '' || re.test(time)) {
      if (time <= 60) {
        setSec(time)
      }
    }
  }

  const submitTime = (e) => {
    e.preventDefault()
    const minInSec = Math.floor(min * 60)
    const totalSec = minInSec + sec
    dispatch({ type: DURATION, payload: totalSec })
    closeModal()
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName={style.modal__overlay}
        style={customStyles}
      >
        <div className={style.modalContent}>
          <div className={style.modalContent__header}>
            <button
              className={cn(style.modalContent__closeBtn, style.btn)}
              onClick={closeModal}
            >
              <FontAwesomeIcon icon="times" />
            </button>
          </div>
          <h1 className={style.modalContent__title}>Пользовательский таймер</h1>
          <div className={style.modalContent__body}>
            <form>
              <div className={style.minutes}>
                <label className={style.minutes__label} htmlFor="min">
                  Минуты
                </label>
                <input
                  type="text"
                  id="min"
                  className={style.minutes__input}
                  value={min}
                  pattern="[0-9]*"
                  onChange={setMinutes}
                />
              </div>
              <div className={style.seconds}>
                <label className={style.seconds__label} htmlFor="sec">
                  Секунды
                </label>
                <input
                  type="text"
                  id="sec"
                  className={style.seconds__input}
                  value={sec}
                  pattern="[0-9]*"
                  onChange={setSeconds}
                />
              </div>
              <button className={style.btn} onClick={submitTime}>
                Сохранить
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  )
}
