const initialState = {
  timerCount: 0,
  pause: false,
  stop: false,
}

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PAUSE':
      return {...state, pause: action.payload}
    default:
      return state
  }
}

export default timerReducer
