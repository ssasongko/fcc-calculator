import React from 'react'

const Button = (props) => {
    const textColor = (props.types === 'clear') 
        ? 'text-red-600'
        : (props.types === 'operator')
        ? 'text-[#AB2B5C] dark:text-[#E493B3]'
        : (props.types === 'equal')
        ? 'text-white dark:text-dark'
        : 'text-[#964B12] dark:text-[#F4BA92]'

    const backgroundColor = (props.types === 'equal')
        ? 'bg-[#AB2B5C] dark:bg-[#E493B3]'
        : 'bg-[#F1E6E0] dark:bg-[#171717]'

    return (
        <button id={props.id} className={`basis-1/4 ${backgroundColor} ${textColor} rounded-full p-4 cursor-pointer`} onClick={() => props.onClick(props.text)}>
            <span className='text-[2rem] font-black'>{props.text}</span>
        </button>
    )
}

export default Button