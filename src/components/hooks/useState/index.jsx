import { useState } from "react";
import "../hooks.css"
export const Counter = () => {

    // * useState()
    const [count , setCount] = useState(0);

    return (
        <div className="statediv">
            <h1>useState Hook!</h1>
            <br />
            <p>{count}</p>
            <button onClick={() => setCount(count+ 1)}>Increement</button>
        </div>
    );
};