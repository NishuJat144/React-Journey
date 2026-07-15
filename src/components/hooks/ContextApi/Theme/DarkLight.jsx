import { createContext , use, useState } from "react";

// & 1. Create Context for component ThemeContext
export const ThemeContext = createContext();

// & 2. Create Provider Component ThemeProvider 
export const ThemeProvider = ({children}) => {

    // * useState hook to manage states
    const [theme , setTheme] = useState('dark');
        
    // * Handler to handle Toggle Theme
   const handleToggleTheme = () => {
     return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark" ));
    };

    return <ThemeContext.Provider value={{theme , handleToggleTheme}}>
      {children}
    </ThemeContext.Provider>
}

// ^ Creating a Component
export const DarkLight = () => {
   
    const {theme , handleToggleTheme} = use(ThemeContext);
    
    return (
        <div className= {`p-4 flex flex-col justify-center items-center h-lvh
         ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <h1
             className= {`my-4 text-xl 
            ${theme === "light" ? "text-gray-800" : "text-white"}`}>Dark Light Mode Website</h1>

            <p
            className= {`mt-10 text-2xl 
            ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                Hello!! My React v19 Fans 👍 </p>
            <button onClick={handleToggleTheme}
             className="bg-blue-500 hover:bg-blue-600
              text-white rounded-md mt-10 p-4 min-h-20 text-3xl w-1.5xl" >
                {theme === "dark" ? "Switch to dark mode" : "Switch to light mode"}
            </button>
        </div>
    )
}