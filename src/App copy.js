import React, { useEffect, useState } from 'react'
import './App.css'
import NumberButton from './components/buttons/NumberButton'
import OperationButton from './components/buttons/OperationButton'

function App() {
  const [value, setValue] = useState(0)
  const [memory, setMemory] = useState(0)
  const [hint, setHint] = useState(null)
  const [operator, setOperator] = useState(null)

  useEffect(() => {
    console.log('memory ' + memory)
  }, [memory])

  useEffect(() => {
    console.log('operator ' + operator)
  }, [operator])

  const onAddNumberToDisplayHandler = (number) => {
    if(value.length === undefined){
      return (Number(number) === 0) ? setValue(0) : setValue(number)
    }
    setValue(`${value}${number}`)
  }

  const operation = (first, operator, second) => {
    if (operator === "+") {
      return (first + second)
    }
    else if (operator === "-") {
      return (first - second)
    }
    else if (operator === "*") {
      return (first * second)
    }
    else if (operator === "/") {
      return (first / second)
    }
    return 0
  }

  const onOperationHandler = (operatorProp) => {
    switch(operatorProp){
      case '+' :
        if(operator != null){
          let t1 = operation(Number(memory), operator ,Number(value));
          setMemory(t1);
          // setHint(`${t1} + `)
        }
        else{
          setMemory(Number(value))
        }
        setValue(0)
        setOperator('+')
        break
      case '-' :
        if(operator != null){
          let t1 = operation(Number(memory), operator ,Number(value));
          setMemory(t1);
        }
        else{
          setMemory(Number(value))
        }
        setValue(0)
        setOperator('-')
        break
      case '*' :
        if(operator != null){
          let t1 = operation(Number(memory), operator ,Number(value));
          if(operatorProp === "-"){
            t1 *= -1
          }
          setMemory(t1);
          // setHint(`${t1} * `)
        }
        else{
          setMemory(Number(value))
        }
        setValue(0)
        setOperator('*')
        break
      case '/' :
        if(operator != null){
          let t1 = operation(Number(memory), operator ,Number(value));
          setMemory(t1);
          // setHint(`${t1} / `)
        }
        else{
          setMemory(Number(value))
        }
        setValue(0)
        setOperator('/')
        break
      case '=' :
        if(operator != null){
          let t1 = operation(Number(memory), operator ,Number(value));
          console.log('t1 adalah: ' + t1)
          setValue(t1);
        }
        else{
          return
        }
        setMemory(null)
        setHint(null)
        setOperator(null)
        break
      default :
        return
    }
  }

  const onAddDecimalToDisplayHandler = () => {
    if(value.includes(".")) return
    setValue(`${value}.`)
  }

  const onClearHandler = () => {
    setValue(0)
    setHint(null)
    setMemory(0)
    setFState(true)
  }


  return (
    <main className='bg-slate-500'>
      <section className='h-screen flex justify-center items-center'>
        <div className='w-3/4 md:w-6/12 lg:w-1/4 bg-white p-5'>
          <div className='text-right basis-full bg-slate-400 py-2 px-4'>
            <p>{(hint !== null) ? hint : " "}</p>
            <input id="display" className="w-full p-2 text-right" value={value} onChange={(e) => setValue(e.target.value)}/>
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
            <NumberButton handleClick={onAddDecimalToDisplayHandler} id="decimal" text="."/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
