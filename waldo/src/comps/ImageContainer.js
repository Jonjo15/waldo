import React, {useState} from "react"
// import Timer from "./Timer"
// import UploadForm from "./UploadForm"
// import useFirestore from "../hooks/useFirestore"
// import {getValidDelta} from "../functions/getValidDelta"

// import useFirestore from "../hooks/useFirestore"
// import "../waldo/jpg"
// import {projectStorage} from "../firebase/config.js"
const ImageContainer = ({url, gameOver, waldoData, odlawData, wizardData, setWaldoFound, setOdlawFound, setWizardFound}) => {
    const [x, setX] = useState(null)
    const [y, setY] = useState(null)
    // const [score, setScore] = useState(null)
    const [output, setOutput] = useState("")
    // const [showLeaderBoard] = useState(false)
    // const waldoCoords = useFirestore("Waldo")
    // const [correctWaldo, setCorrectWaldo] = useState(null)
    const [clicked, setClicked] = useState(null)
    // const [selected, setSelected] = useState(null)
    const resetOutPut = () => {
        setTimeout(() => {
            setOutput("")
        }, 1000)
    }
    const cleanUp = () => {
            setX(null)
            setY(null)
            setClicked(null)
            resetOutPut()
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
                setWaldoFound(true)
                setOutput("You found Waldo!")
                cleanUp()
                
            }
            else {
                setOutput("That's not Waldo!")
                cleanUp()
            }
        }
        if (e.target.value === "Odlaw") {
            if(odlawData.delta.validXGuesses.includes(x) && odlawData.delta.validYGuesses.includes(y)) {

                setOutput("You found Odlaw!")
                cleanUp()
                setOdlawFound(true)
            }
            else {
                setOutput("That's not Odlaw!")
                cleanUp()
            }
        }
        if (e.target.value === "Wizard") {
            if(wizardData.delta.validXGuesses.includes(x) && wizardData.delta.validYGuesses.includes(y)) {
                setOutput("You found Wizard!")
                cleanUp()
                setWizardFound(true)
            }
            else {
                setOutput("That's not Wizard!")
                cleanUp()
                
            }
        }
        // console.log(correctWaldo)
        // const coords = useFirestore("")
    }
    
    return (
        <div className="image-container" >
            {/* {showTimer &&<Timer gameOver={gameOver} setScore={setScore}/>} */}
            {!gameOver && url && <img onClick={handleClick} src={url}alt="find waldo"/>}
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
            {!gameOver && output && <div className="output">{output}</div>}
            {/* {score && <UploadForm score={score} setScore={setScore}/>} */}
            {/* <p>{selected}</p> */}
            
        </div>
    )
}

export default ImageContainer