import React from 'react'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { createBrowserHistory } from 'history'
import './index.css'

function Login() {
    const [username, changeUsername] = useState("")
    const [password, changePassword] = useState("")

    const onSuccessfulLogin = () => {
        const history = createBrowserHistory(); 

        // Cookies.set('jwt_token', jwtToken, {
        //     expires: 30,
        //     path: '/',
        //   });
          history.replace('/')
          history.go(0)
      }
    const attemptLogin = async event => {
        event.preventDefault()
        if (username === 'test' && password === 'test'){
          onSuccessfulLogin()
        }
        // const userDetails = {username, password}
        // const loginUrl = 'http://127.0.0.1:8000/login'
        // const loginOptions = {
        //   method: 'POST',
        //   headers: {"Content-Type": "application/json"},
        //   body: JSON.stringify(userDetails),
        // }
        // const response = await fetch(loginUrl, loginOptions)
        // const responseData = await response.json()
        // if (response.ok) {
        //   console.log(responseData.access_token)
 
        //   onSuccessfulLogin(responseData.access_token)
 
        // } else {
        // }
      }
    
  return (
    <div className="login-page">
  <div className="form">
    <form className="login-form">
        <h1 className='login-header'>Login</h1>
      <input type="text" placeholder="username"
                        onChange={(e) => changeUsername(e.target.value)}/>
      <input type="password" placeholder="password"
                        onChange={(e) => changePassword(e.target.value)}/>
      <button onClick={attemptLogin}>login</button>
   
    </form>
  </div>
</div>
  )
}

export default Login
