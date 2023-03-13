import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Blog from '../Components/Blog/Blog';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import { useSelector } from 'react-redux';
const ComponentRoute = () => {

  var loggedInUser=useSelector((state)=>(state.loginReducer.LoggedinUser.username));
    
  if(!loggedInUser){
    loggedInUser=window.localStorage.getItem('Login');
  }
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/SignUp' element={<Signup/>}/>
        {loggedInUser?<Route path='/blog' element={<Blog/>}/>:''}
        <Route path='*' element={<Login/>} />
    </Routes>
  )
}

export default ComponentRoute