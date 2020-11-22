import React, { useState } from "react"

const UploadForm = () => {
    const [name, setName] = useState("")
    const handleChange = (e) => {
        let name = e.target.value
        setName(name)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
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