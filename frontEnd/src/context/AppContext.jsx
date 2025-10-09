import React, { createContext, use, useContext } from 'react'
import lists from '../data/lists.json'
import { useNavigate } from 'react-router-dom';

// custom hook for call context
export const useApp = () => useContext(AppContext);
// create context
export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  
  // get Id
  const id = useParams();
  //navigation 
  const navigate = useNavigate();
  // get film data by id
  const filmData = (id) => {
  return (lists.find(film => film.id === Number(id)))
}

  const value = { AppContext,navigate, filmData };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}