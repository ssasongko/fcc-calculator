import React from 'react'
import Calculator from './Calculator'
import { CalculatorProvider } from './context/CalculatorContext';

const App = () => {
  return (
    <>
      <CalculatorProvider>
        <Calculator/>
      </CalculatorProvider>
    </>
  )
}

export default App