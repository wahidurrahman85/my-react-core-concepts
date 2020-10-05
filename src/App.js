import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayok = ['rajjak', 'bobita', 'sabana', 'sabnur']
const products = [
  {name: 'Photoshop', price: '$90.99'} ,
  {name: 'Illustrator', price: '$65.89'},
  {name:'PDF', price: '$60.50'}
]
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
       <Users></Users>
       <Todos></Todos>
        <ul>
          {  
          nayok.map(nayok => <li>{nayok} </li>)
          
          }
          {
            products.map(product => <li>{product.name} </li>)
          }
                </ul>

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
      <Person name = "Wahidur Rahman" age ="35"></Person>
     <Person name= "Arhman" age ="4.5"></Person>
     <Person name= "Ayan" age = "2"></Person>
      </header>
    </div>
  );
}
function Counter(){
const [count, setCount] = useState(0)

return(
  <div> 
    <h1> Count:  {count} </h1>  
    <button onClick = {() => setCount(count - 1)}>Decrease</button>
    <button onClick = {() => setCount(count + 1)}>Increase</button>

  </div>
)
}

function Users(){
const [users, setUsers] = useState([])
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
}, [])
  return (
    <div>
  <h3> Dynamic Data Loading: {users.length} </h3>
 <ul>
   {
     users.map(user => <li> {user.name} </li>)
   }
 </ul>

  </div>
  )
  
}



function Product(props){

  const productStyle={
    border: '1px solid gray',
    borderRadious: '5px',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;

  return (
    <div style={productStyle}>
      <h3>{name} </h3>
      <h5>{price} </h5>
      <button>Buy Now</button>

    </div>
  )
}

function Person(props){
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style ={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Age: {props.age} </h3>

    </div>
  )
}

function Todos(){
    const [todos, setTodos] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
    }, []
    )
  return (
    <div>
      <h2> Dynamic Todo Data: {todos.length} </h2>
  
  <ol>
    {
      todos.map(todo => <li>{todo.title}</li>)
    }

  </ol>

    </div>
  )
}

export default App;
