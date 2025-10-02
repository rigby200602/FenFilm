import React, { createContext } from 'react'

export const film = lists.find(film => film.id === Number(id))

export default AppContext = createContext()

export const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}