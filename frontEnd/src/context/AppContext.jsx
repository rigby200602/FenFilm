import React, { createContext } from 'react'
import lists from '../data/lists.json'

// function to get film data by id
export const filmData = (id) => {
  return (lists.find(film => film.id === Number(id)))
}

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}