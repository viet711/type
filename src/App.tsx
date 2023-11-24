import { BrowserRouter, Routes, Route, Router  } from "react-router-dom";
import './App.css'
import AdminProject from "./components/admin/adminProject";
import AdminLayout from "./components/admin/adminLayout";
import Edit from "./components/admin/edit";
import Add from "./components/admin/add";

import User from "./components/admin/user";

function App() {
 

  return <BrowserRouter>
      <Routes>
      <Route path='/' element={<AdminLayout/>}>
        <Route index element={<AdminProject></AdminProject>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/add' element={<Add/>}/>
       
      </Route>
      <Route >
      </Route>
      </Routes>
   </BrowserRouter>
     
  
}

export default App
