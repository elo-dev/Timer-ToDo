import { DURATION, IS_PLAYING, TIMER_COMPLETED } from '../constants/index'

const initialState = {
  duration: 60,
  isPlaying: false,
  stop: false,
  timerCompleted: false,
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_PLAYING:
      return { ...state, isPlaying: action.payload }
    case TIMER_COMPLETED:
      return { ...state, timerCompleted: action.payload }
    case DURATION:
      return { ...state, duration: action.payload}
    default:
      return state
  }
}

export default timerReducer
