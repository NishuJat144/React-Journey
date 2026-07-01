import "./EV.css"
//& Passing Events as Props
export const EventProps = ()=> {

    const handleWelcomeUser = (user)=> {
        alert(`Hey, ${user}`);
     };
    
     const handleHover = ()=> {
        alert("Thanks! for Hovering on Me");
     };

     

    return (
        <>
        {/* CHILD COMPONENT */}
        <WelcomeUser 
         onClickButton = {()=> handleWelcomeUser("Yogesh")}
         onEnterMouse = {handleHover}   
         />
        </>
    );
};

const WelcomeUser = (props) => {
    const handleGreetings = ()=> {
        console.log(`Hey User , Welcome`);
        props.onClickButton();
    }

    return(
        <>
        <button onClick={props.onClickButton}>Click</button>
        <button onClick = {props.onEnterMouse}>Hover Me</button>
        <button onClick = {handleGreetings}>Greeting</button>
        </>

    );
};