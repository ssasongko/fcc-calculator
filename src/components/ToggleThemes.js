import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ToggleThemes = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            <i>
                <img className='cursor-pointer' src={theme === 'light' ? 'icons/moon.svg' : 'icons/sun.svg'} alt='dark-mode' onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}/>
            </i>
        </div>
    )
}

export default ToggleThemes