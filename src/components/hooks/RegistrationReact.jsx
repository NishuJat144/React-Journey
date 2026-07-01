import { useState } from "react"
import "./Registration.css"
export const RegistrationFormReact = () => {

    // & States for controlling inputs of form 
    const [user , setUser] = useState({
        firstName : "" ,
        lastName : "" ,
        email : "" ,
        password : "" ,
        phoneNumber : "",
    });

    // & Handler  

    const handleInputChange = (e) => {
        const {name , value} = e.target ;

        setUser((prev) => ({...prev , [name] : value}));

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
     }

   return(
        <>
     <p>Hello, my name is {user.firstName + user.lastName}. My email address is {user.email}  
        and my phone number is  {user.phoneNumber}</p>
        
        <section>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create the account</p>
            <form onSubmit={handleFormSubmit}>
            <label htmlFor="firstname">First Name  </label>
            <input type="text" name="firstName" id="firstname" placeholder="Enter First Name"
            value={user.firstName}  onChange={handleInputChange} required  />

            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastName" id="lastname" placeholder="Enter Last Name"
            value={user.lastName} onChange={handleInputChange} required/>

            <label htmlFor="emailfield">Email</label>
            <input type = "email" id="emailfield"  name="email" placeholder="Enter Email"
            value={user.email} onChange={handleInputChange} required />

            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" name="password" placeholder="Enter Password" 
            value={user.password} onChange={handleInputChange} required/>

            <label htmlFor="Phone">Phone Number</label>
            <input type="tel" id="Phone" name="phoneNumber" placeholder="Enter Phone Number" 
            value={user.phoneNumber} onChange={handleInputChange} required/>
           <p>By creating an account you agree to our Terms & Privacy</p>
           <button type="submit">Sign Up</button>
            </form>
         </section>
        </>
    )
}