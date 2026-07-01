import { useState } from "react";
import "../hooks.css"
export const Challenge = () => {

    // * State 
    // & Increment & Decrement State 
    const [count , setCount] = useState(0);

    // & State for input change 
    const [input , setInput] = useState(0);
    
    // & Handler Methods
    const handleIncrement = () => 
    {
        setCount(count + input);
    }

    const handleDecrement = () => {
        setCount(count - input)
     }

    const handleReset = () => {
        setCount(0);
    } 
    return (
        <section>
            <h1>useState Challenge</h1>

            <p>Count : {count} </p>
          
            <div className="step">
            <p>Step :</p>
            <input type="number" 
            value = {input} 
            onChange={(e) => setInput(Number(e.target.value))}
             />
            </div>

            <div>
            <button onClick={handleIncrement} disabled = {count >= 100}>Increment</button>
            <button onClick={handleDecrement} disabled = {count <= 0}>Decrement</button>
            <button onClick = {handleReset}>Reset</button>
           </div>
      </section>
    );
};