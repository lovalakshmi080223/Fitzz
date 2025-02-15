import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Fitzzz from './components/Fitzzz'
import ProtectedRoute from './ProtectedRoute';





function App () {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/signUp' element = {<SignUp/>}/>
        <Route path='/login' element ={<Login />} />
        <Route path='/fitzzz' element ={<ProtectedRoute>
          <Fitzzz />
        </ProtectedRoute>} />
        



      </Routes>
    
    
    </BrowserRouter>
    
    </>
  );
}
export default App; 