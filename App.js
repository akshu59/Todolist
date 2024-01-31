// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import First from "./Components/First";


// import homep from "./Components/homep";

function App() {
const [text, setText] = useState('');
const[todolist, setTodolist] = useState([]);
const addItem = () => {
 const newTodoItem = {
    id: '123',
    item: text,
    done: false,
  };
 setTodolist([...todolist, newTodoItem]);
};

console.log("todolist:", todolist);

// [
//   {
//     id:'',
//     item: 'milk',
//     done: false,
//   }
// ]
  return (
    <div className="App">
     <h1>To Do List</h1>
     <div className='adder'>
      <input type='text' placeholder='Add items to your list'value={text} onChange={(e) => setText(e.target.value)}/>
      <span onClick={addItem}>+</span>
      </div>    
    </div>
  );
}

export default App;




