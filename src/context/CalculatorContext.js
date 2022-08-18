import React, { createContext, useReducer } from 'react'

import reducer from '../components/store/CalculatorReducer';

export const CalculatorContext = createContext();

const initState = {
  calculated: "0",
  currentNum: "0",
  operator: ""
}

export const CalculatorProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const captureClick = (key) => {
    
    if(key === '.') return dispatch({ type: 'INSERT_PERIOD'})
    if(key === 'C') return dispatch({ type: 'PERFORM_CLEAR'})
    if(key === '=') return dispatch({ type: 'PERFORM_EVALUATE', payload:key})

    if(key === 'delete'){
      return dispatch({ type: 'PERFORM_BACKSPACE'})
    }

    let regexOperator = new RegExp('[-+x÷]')
    if(regexOperator.test(key)){
      return dispatch({ type: 'INSERT_OPERATOR', payload: key})
    }
      
    let numRegex = new RegExp('[0-9]')
    if(numRegex.test(key)){
      return dispatch({ type: 'INSERT_NUMBER', payload: key})
    }
  }

  return (
    <CalculatorContext.Provider value={{...state, captureClick}}>
      {children}
    </CalculatorContext.Provider>
  )
}