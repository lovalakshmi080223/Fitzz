import React,{useState, useEffect} from 'react'
import Style from "../Styles/Home.module.css"
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'





 const Home = () => {

    const [weight, setWeight] = useState(50)
    const [feet, setFeet] = useState(5)
    const [inch, setInch] = useState(5)
    const [bmi, setBMI] = useState(17.98)
    const [bmiResult, setBMIResult] = useState('Normal')
    const [bmiImage, setBmiImage] = useState('/images/bmi1.png')
    const navigate = useNavigate()


    useEffect(() => {
        
        if (bmiResult === "Under Weight") {
            setBmiImage("/images/bmi2.png");
          } else if (bmiResult === "Over Weight") {
            setBmiImage("/images/bg3.png");
          } else {
            setBmiImage("/images/bmi1.png");
          }
      
    },[bmiResult])



    const goToNext = () => {
        navigate('/signUp')
    }




    const calcBMI = () => {
        let feets = parseInt(feet)
        let inches = parseInt(inch)
        let height = (feets * 12 + inches) * 0.0254
        let Weight = parseInt(weight)
        let result = (Weight / (height * height)).toFixed(2)
        setBMI(result)

        if(result < 18.9){
            setBMIResult("Under Weight")
        }
        else if (result >=18.9 && result <= 24.9){
            setBMIResult('Normal')
        }
        else{
            setBMIResult('Over Weight')
        }
        
    }


  return (
    <>
    <div className={Style.container}>
        <h1 className={Style.homeHeading}>GET 'FIT' WITH FITZZ!</h1>
        <p className={Style.homepara}>Let me help you reach your fitness goles whether<br /> that be fat loss, Strength or general fitness</p>
        <div className={Style.maincontainer}>
            <div className={Style.Bmi}>
                <h1 className={Style.Bmi_heading}>BMI Calculator</h1>
                <div className={Style.Bmi_first}>
                    <h2>height {feet} ft</h2>
                    <input 
                    id={Style.inp} 
                    type="range" 
                    value={feet} 
                    onChange = {(e) => {
                        setFeet(e.target.value)
                        calcBMI()
                    }} 
                    min='2' max='7'/>
                    <h2>height {inch} in</h2>
                    <input 
                    id={Style.inp} 
                    type="range" 
                    value={inch}
                    onChange = {(e) => {
                        setInch(e.target.value)
                        calcBMI()
                    }}
                    min="0" 
                    max="11"/>
                    <h2>weight  {weight} kg</h2>
                    <input 
                    id={Style.inp} 
                    value={weight} 
                    type="range" 
                    min='0' 
                    max='200' 
                    step={0.1}
                    onChange ={(e) => {
                        setWeight(e.target.value)
                        calcBMI()
                    }}
                    />
                    <br />

                    
                    <h2 className={Style.result}>BMI : {bmi}   kg/m^2 </h2>
                    <h2 className={Style.resultText}>Result : {bmiResult}</h2>
                    <img src={bmiImage} alt={bmiResult} className={Style.bmiImage} />
                    
                </div>

            </div>
            <div className={Style.fitzz}>
                <h1 className={Style.fitzz_heading}>Continue to Application</h1>
                <Button variant="contained" onClick = {goToNext}>Continue</Button>
            </div>
        </div>
                    
    </div>
  
    
    </>
  )
}
export default Home;
