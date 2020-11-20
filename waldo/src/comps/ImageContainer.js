import React, {useState} from "react"
// import useFirestore from "../hooks/useFirestore"
// import "../waldo/jpg"
// import {projectStorage} from "../firebase/config.js"
const ImageContainer = ({url}) => {
    const [x, setX] = useState(null)
    const [y, setY] = useState(null)
    const [selected, setSelected] = useState(null)
    const handleClick = (e) => {
        // if (e.target.getBoundingClientRect())
        setX(e.pageX -35)
        setY(e.pageY -35)
        // console.log(e.pageY, e.pageX)
       
    }
    const handleChange = (e) => {
        setSelected(e.target.value)
    }
    
    return (
        <div className="image-container" >
            {url && <img onClick={handleClick} src={url}alt="find waldo"/>}
            {x && y &&
             <div style={{top: y, left: x}} className="search-box">
                 <select className="select-char" onChange={handleChange}>
                     <option disabled="disabled">Select character</option>
                     <option value="Waldo">Waldo</option>
                     <option value="Odlaw">Odlaw</option>
                     <option value="Wenda">Wenda</option>
                     <option value="Wizard">Wizard</option>
                 </select>
            </div>}
        </div>
    )
}

export default ImageContainer