import React, { useState } from "react"
// import { useEffect } from "react/cjs/react.production.min"
import {addToLeaderBoard} from "../functions/addToLeaderBoard"
const UploadForm = ({score, setScore, setShowLeaderBoard}) => {
    const [name, setName] = useState("")
    const handleChange = (e) => {
        let name = e.target.value
        setName(name)
    }
    // // useEffect(() => {
    //     setShowTimer(false);
    // }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        addToLeaderBoard(name || "anon", score)
        setScore(null)
        // setShowTimer(false)
        setShowLeaderBoard(true)
        console.log("submitted")
    }
    return (
        <div className="game-over">
            <h2>You found all the characters in {score} seconds!</h2>
            <h3>Submit your name below to sign into the leaderboard.</h3>
            <form onSubmit={handleSubmit}>
            <label>
               Name:
               <input onChange={handleChange} value={name} type="text" />     
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
        
    )
}

export default UploadForm