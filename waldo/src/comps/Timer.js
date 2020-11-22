import React, { useEffect, useState } from "react"

const Timer = ({gameOver, setScore}) => {
    const [seconds, setSeconds] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [hours, setHours] = useState("0");
    const [timer, setTimer] = useState(null)
    // const [score, setScore] = useState(0)
    useEffect(() => {
        if(gameOver) {
            clearInterval(timer)
            let result = +seconds + +minutes * 60 + +hours * 3600;
            alert(result)
            setScore(result)
        }
    }, [gameOver, timer, hours, minutes, seconds, setScore])
    useEffect(() => {
        let time = setInterval(() => {
            if (+seconds < 9) {
                setSeconds("0" + (+seconds + 1));
            }
            else if (+seconds === 59) {
                setSeconds("00");
                if (+minutes < 9) {
                    setMinutes("0" + (+minutes + 1))
                }
                else if (+minutes === 59) {
                    setMinutes("00")
                    setHours(hours + 1)
                }
                else {
                    setMinutes(""+ (+minutes + 1))
                }
                
            }
            else {
                setSeconds((+seconds + 1).toString())
            }
            
        }, 1000)
        setTimer(time);
        return () => clearInterval(time)
    }, [seconds, minutes, hours])
    return (
        <div className="timer">
            <p>{hours}:{minutes}:{seconds}</p>
        </div>
    )
}

export default Timer