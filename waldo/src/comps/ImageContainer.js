import React, {useState, useEffect} from "react"
import useFirestore from "../hooks/useFirestore"
// import useFirestore from "../hooks/useFirestore"
// import "../waldo/jpg"
// import {projectStorage} from "../firebase/config.js"
const ImageContainer = ({url}) => {
    const [x, setX] = useState(null)
    const [y, setY] = useState(null)
    // const waldoCords = useFirestore("Waldo");
    const [clicked, setClicked] = useState(null)
    const [selected, setSelected] = useState(null)
    const handleClick = (e) => {
        // if (e.target.getBoundingClientRect())
        if (clicked) {
            setX(null)
            setY(null)
            setClicked(null)
        }
        else {
            setX(e.pageX -35)
            setY(e.pageY -35)
            setClicked(true)
        }
        
        // console.log(e.pageY, e.pageX)
       
    }
    const handleChange = (e) => {
        setSelected(e.target.value)
    }
    // useEffect(() => {
    //     console.log(waldoCords.charData)
    // })
    
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
            <p>{selected}</p>
        </div>
    )
}

export default ImageContainer