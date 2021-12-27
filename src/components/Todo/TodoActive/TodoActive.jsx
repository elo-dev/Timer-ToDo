import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import style from '../Todo.module.scss'

export const TodoActive = ({ taskList, completedTask, deleteTask }) => {
  return (
    <ul className={style.list}>
      {taskList.map(({ id, task, checked }) => (
        <li key={id} className={cn(style.list__item, style.item)}>
          <div className={style.item__title}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => completedTask(id, e)}
            />
            <p className={style.text}>{task}</p>
          </div>
          <button
            className={style.item__btnDelete}
            onClick={() => deleteTask(id)}
          >
            <FontAwesomeIcon icon="times" />
          </button>
        </li>
      ))}
    </ul>
  )
}
