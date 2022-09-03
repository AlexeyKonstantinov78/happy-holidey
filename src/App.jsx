import { Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import EmpyCard from "./components/EmtyCard/EmtyCard";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<EmpyCard />}/> 
        <Route path='card/:holiday' element={<Card />}/>          
      </Route>     
    </Routes>            
  );
}

export default App;
