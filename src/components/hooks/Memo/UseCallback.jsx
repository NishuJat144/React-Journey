import { Children, memo, useCallback, useState } from "react";

const Button = memo(({onClick , children}) => {
    console.log(`Rendering button : ${children}`);

    return(
        <button
         className= {`text-black mb-5   h-20 w-96 gap-1.5 text-4xl ${
            children === "Increment" ? "bg-green-400" : "bg-red-400"
         }`}
          onClick={onClick}
          >
            {children}
        </button>
    );
});

export default function UseCallback() {
    const [count , setCount] = useState(0);

    // * Memoize the increment function 
    // const increment = () => {
        // console.log("increment inside");
        // setCount((prevCount) => prevCount + 1);
    // };
    
    // & useCallback Hook 
    const increment = useCallback(() => {
          console.log("increment inside");
          setCount((prevCount) => prevCount + 1);
    } , []);
     
    // * Memoize the decrement Function 
     const decrement = useCallback(() => {
        console.log("decrement inside");
        setCount((prevCount) => prevCount - 1)
     },[]);

    return(
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col  gap-5 justify-center items-center
         bg-black text-white">
            <h1 className="mb-4 text-white">Count : {count}</h1>
            <Button onClick = {increment}>Increment</Button>
            <Button onClick = {decrement}>Decrement</Button>

        </div>
    )


}