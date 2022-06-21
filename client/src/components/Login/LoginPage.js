import React from 'react'
import { useState } from 'react'
import {Router, Routes,Route, Navigate} from 'react-router-dom'
import {GoogleLogin} from 'react-google-login'
import "./LoginPage.css"
import Home from '../Home/home'
import { useNavigate } from 'react-router-dom'



const LoginPage = () => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    // navigate('/home')
    console.log('Failure')
  };

  const handleLogin = (googleData) => {
  //   const res =  fetch('/api/google-login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       token: googleData.tokenId,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   const data = await res.json();
  //   setLoginData(data);
  //   localStorage.setItem('loginData', JSON.stringify(data));
    
  };
  
  return (
    <div className="login">
      <div className='logintext'>Log in </div>
      {
        // loginData ? (
        //   <Navigate replace to='/home' element={<Home/>}/>
        // ) : (
              <GoogleLogin 
            className='Button'
            clientId = {process.env.REACT_APP_GOOGLE_CLIENT_ID}
            bbuttonText="Log in with Google"
            onSuccess={() => {
              handleLogin()
            }}
            onFailure={()=>{
              handleFailure()
            } }
            cookiePolicy={'single_host_origin'}
            isSignedIn = {true}
          /> 
        // )
      }
      
    </div>
  )
}

export default LoginPage
