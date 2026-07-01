import "./EV.css"
export const EventPropagation = () => {

    const handleGrandParentDiv = () => {
        console.log("Grand Parent clicked");
        
    }

    const handleParentClick = () => {
        console.log("Parent Clicked");
    };

    const handleChildClick = (event) => {
        console.log(event);
        event.stopPropagation();
        console.log("Child Clicked");
    };

    return(
        <>
        <section className="main-div">
            {/* BUBBLING PHASE IN EVENT PROPAGATION */}
            <h1>Bubbling Phase in Event Propagation</h1>
            <div className="g-div" onClick={handleGrandParentDiv}>
                <div className="p-div" onClick = {handleParentClick}>
                    <button className="c-div" onClick = {handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>

         <section className="second-div">
            {/* CAPTURING PHASE IN EVENT PROPAGATION */}
            <h1>Capturing Phase in Event Propagation</h1>
            <div className="g-div" onClickCapture={handleGrandParentDiv}>
                <div className="p-div" onClickCapture = {handleParentClick}>
                    <button className="c-div" onClickCapture = {handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
        </>
    );

}