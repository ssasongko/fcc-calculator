import React, { useRef } from 'react'

const NumberButton = ({id, text, handleClick}) => {

    const numberBtn = useRef()

    const buttonStyle = `bg-white hover:bg-slate-200 font-bold py-4 px-2 border
        ${(id === 'add' || id === 'equals') ? "row-span-2" : ""}
        ${(id === 'zero') ? "col-span-2" : ""}`


    return (
        <input 
            ref={numberBtn}
            type='button'
            id={id} 
            className={buttonStyle} 
            value={text}
            onClick={()=>handleClick(numberBtn.current.value)}
        />
    )
}

export default NumberButton