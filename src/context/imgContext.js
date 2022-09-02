import { createContext, useContext } from "react";
import { holidaysContext } from './holidaysContext';
import { useFeatch } from "../hooks/useFetch";
import { URI_API } from "../const/const";

export const imgContext = createContext({});

export const ImgContextProvider = ({children}) => {
  const {holiday} = useContext(holidaysContext);  
  
  const [{urlImg}] = useFeatch(holiday ? `${URI_API}image/${holiday}` : '');
  
  return (
    <imgContext.Provider value={{urlImg}}>
      {children}
    </imgContext.Provider>
  );
};

