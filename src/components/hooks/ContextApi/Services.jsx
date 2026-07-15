import { useContext } from "react"
import { BioContext } from ".";

export const Services = () => {

    //& 3. Consumer
   const {myName , myAge} =  useContext(BioContext);
   
    return (
    <section 
       className= {`p-4 h-lvh font-display tracking-wider flex flex-col
       justify-center items-center bg-gray-900 text-white`}>
         <h1>
        Hello Context API (Services). My Name is {myName}. My age is {myAge}
        </h1>
    </section>
        )

}