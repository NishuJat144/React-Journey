import {useState} from "react";
import "./Registration.css"
export const ContactForm = () => {

    //  & STATE 
    const [contact , setContact] = useState(
        {
            username : "" ,
            email : "" ,
            message : ""
        }
    )
    // const [username , setUsername] = useState("");
    // const [email , setEmail] =  useState("");
    // const [message , setMessage] = useState("");

    // & Handler Methods
   const handleInputChange = (e) => {
         const {name , value} = e.target ; 
         setContact((prev) => ({
            ...prev , [name] : value ,
         }))
   }



    const handleFormSubmit = (e) => {
         e.preventDefault();
        //  const formData = {
        //     username ,
        //     email ,
        //     message 
        //  }
         console.log(contact);
    }

    return (
        <section>
            <h1>Contact Form</h1>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username" > Username </label> 
                <input type="text" id="username" name="username" value={contact.username} 
                // onChange={(e) => setUsername(e.target.value)} 
                onChange={handleInputChange}
                />
                <label htmlFor="email" >Email</label>
                <input type="email" name="email" id="email" value={contact.email} 
                // onChange={(e) => setEmail(e.target.value)}
                onChange={handleInputChange}
                />
                <label htmlFor="Message"> Message </label>
                <textarea type = "text" cols="10" rows={15} value={contact.message} name="message"
                //  onChange={(e) => setMessage(e.target.value)}
                onChange={handleInputChange}
                 ></textarea>

                <button type="submit">Send Message</button>
             </form>

        </section>
    );
}