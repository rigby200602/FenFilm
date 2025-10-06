import React, { createContext, use } from 'react'
import lists from '../data/lists.json'
import { useNavigate } from 'react-router-dom';

// function to get film data by id
export const filmData = (id) => {
  return (lists.find(film => film.id === Number(id)))
}

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  
  const navigate = useNavigate();

  const value = { navigate, filmData };

  return (
    <AppContext.Provider value={{value}}>
      {children}
    </AppContext.Provider>
  )
}