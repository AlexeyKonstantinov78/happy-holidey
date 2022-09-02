import { createContext } from "react";
import { useFeatch } from "../hooks/useFetch";
import { URI_API } from "../const/const";
import { useSelector } from "react-redux";

export const imgContext = createContext({});

export const ImgContextProvider = ({children}) => {  
  const holiday = useSelector(state => state.holidays.holiday);    
  
  const [{urlImg}] = useFeatch(holiday ? `${URI_API}image/${holiday}` : '');
  
  return (
    <imgContext.Provider value={{urlImg}}>
      {children}
    </imgContext.Provider>
  );
};

