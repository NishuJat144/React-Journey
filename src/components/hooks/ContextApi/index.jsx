import {createContext} from "react";

//& 1. Creating Context => Warehouse
export const BioContext = createContext();

//& 2. Providing Provider => Delivery Boy
export const BioProvider = ({children})=> {
  const myName = "Yogesh"
  const myAge = 21 ;
  console.log(children);
  
  return <BioContext.Provider value={{myName , myAge}}>{children}</BioContext.Provider>
}