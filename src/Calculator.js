import React, { useContext, useEffect } from 'react'
import Button from './components/Button'
import Icon from './components/Icon'
import ToggleThemes from './components/ToggleThemes'
import { CalculatorContext } from './context/CalculatorContext'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const labels = [
  {
    id : 'clear',
    text: 'C',
    types: 'clear',
  },
  {
    id: 'parentheses',
    text: '()' ,
    types: 'operator'
  },
  {
    id : 'percentages',
    text: '%',
    types: 'operator',
  },
  {
    id: 'divide',
    text: '÷' ,
    types: 'operator'
  },
  {
    id: 'seven',
    text: '7' ,
    types: 'number'
  },
  {
    id: 'eight',
    text: '8' ,
    types: 'number'
  },
  {
    id: 'nine',
    text: '9' ,
    types: 'number'
  },
  {
    id: 'multiply',
    text: 'x' ,
    types: 'operator'
  },
  {
    id: 'four',
    text: '4' ,
    types: 'number'
  },
  {
    id: 'five',
    text: '5' ,
    types: 'number'
  },
  {
    id: 'six',
    text: '6' ,
    types: 'number'
  },
  {
    id: 'subtract',
    text: '-' ,
    types: 'operator'
  },
  {
    id: 'one',
    text: '1' ,
    types: 'number'
  },
  {
    id: 'two',
    text: '2' ,
    types: 'number'
  },
  {
    id: 'three',
    text: '3' ,
    types: 'number'
  },
  {
    id: 'add',
    text: '+' ,
    types: 'operator'
  },
  {
    id: 'plusminus',
    text: '+/-',
    types: 'number'
  },
  {
    id: 'zero',
    text: '0' ,
    types: 'number'
  },
  {
    id: 'decimal',
    text: '.' ,
    types: 'number'
  },
  {
    id: 'equals',
    text: '=' ,
    types: 'equal'
  }

]

const Calculator = () => {

  const { calculated, currentNum, captureClick} = useContext(CalculatorContext)

  useEffect(() => {
    toast.warn('Pass all test on Freecodecamp!, but the web apps still on development', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  }, [])

  return (
    <main className='bg-[#F4F0EF] dark:bg-[#252525] transition-all min-h-screen'>
      <article className='h-full min-h-screen max-h-full max-w-screen-sm mx-auto p-4 flex flex-col justify-end '>
        <section className='flex flex-row-reverse'>
          <ToggleThemes/>
        </section>
        <section className='grow mt-8 flex flex-col'>
          <div className='grow text-4xl text-right dark:text-white text-ellipsis overflow-hidden'>
            <span id='display'>{currentNum}</span>
            <br/>
            <span className='text-[#C8AF9B] dark:text-[#707070] text-[24px]'>{calculated}</span>
            </div>
            <div className='flex items-center justify-between mt-8 mx-5'>
              <Icon source='icons/history.svg' text='history icons' dispatch='history'/>
              <Icon source='icons/delete.svg' text='delete icons' dispatch='delete' looks='mt-1' handleClick={captureClick}/>
            </div>

          <hr className='border-t-[1px] border-[#964B12] mt-4'/>
          <div className='grid grid-cols-4 gap-2 md:gap-4 mt-6'>
            { labels.map((label) => (
            <Button 
              id={label.id} 
              key={label.id}
              text={label.text} 
              types={label.types}
              onClick={captureClick}/>
            ))}
          </div>
        </section>
      </article>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    </main>
  )
}

export default Calculator