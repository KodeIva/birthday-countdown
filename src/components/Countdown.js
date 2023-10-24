import { useState, useEffect } from 'react'

const Countdown = ({birthday}) => {
    const[days, setDays] = useState(0)
    const[hours, setHours] = useState(0)
    const[minutes, setMinutes] = useState(0)
    const[seconds, setSeconds] = useState(0)
    const[isBirthday,setIsBirthday] = useState(false)

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
    <div className='flex w-full h-64 justify-center items-center bg-pink-200'>
      <h2>Days</h2>
      <h1>{days}</h1>
      <span>: </span>
      <h2>Hours</h2>
      <h1>{hours}</h1>
      <span>:</span>
      <h2>Minutes</h2>
      <h1>{minutes}</h1>
      <span>:</span>
      <h2>Seconds</h2>
      <h1>{seconds}</h1>
    </div>
  )
}

export default Countdown