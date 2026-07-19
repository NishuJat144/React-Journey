import React, { memo, useRef } from "react";

export const Counts = memo(({bioData}) => {
    const renderCount = useRef(0);
    console.log(renderCount);
    
    return(
        <div className="mt-3 font-display text-center">
            <p className="text-4xl">
                Nothing Changed here but Ive now Rendered :
                <span className="text-red-600">{renderCount.current++}time(s)</span>
            </p>
            <p className="text-4xl">My name is : {bioData.name}</p>
        </div>
    )
})

// export default memo(Counts) ;