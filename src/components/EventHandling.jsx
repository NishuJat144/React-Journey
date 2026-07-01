import "./EV.css"
export const EventHandling = () => {
    function handleButton(event){
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey! , I am Event Handling");
    }

    function handleWelcome(user){
        console.log(`Welcome💖 , ${user} to this wonderful evening.`);
       }

    return (
          <>
          {/* Named Function */}
          <button onClick={handleButton}>Click Me</button>
         
         {/* WITH FAT ARROW FUNCTION */}
          <button onClick={(event) => handleButton(event)}>Click Me 2 </button>

          {/*INLINE EVENT HANDLER*/}
          <button onClick={(event) => console.log(event)}>Inline</button>
          
          {/* FUNCTION COMPONENT WITH INLINE ARROW FUNCTION */}
          <button onClick={() => alert("I am Inline Function")}>INLINE Function</button>

         {/* Passing Arguments to Event Handlers */}
          <button onClick={() => handleWelcome("Yogesh")}>Welcome</button>
          <button onClick={() => handleWelcome("Nishu")}>Welcome</button>

           

          </>
    );
};