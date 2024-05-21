
import { BrowserRouter, Routes, Route } from "react-router-dom";
//
import { MainLayout } from "./layouts/MainLayout";
//
import Characters from "./pages/Characters";
import Locations from "./pages/Locations"; 
import Home from "./pages/Home";
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
         <Route path="/" element={<Home/>}/>
         <Route path="/characters" element={<Characters/>}/>
         <Route path="/locations" element={<Locations/>}/>
      </Route>
    </Routes>
  </BrowserRouter>  
  )
}

export default App
