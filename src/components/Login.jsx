import React,{useState} from 'react'
import Style from '../Styles/Login.module.css'
import {NavLink, useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = () => {
    
    if(email.length < 16 || password.length < 8){
      alert('Please make sure your email id containing minimum 16 charactors and password containing minimum of 8 charactors')
      setEmail('')
      setPassword('')
    }
    else{
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate('/fitzzz')
          const user = userCredential.user;
          
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          alert('Invalid User Credentials')
          setEmail('')
          setPassword('')
      });
    }


    
  
  }
  return (
    <>
    <div className={Style.container}>

      <h1 className={Style.LoginPage_Heading}>GET 'FIT' WITH FITZZ!</h1>
      <p className={Style.subHeading}>Let me help you reach your fitness goles whether<br /> that be fat loss, Strength or general fitness</p>


      <div className={Style.subContainer}>
        <div className={Style.animationContainer}>
            <div className={Style.background}>

            </div>
            <div className={Style.animatedItem}>

            </div>

        </div>
        <div className={Style.loginContainer}>

          <form action="">
            <h2 className={Style.login}>Login</h2>
            <br />
            <label htmlFor="email"> Email :</label>
            <input type="email" 
            placeholder='Enter your Email' 
            value={email} 
            onChange = {(e) => setEmail(e.target.value)} 
            minLength='16'/>

            <br />
            <br />

            <label htmlFor="password"> Password :</label>
            <input type="password" 
            placeholder='Enter your Password' 
            value = {password} 
            onChange = {(e) => setPassword(e.target.value)} 
            minLength='8'/>

            <br />

            <p className={Style.loginpara}>Does not  have an account?  <NavLink to='/signUp' className={Style.Navitem}> SignUp</NavLink></p>

            <Button variant="contained" color="secondary" onClick={onLogin} className={Style.btn}>Login</Button>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Login;