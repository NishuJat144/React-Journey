import {useEffect, useState } from "react"
import "./index.css"
export const EffectChallenge = () => {

    //* useState hook
    const [count , setCount] = useState(0);
    const [name , setName] = useState("");
    
    // * useEffect Hook 
    useEffect(() => {
        console.log(name);
        
    } , [name]);

    useEffect(() => {
        document.title = `count: ${count}`;
    } , [count]);
    

    return(
        <div>
            <h1>useEffect Challenge</h1>
            <p>Count : {count} </p>
            <button onClick={() => setCount(count + 1)}>Increement</button>
            <p>Name : {name} </p>
            <input type="text" placeholder="Enter Name"
              value={name} onChange={(e) => setName(e.target.value)} />

        </div>
    )

}