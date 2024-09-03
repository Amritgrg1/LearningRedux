import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { backgroundColor, resetColor } from './redux/backgroundColor/backgroundSlice'
import { increment, decrement } from './redux/counter/counterSlice'
import Navbar from './components/Navbar';

function App() {
  const count = useSelector((state) => state.count.value);
  const color = useSelector((state) => state.color.value);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div style={{backgroundColor: `${color}`, padding: "100px"}}>
    <Navbar />
      <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(backgroundColor())}>BackgroundColor</button>
      <button onClick={() => dispatch(resetColor())}>ResetColor</button>
      </div> 
    </div>
  )
}

export default App
