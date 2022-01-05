import React from 'react'
import style from './Meeting.module.scss'

export const Meeting = ({ dates }) => {
  return (
    <>
      {dates.map(({ day, month: { number }, year, hour, minute }) => (
        <div className={style.meeting__container} key={Math.random()}>
          <p className={style.meeting__date}>
            {day < 10 ? `0${day}` : day}:{number < 10 ? `0${number}` : number}:
            {year}
          </p>
          <p className={style.meeting__time}>
            {hour < 10 ? `0${hour}` : hour}:
            {minute < 10 ? `0${minute}` : minute}
          </p>
        </div>
      ))}
    </>
  )
}
