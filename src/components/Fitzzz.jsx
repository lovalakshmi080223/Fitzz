import React,{useState,useEffect} from 'react';
import styles from '../Styles/Fitzzz.module.css'; 

const Fitzzz = () => {


  const [exercises, setExercises] = useState([])
  const key = import.meta.env.VITE_API_KEY;


    const fetchData = async() => {
       try{
        const response = await fetch ('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0',{
          method : 'GET',
          headers : {
            'x-rapidapi-key': key,
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }
        })
        const data = await response.json()
        console.log(data)
        setExercises(data)
       }
       catch(error){
        console.log(error)
       }
      }
      useEffect(() => {
        fetchData()

      }, [])



  return (
    <div className={styles.fitzzBox}>
      
        <div className={styles.vidwrapper}>
          <div className={styles.videoContainer}>
            <video autoPlay loop muted playsInline className={styles.videoBg}>
              <source src="/images/bgvideo2.mp4" type="video/mp4" />
            </video>

            <div className={styles.content}>
              <h1 className={styles.fitzzHeading}>GET 'FIT' WITH FITZZ!</h1>
              <p className={styles.fitzzpara}>Let me help you reach your fitness goles whether<br /> that be fat loss, Strength or general fitness</p>
            </div>
            
          </div>
          
        </div>
        <div className={styles.container}>
        <h2 className={styles.heading}>💪 Explore Exercises</h2>
        
        <div className={styles.cardContainer}>
          {exercises.map((exercise) => (
            <div key={exercise.id} className={styles.card}>
              
              <img src={exercise.gifUrl} alt={exercise.name} className={styles.image} />

              <h3 className={styles.title}>{exercise.name}</h3>
              <p className={styles.text}> Target: {exercise.target}</p>
              <p className={styles.text}> Equipment: {exercise.equipment}</p>
              <p className={styles.text}>💪 Secondary Muscles: {exercise.secondaryMuscles.join(", ") || "None"}</p>
              
             
              <ul className={styles.instructions}>
                {exercise.instructions.slice(0, 3).map((step, index) => (
                  <li key={index}> {step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
        
    </div>
  );
};
export default Fitzzz;
