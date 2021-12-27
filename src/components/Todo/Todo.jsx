import React, { useEffect, useState } from 'react'
import style from './Todo.module.scss'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { TASK_COMPLETED } from '../../redux/constants'
import { TodoActive } from './TodoActive/TodoActive'
import { TodoCompleted } from './TodoCompleted/TodoCompleted'

export const Todo = () => {
  const [taskList, setTaskList] = useState([])
  const [task, setTask] = useState('')
  const [taskFilter, setTaskFilter] = useState('Active')

  const dispatch = useDispatch()

  const { timerCompleted } = useSelector((state) => state.timerReducer)
  const { taskCompleted } = useSelector((state) => state.todoReducer)

  useEffect(() => {
    if (timerCompleted) {
      const completedTask = taskList.map((item) => {
        if (item.checked) {
          item.checked = false
          return item
        }
      })
      const duplicatesTask = taskList.filter((item) => {
        return completedTask.indexOf(item) === -1
      })
      setTaskList(duplicatesTask)
      const arr = completedTask.filter((item) => item !== undefined)
      dispatch({ type: TASK_COMPLETED, payload: arr })
    }
  }, [timerCompleted])

  const onChangeTask = (e) => {
    setTask(e.target.value)
  }

  const completedTask = (id, e) => {
    const checked = taskList.map((item) => {
      if (item.id === id) {
        item.checked = e.target.checked
      }
      return item
    })
    setTaskList(checked)
  }

  const onSubmitTask = (e) => {
    e.preventDefault()
    const id = Math.random()
    const newTask = { id, task, checked: false }
    if (task.length) {
      setTaskList([newTask, ...taskList])
      setTask('')
    }
  }

  const deleteTask = (taskId) => {
    const newList = taskList.filter((item) => taskId !== item.id)
    setTaskList(newList)
  }

  const Filtered = () => {
    switch (taskFilter) {
      case 'Active':
        return (
          <TodoActive
            deleteTask={deleteTask}
            completedTask={completedTask}
            taskList={taskList}
          />
        )
      case 'Completed':
        return (
          <TodoCompleted
            deleteTask={deleteTask}
            completedTask={completedTask}
            taskCompleted={taskCompleted}
          />
        )
      default:
        return
    }
  }

  return (
    <div className={style.todo}>
      <div className={style.todo__container}>
        <div className={style.input__container}>
          <form onSubmit={onSubmitTask}>
            <input
              className={style.input}
              type="text"
              placeholder="Введите задачу"
              value={task}
              onChange={onChangeTask}
            />
          </form>
        </div>
        <div className={style.list__container}>
          <Filtered />
          <div className={cn(style.list__footer, style.footer)}>
            {taskFilter === 'Active' ? (
              <span className={style.taskCount}>
                {taskList.length}
                {taskList.length > 1 ? ' items' : ' item'} left
              </span>
            ) : (
              <span className={style.taskCount}>
                {taskCompleted.length}
                {taskCompleted.length > 1 ? ' items' : ' item'} left
              </span>
            )}
            <ul className={style.filter}>
              <li
                className={style.filter__btn}
                id="Active"
                onClick={(e) => setTaskFilter(e.target.id)}
              >
                Active
              </li>
              <li
                className={style.filter__btn}
                id="Completed"
                onClick={(e) => setTaskFilter(e.target.id)}
              >
                Completed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
