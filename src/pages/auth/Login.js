import React, { useRef, useState } from "react"
import  './Login.css'
import { Link, Router, useHistory } from "react-router-dom"
import { Alert } from "react-bootstrap"
import { useAuth } from "../../components/Contexts/AuthContext"
import axios from 'axios';

export default function Login(){
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError  ] = useState("")
  const [loading, setLoading] = useState(false)
  const  {login}  = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    
    e.preventDefault()

    try {
      console.log(login);
      setError("")
       setLoading(true)
       await login(emailRef.current.value, passwordRef.current.value)
  
      history.push("/") 

    } catch (err){
      console.log(err);
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return(
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="form-inner">
      <h2>Login</h2>
    
     {error && <Alert variant="danger">{error}</Alert>}
    <div className="form-group">
    <label htmlFor="email">Enter Email</label>
      <input
      id="email"
      type="email" ref={emailRef} 
        name="email"
        placeholder="Email"
        required
      />
    </div>
    <div className="form-group">
    <label htmlFor="password">Enter Password</label>
    <input
    id="password"
    type="password"
    ref={passwordRef}
    name="password"
    placeholder="Password"
    required
    />
    </div>
      <input type="submit" value="Login" disabled={loading} />
      </div>
    </form>
    Need an account? <Link to="/signup">Sign Up</Link>
  </div>
  </>
  )
}