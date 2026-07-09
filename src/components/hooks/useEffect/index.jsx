import { useEffect, useState } from "react"
import "./index.css"
export const ReactUseEffect = () => {

        // useState Hook
        const [count , setCount] = useState(0);

        // useEffect Hook
        useEffect(() => {
            // console.log("Hello , useEffect hook");
            console.log("count value :" , count);
            
            
        } , [count])
    return (
        <div>
        <h1>Hello , useEffect Hook</h1>
        <p>Count  : {count} </p>
        <button onClick={() => setCount(count + 1)}>Increement</button>
        </div>
    );
};