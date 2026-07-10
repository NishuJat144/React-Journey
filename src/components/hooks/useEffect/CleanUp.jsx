import { useEffect, useState } from "react";
import "./index.css"
export const CleanUp = () => {

    // & Hooks
    const [count , setCount] = useState(0);
    
    useEffect(()=> {
     const timer = setInterval(()=> {
        setCount((prev) => prev + 1);
    },1000);
    
    return () => clearInterval(timer);

    } , []);

    return(
       <div>
        <h1>My Subscribers on Youtube</h1>
        <h1> {count} </h1>
        <h2>Subscribers</h2>
        <h2>Realtime Counter</h2>
       </div>
    );

}