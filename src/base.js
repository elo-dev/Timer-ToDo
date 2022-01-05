import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDJz9VFl7lljKzOKLIyOWvstxW3HkY-ev8',
  authDomain: 'timer-todo.firebaseapp.com',
  databaseURL: 'https://timer-todo-default-rtdb.firebaseio.com',
  projectId: 'timer-todo',
  storageBucket: 'timer-todo.appspot.com',
  messagingSenderId: '301900459747',
  appId: '1:301900459747:web:644ad02546630235221fd6',
  measurementId: 'G-6Q5R47MM4Z',
}

firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.database().ref()

export const taskRef = databaseRef.child('tasks')
export const taskCompletedRef = databaseRef.child('tasksCompleted')
export default firebase
