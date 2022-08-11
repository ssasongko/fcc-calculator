import React, { useRef } from 'react'

const OperationButton = ({id, text, handleClick}) => {
    const inputButton = useRef()

    const buttonStyle = `bg-slate-100 hover:bg-slate-200 font-bold py-4 px-2 border
        ${(id === 'add' || id === 'equals') ? "row-span-2" : ""}
        ${(id === 'zero') ? "col-span-2" : ""}`

    return (
        <input 
            type='button' 
            ref={inputButton}
            id={id} 
            className={buttonStyle}
            value={text}
            onClick={()=>handleClick(inputButton.current.value)}
        />
    )
}

export default OperationButton