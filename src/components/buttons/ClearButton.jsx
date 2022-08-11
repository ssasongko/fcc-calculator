import React from 'react'

const ClearButton = ({id, text, onClear}) => {
  return (
    <input 
        type='button' 
        id={id} 
        className="bg-slate-100 hover:bg-slate-200 font-bold py-2 px-4 border"
        value={text}
        onClick={()=>onClear()}
    />
  )
}

export default ClearButton