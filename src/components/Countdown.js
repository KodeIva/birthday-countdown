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
      <div className='w-28 flex flex-col justify-center items-center border-r-2 border-purple-300 text-2xl text-white  mr-2 pr-2'>
        <h2>Days</h2>
        {days < 10 ? <p>0{days}</p> : <p>{days}</p> }
      </div>
      
      <div className='w-28 flex flex-col justify-center items-center border-r-2 border-purple-300 text-2xl text-white  mr-2 pr-2'>
        <h2>Hours</h2>
        {hours < 10 ? <h1>0{hours}</h1> : <h1>{hours}</h1> }
      </div>
      
      <div className='w-28 flex flex-col justify-center items-center border-r-2 border-purple-300 text-2xl text-white  mr-2 pr-2'>
        <h2>Minutes</h2>
        {minutes < 10 ? <h1>0{minutes}</h1>:<h1>{minutes}</h1>}
      </div>
      
      <div className='w-28 flex flex-col justify-center items-center border-r-2 border-purple-300 text-2xl text-white  mr-2 pr-2'>
        <h2> Seconds</h2>
        {seconds < 10 ? <p>0{seconds}</p> : <p>{seconds}</p>}
      </div>
      
      
    </div>
  )
}

export default Countdown