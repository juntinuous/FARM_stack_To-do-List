import React, { useState, useEffect} from 'react';
import './App.css';
import TodoView from './components/TodoListView';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('') 
  const [desc, setDesc] = useState('')


  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data);
      })
  }, []); 

  // Post a todo
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
};
  
  return (
    <div className="App">
      Hello WOrld!
    <h1 className="card text-white bg-primary mb-1"
      StyleName="max-width: 20rem;">Task Manager</h1>
    
    <h6>FastAPI-React-MongoDB</h6>
    <br></br>
    <div className="card-body">
    <h5>Add Today's Task</h5>
      <span className='card-text'>
      <input onChange={event => setTitle(event.target.value)} placeholder='Title'></input>
              <br></br>
      <textarea onChange={event => setDesc(event.target.value)} placeholder='Description'></textarea>
      <button style={{'borderRadius':'50px',"font-weight":"bold" }} onClick={addTodoHandler}>Add Task</button>

      </span>

    <h5 >Your Task</h5>
    <div>
        <TodoView todoList={todoList}/>
    </div>

    </div>








    </div>
  );
}

export default App;
