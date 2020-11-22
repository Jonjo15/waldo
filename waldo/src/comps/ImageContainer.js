import React, {useState} from "react"
import Timer from "./Timer"
import UploadForm from "./UploadForm"
// import useFirestore from "../hooks/useFirestore"
// import {getValidDelta} from "../functions/getValidDelta"

// import useFirestore from "../hooks/useFirestore"
// import "../waldo/jpg"
// import {projectStorage} from "../firebase/config.js"
const ImageContainer = ({url, gameOver, waldoData, odlawData, wizardData, setWaldoFound, setOdlawFound, setWizardFound}) => {
    const [x, setX] = useState(null)
    const [y, setY] = useState(null)
    const [score, setScore] = useState(null)
    // const [showLeaderBoard] = useState(false)
    // const waldoCoords = useFirestore("Waldo")
    // const [correctWaldo, setCorrectWaldo] = useState(null)
    const [clicked, setClicked] = useState(null)
    // const [selected, setSelected] = useState(null)
    const cleanUp = () => {
            setX(null)
            setY(null)
            setClicked(null)
            // setSelected(null)
    }
    const handleClick = (e) => {
        if (gameOver) {
            return
        }
        // if (e.target.getBoundingClientRect())
        if (clicked) {
            cleanUp()
        }
        else {
            setX(e.pageX -35)
            setY(e.pageY -35)
            setClicked(true)
        }
        
        // console.log(e.pageY, e.pageX)
       
    }
    const handleChange = (e) => {
        // setSelected(e.target.value)
        if (e.target.value === "Waldo") {
            if(waldoData.delta.validXGuesses.includes(x) && waldoData.delta.validYGuesses.includes(y)) {
                
                alert("YOU FOUND WALDO")
                cleanUp()
                setWaldoFound(true)
            }
            else {
                alert("YOU didnt find waldo")
                cleanUp()
            }
        }
        if (e.target.value === "Odlaw") {
            if(odlawData.delta.validXGuesses.includes(x) && odlawData.delta.validYGuesses.includes(y)) {

                alert("YOU FOUND ODLAW")
                cleanUp()
                setOdlawFound(true)
            }
            else {
                alert("YOU didnt find ODLAW")
                cleanUp()
            }
        }
        if (e.target.value === "Wizard") {
            if(wizardData.delta.validXGuesses.includes(x) && wizardData.delta.validYGuesses.includes(y)) {
                alert("YOU FOUND Wizard")
                cleanUp()
                setWizardFound(true)
            }
            else {
                cleanUp()
                alert("YOU didnt find wizard")
            }
        }
        // console.log(correctWaldo)
        // const coords = useFirestore("")
    }
    // useEffect(() => {
        // if (selected === "Waldo") {
        //     if(waldoData.delta.validXGuesses.includes(x) && waldoData.delta.validYGuesses.includes(y)) {
        //         alert("YOU FOUND WALDO")
        //     }
        //     else {
        //         alert("YOU didnt find waldo")
        //     }
        // }
    // }, [selected])
    // useEffect(() => {
    //     if (correctWaldo) {
    //         if (correctWaldo.X.includes(x) && correctWaldo.Y.includes(y)) {
    //         console.log("success")
    //     }
    //     }
        
    // }, [selected, correctWaldo.X, correctWaldo.Y, x, y])
    // useEffect(() => {
    //     setCorrectWaldo(getValidDelta(waldoCoords))
    // }, [waldoCoords])
    return (
        <div className="image-container" >
            <Timer gameOver={gameOver} setScore={setScore}/>
            {url && <img onClick={handleClick} src={url}alt="find waldo"/>}
            {x && y &&
             <div style={{top: y, left: x}} className="search-box">
                 <select className="select-char" defaultValue="select" onChange={handleChange}>
                     <option disabled="disabled" value="select">Select character</option>
                     <option value="Waldo">Waldo</option>
                     <option value="Odlaw">Odlaw</option>
                     {/* <option value="Wenda">Wenda</option> */}
                     <option value="Wizard">Wizard</option>
                 </select>
            </div>}
            {score && <UploadForm score={score} setScore={setScore}/>}
            {/* <p>{selected}</p> */}
            
        </div>
    )
}

export default ImageContainer