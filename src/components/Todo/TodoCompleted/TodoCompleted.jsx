import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import style from '../Todo.module.scss'

export const TodoCompleted = ({ taskCompleted, deteleCompletedTask, returnActive }) => {
  return (
    <ul className={style.list}>
      {taskCompleted &&
        taskCompleted.map(({ id, task }) => (
          <li key={id} className={cn(style.list__item, style.item)}>
            <div className={style.item__title}>
              <button className={style.returnActive} onClick={() => returnActive(id)}>
                <FontAwesomeIcon icon="undo" />
              </button>
              <p className={style.text}>{task}</p>
            </div>
            <button
              className={style.item__btnDelete}
              onClick={() => deteleCompletedTask(id)}
            >
              <FontAwesomeIcon icon="times" />
            </button>
          </li>
        ))}
    </ul>
  )
}
