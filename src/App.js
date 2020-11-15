import React, {useState, useEffect} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import firebase from 'firebase';
import './App.css';
import Todo from './Todo';
import db from './firebase'

function App() {

  const [todos,setTodos] = useState([])
  const [input,setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = e => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input type = 'text' value={input} onChange = {e => setInput(e.target.value)} />
        </FormControl>
        <Button disabled = {!input} variant = "contained"  color = "primary" onClick = {addTodo}>Add Todo</Button>
      </form>
      { /* <button onClick = {addTodo}>Add Todo</button> */}

      <ul>
        {
          todos.map(todo => <Todo todo = {todo} />)
        }
      </ul>
    </div>
  );
}

export default App;
