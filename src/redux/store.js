import { combineReducers, createStore } from 'redux'
import timerReducer from './reducers/timerReducer'
import todoReducer from './reducers/todoReducer'

const rootReducer = combineReducers({
  timerReducer,
  todoReducer,
})

const store = createStore(rootReducer)

export default store
