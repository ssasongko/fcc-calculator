import React from 'react'

const Icon = ({source, text, looks, dispatch, handleClick}) => {
  return (
    <i>
      <img src={source} alt={text} className={looks} onClick={()=>handleClick(dispatch)}/>
    </i>
  )
}

export default Icon