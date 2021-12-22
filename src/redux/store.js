import { combineReducers, createStore } from "redux";
import timerReducer from './reducers/timerReducer'

const rootReducer = combineReducers({
    timerReducer
})

const store = createStore(rootReducer)

export default store