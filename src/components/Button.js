import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

const Button = (props) => {
    const test = useContext(AppContext)

    return (
        <button className='bg-btn-light'>
            {props.text}
        </button>
    )
}

export default Button