import { useState } from "react";
import "./State.css"
export const State = () => {
  
    // let value = 0 ; 

    // const handleButtonClick = () => {
    //     value++ ; 
    //     console.log(value);
    //  } ;

//    * let array = useState();
//   * console.log(array);


    // * usestate hook 
   const [count , setCount] = useState(0);
   console.log(count);
   console.log("Parent Component re-rendered");
   
   
   const handleButtonClick = () =>{
    setCount(() => count + 1);
   };



    return(
        <>
        <section>
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increement</button>
        </section>
      
      <ChildComponent />

        </>
    );
};

function ChildComponent(){
    console.log("Child Component rendered");
    return <div> <h2>Child Component </h2></div> ; 
    
}