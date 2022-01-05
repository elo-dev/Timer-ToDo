import React, { useState } from 'react'
import style from './Calendar.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { Meeting } from '../Meeting/Meeting'
import { Calendar } from 'react-multi-date-picker'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'
import { useEffect } from 'react'
import instance from '../../api/instance'
// import { noteRef } from '../../base'

export const CalendarMeeting = () => {
  const [values, setValues] = useState([])
  const [meetingDate, setMeetingDate] = useState([])

  useEffect(() => {
    reverseArr()
  }, [values])

  const reverseArr = () => {
    const reverseArr = values.reverse()
    setMeetingDate(reverseArr)
    // noteRef.push('dima')
    // instance.post('/notes.json',{
      // date: rev 
    // })
  }

  return (
    <div className={style.calendar}>
      <div className={style.calendar__container}>
        <Calendar
          value={values}
          onChange={setValues}
          multiple
          plugins={[<TimePicker hideSeconds />, <DatePanel />]}
        />
        <div className={style.meeting}>
          <Meeting dates={meetingDate} />
        </div>
      </div>
    </div>
  )
}
