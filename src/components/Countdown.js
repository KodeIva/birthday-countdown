import { useState, useEffect } from 'react'

const Countdown = () => {
    const[days, setDays] = useState(0)
    const[hours, setHours] = useState(0)
    const[minutes, setMinutes] = useState(0)
    const[seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            const today = new Date().getTime()
            const timeLeft = birthday - today
            console.log(timeLeft);
        })
    })
  return (
    <div>Countdown</div>
  )
}

export default Countdown