"use client"
import React, { useState } from 'react';
import "./Header.css";


export default function Header() {
 const [count, setCount] = useState(0);

 const increment = () => {
   setCount(count + 1);
 };
 const decrement = () => {
   setCount(count - 1);
 };
 const reset = () => {
   setCount(0);
 };


  return (
    <>
      <div className="counter">
      <h6>Counter: {count}</h6>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
      
    </>
  );
}
