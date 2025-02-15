import React,{useState} from 'react'
import Style from '../Styles/SignUp.module.css'
import {NavLink, useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

const SignUp = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignup = () => {
    
    if(email.length < 16 || password.length < 8){
      alert('Please make sure your email id containing minimum 16 charactors and password containing minimum of 8 charactors')
      setEmail('')
      setPassword('')
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
      alert('User has been created')
      navigate('/login')
      })
      .catch((error) => {
        alert('Invalid input or Account already exist')
        setEmail('')
        setPassword('')
      })
    }


    
  
  }
  return (
    <>
    <div className={Style.container}>

      <h1 className={Style.heading}>GET 'FIT' WITH FITZZ!</h1>
      <p className={Style.subHeading}>Let me help you reach your fitness goles whether<br /> that be fat loss, Strength or general fitness</p>


      <div className={Style.subContainer}>
        <div className={Style.animationContainer}>
            <div className={Style.background}>

            </div>
            <div className={Style.animatedItem}>

            </div>

        </div>
        <div className={Style.signupContainer}>

          <form action="">
            <h2 className={Style.signup}>SignUp</h2>
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

            <p className={Style.signpara}>Already  have an account?  <NavLink to='/login' className={Style.Navitem}> Login</NavLink></p>

            
            
            <Button variant="contained" color="secondary" onClick={onSignup} className={Style.btn}>SignUp</Button>
          </form>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default SignUp