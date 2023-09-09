import React from "react";
import "../Game.css"

const GameCircle = ({id, children, className,onCircleClicked}) =>{

    const onClick = (evt, id) =>{
        // debugger
        onCircleClicked(id)
    }

    return (
        <div className={`gameCircle ${className}`} onClick={(evt)=>onClick(evt, id)}>
            {children}
        </div>

    )
}

export default GameCircle