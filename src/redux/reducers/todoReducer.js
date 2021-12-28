import { REMOVE_TASK, TASK_COMPLETED } from '../constants'

const initialState = {
  taskCompleted: [],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_COMPLETED:
      return {
        ...state,
        taskCompleted: [...action.payload, ...state.taskCompleted],
      }
    case REMOVE_TASK:
      return { ...state, taskCompleted: action.payload }
    default:
      return state
  }
}

export default todoReducer
