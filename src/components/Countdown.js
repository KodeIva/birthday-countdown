import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import ConfettiExplosion from 'react-confetti-explosion'

const Countdown = ({birthday}) => {
    const[days, setDays] = useState(0)
    const[hours, setHours] = useState(0)
    const[minutes, setMinutes] = useState(0)
    const[seconds, setSeconds] = useState(0)
    const[isBirthday,setIsBirthday] = useState(false)
    const [screen, setScreen] = useState({width: window.innerWidth, height: window.innerHeight})
    const[isExploding, setIsExploding] = useState(false)

    useEffect(() => {
       
      const timer = setInterval(() => {
        const today = new Date().getTime()
        const timeLeft = birthday - today
        console.log(timeLeft);
  
        let day = 24*60*60*1000
        let hour = 60*60*1000
        let minute = 60*1000
        let second = 1000
       if(timeLeft > 0) {
        let days = Math.floor(timeLeft / day)
        let hours = Math.floor((timeLeft % day) / hour)
        let minutes = Math.floor((timeLeft % hour) / minute)
        let seconds = Math.floor((timeLeft % minute) / second) 
  
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
       } else{
          setIsBirthday(true)
       }
      },1000)
      return () => clearInterval(timer)
    
    },[birthday])
  return (
    <div className='flex shadow-2xl w-[90%] sm:w-[70%] md:w-[50%] xl:w-[35%] h-64 justify-center items-center bg-pink-200'>
    {isBirthday ? 
      (<div className='flex flex-col items-center p-4'>
      <Confetti width={screen.width} height={screen.height} numberOfPieces={250}
                colors={['white','orangered','lightblue','lightgreen','violet','yellow']} />
      <h1 id='happy' className='flex flex-wrap text-4xl m-3'>
          <span className='text-blue-500 text-7xl m-3'>Happy</span>
          <span className='text-yellow-400 text-7xl m-3'> Birthday</span>
          <span className='text-red-500 text-7xl m-3'> Bianca</span> 
          <span className='text-purple-500 text-7xl m-3'>!</span> 
          <span className='text-green-500 text-7xl m-3'>!</span>
          <span className='text-7xl m-3'>!</span>
      </h1>
      <br />
      <button
        className='bg-pink-500 rounded-xl text-white tracking-widest w-[auto] p-3'
      >Surprise</button>
      </div>):(<div className='flex w-[100%] h-64 m-9 justify-center items-center bg-pink-200'>
        <div className='w-28 m-2 shadow-2xl rounded-xl bg-pink-200 flex flex-col justify-center items-center text-2xl text-white  mr-2 pr-2'>
        <h2>Days</h2>
        {days < 10 ? <p>0{days}</p> : <p>{days}</p> }
      </div>
      
      <div className='w-28 m-2 shadow-2xl rounded-xl bg-pink-200 flex flex-col justify-center items-center text-2xl text-white  mr-2 pr-2'>
        <h2>Hours</h2>
        {hours < 10 ? <h1>0{hours}</h1> : <h1>{hours}</h1> }
      </div>
      
      <div className='w-28 m-2 shadow-2xl rounded-xl bg-pink-200 flex flex-col justify-center items-center text-2xl text-white  mr-2 pr-2'>
        <h2>Minutes</h2>
        {minutes < 10 ? <h1>0{minutes}</h1>:<h1>{minutes}</h1>}
      </div>
      
      <div className='w-28 m-2 shadow-2xl rounded-xl bg-pink-200 flex flex-col justify-center items-center text-2xl text-white  mr-2 pr-2'>
        <h2> Seconds</h2>
        {seconds < 10 ? <p>0{seconds}</p> : <p>{seconds}</p>}
      </div>
      
      </div>
    )
    }
    </div>
  )
}

export default Countdown