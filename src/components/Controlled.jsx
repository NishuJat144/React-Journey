import { useState } from "react";
import "./hooks/hooks.css"
// & Controlled Components
export const ControlledComponent = () => {
  
    // * Use State 
    const [name , setName] = useState("");

    // * Handler to handle form Submission

    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
        
        
    }

    return (
        <section>
            <h1>Controlled Component</h1>
         
            <div className="step">
            <form onSubmit = {handleSubmit}>
                    
            <label>Name : 
            <input type="text" 
            id="inputName" 
            name="name"
            value={name} 
            onChange={handleChange}/>
             </label> 
            <button type = "submit" className="btn">Submit</button>
            </form>
            </div>
        </section>
    )
}