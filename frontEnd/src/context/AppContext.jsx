import React, { createContext } from 'react'

export default AppContext = createContext()

export const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}