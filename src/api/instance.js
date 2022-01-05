import axios from 'axios'
export default axios.create({
  baseURL: 'https://timer-todo-default-rtdb.firebaseio.com/',
})
