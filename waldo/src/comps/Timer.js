import React, { useEffect, useState } from "react"

const Timer = () => {
    const [seconds, setSeconds] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [hours, setHours] = useState("0");

    useEffect(() => {
        const time = setInterval(() => {
            setSeconds("" + (+seconds + 1));
        }, 1000)

        return () => clearInterval(time)
    }, [seconds, minutes, hours])
    return (
        <div className="timer">
            <p>{hours}:{minutes}:{seconds}</p>
        </div>
    )
}

export default Timer