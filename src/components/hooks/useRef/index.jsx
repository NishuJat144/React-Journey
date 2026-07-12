import { useRef } from "react";
import "./index.css"
export const UseRef = () => {

    // ? Take Reference of both input fields 
    //? const username = document.getElementById('username');
    //?const password = document.getElementById('password');

    // & useRef Hook 
    const username = useRef(null);
    const password = useRef(null);
    
    // console.log(username);
    

    //? console.log(username);
    //? console.log(password);
    
//* Handler to handle form Submit
   const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(username.value , password.value);
        console.log(username.current.value, password.current.value);

        

   }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={username}/>
            <br />
            <input type="password"  id="password" ref={password}/>
            <br />
            <button>Submit</button>
        </form>

    );
};