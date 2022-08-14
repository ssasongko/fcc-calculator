import React, { createContext } from 'react'

export const AppContext = createContext();

const state = {
    calculated: "0"
}

export const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
  )
}