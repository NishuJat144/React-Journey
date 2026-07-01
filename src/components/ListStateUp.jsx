import { useState } from "react";
import "./EV.css" ;

export const LiftingState = () => {
    
    // * STATE
    const [inputValue , setInputValue] = useState("");

    return(
        <>
        <InputComponent inputValue = {inputValue} setInputValue = {setInputValue}/>
        <DisplayComponent inputValue = {inputValue}/>
        </>
    );
};

const InputComponent = ({inputValue , setInputValue}) => {
    return( <>
    <input type ="text" placeholder="Enter your name" 
    value={inputValue} 
    onChange={(e) => setInputValue(e.target.value)}
    className="inputField"
    >
    </input>
    </>
    );
};

const DisplayComponent = ({inputValue}) => {
    return <p className="pf">The current input value is : {inputValue} </p>
}
