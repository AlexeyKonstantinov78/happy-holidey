import { createContext, useContext } from "react";
import { holidaysContext } from "./holidaysContext";
import { useFeatch } from "../hooks/useFetch";
import { URI_API } from "../const/const";

export const textContext = createContext({});

export const TextContextProvider = ({children}) => {
  const {holiday} = useContext(holidaysContext);
  

  const [{text}] = useFeatch(holiday ? `${URI_API}text/${holiday}` : '');
  
  return (
    <textContext.Provider value={{text}}>
      {children}
    </textContext.Provider>
  );
};

