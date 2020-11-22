import React, { useState } from "react"
import {addToLeaderBoard} from "../functions/addToLeaderBoard"
const UploadForm = ({score, setScore}) => {
    const [name, setName] = useState("")
    const handleChange = (e) => {
        let name = e.target.value
        setName(name)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addToLeaderBoard(name, score)
        setScore(null)
        console.log("submitted")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
               Name:
               <input onChange={handleChange} value={name} type="text" />     
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default UploadForm