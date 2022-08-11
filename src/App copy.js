import React, { useState } from 'react'
import './App.css'
import ClearButton from './components/buttons/ClearButton'
import NumberButton from './components/buttons/NumberButton'
import OperationButton from './components/buttons/OperationButton'

function App() {
  const [value, setValue] = useState({num: 0, firstTime: true})
  const [memory, setMemory] = useState(0)
  const [hint, setHint] = useState(null)
  const [operator, setOperator] = useState(null)

  const [test, setTest] = useState("")

  const onAddNumberToDisplayHandler = (number) => {
    if(Number(value.num) === 0){
      if(Number(number) === 0) return setValue({...value, num: number})
      return setValue({...value, num: number})
    }
    
    setValue(({...value, num: `${value.num}${number}`}))
  }

  const onOperationHandler = (operatorProp) => {
    setOperator(operatorProp)
    let firstNum = (value.firstTime && (operatorProp === '-' || operatorProp === '*') 
      ? value.num 
      : Number(memory))

    let secondNum = (value.firstTime && operatorProp === '-') 
      ? Number(memory) 
      : (value.firstTime && (operatorProp === '*' || operatorProp === '/'))
      ? 1
      : Number(value.num)

    setValue({num: 0, firstTime: false})


    let total = operation(firstNum, secondNum, operatorProp)
    
    setHint(`${total} ${operatorProp} `)
    setMemory(total)
  }
  
  const operation = (first, second, operator) => {

    switch(operator){
      case '+' :
        return first + second
      case '-' :
        return first - second
      case '*' :
        return first * second
      case '/' :
        return first / second
      case '=' :
      default :
        return
    }
  }

  const onClearHandler = () => {
    setValue({num: 0, firstTime: true})
    setHint(null)
    setMemory(0)
  }

  return (
    <main className='bg-slate-500'>
      <section className='h-screen flex justify-center items-center'>
        <div className='w-4/5 md:w-1/4 bg-white p-5'>
          <div className='text-right basis-full bg-slate-400 py-2 px-4'>
            <span>{hint}</span>
            <br/>
            {/* <span id="display">{value.num}</span> */}
            
            <input className="text-right" value={value.num}/>

          </div>

          <div className='grid grid-cols-4'>
            <OperationButton handleClick={onClearHandler} id="clear" text="C"/>
            <OperationButton handleClick={onOperationHandler} id="divide" text="/"/>
            <OperationButton handleClick={onOperationHandler} id="multiply" text="*"/>
            <OperationButton handleClick={onOperationHandler} id="subtract" text="-"/>

            <NumberButton handleClick={onAddNumberToDisplayHandler} id="seven" text="7"/>
            <NumberButton handleClick={onAddNumberToDisplayHandler} id="eight" text="8"/>
            <NumberButton handleClick={onAddNumberToDisplayHandler} id="nine" text="9"/>
            <OperationButton handleClick={onOperationHandler} id="add" text="+"/>

            <NumberButton handleClick={onAddNumberToDisplayHandler} id="four" text="4"/>
            <NumberButton handleClick={onAddNumberToDisplayHandler} id="five" text="5"/>
            <NumberButton handleClick={onAddNumberToDisplayHandler} id="six" text="6"/>

            <NumberButton handleClick={onAddNumberToDisplayHandler} id="one" text="1"/>
            <NumberButton handleClick={onAddNumberToDisplayHandler} id="two" text="2"/>
            <NumberButton handleClick={onAddNumberToDisplayHandler} id="three" text="3"/>
            <OperationButton handleClick={onOperationHandler} id="equals" text="="/>

            <NumberButton handleClick={onAddNumberToDisplayHandler} id="zero" text="0"/>
            <NumberButton id="decimal" text="."/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
