import React, {useState} from "react"
// import useFirestore from "../hooks/useFirestore"
// import {getValidDelta} from "../functions/getValidDelta"

// import useFirestore from "../hooks/useFirestore"
// import "../waldo/jpg"
// import {projectStorage} from "../firebase/config.js"
const ImageContainer = ({url, waldoData, odlawData, wizardData, setWaldoFound, setOdlawFound, setWizardFound}) => {
    const [x, setX] = useState(null)
    const [y, setY] = useState(null)
    // const waldoCoords = useFirestore("Waldo")
    // const [correctWaldo, setCorrectWaldo] = useState(null)
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
        if (e.target.value === "Waldo") {
            if(waldoData.delta.validXGuesses.includes(x) && waldoData.delta.validYGuesses.includes(y)) {
                
                alert("YOU FOUND WALDO")
                setX(null)
                setY(null)
                setClicked(null)
                setSelected(null)
                setWaldoFound(true)
            }
            else {
                alert("YOU didnt find waldo")
            }
        }
        if (e.target.value === "Odlaw") {
            if(odlawData.delta.validXGuesses.includes(x) && odlawData.delta.validYGuesses.includes(y)) {

                alert("YOU FOUND ODLAW")
                setX(null)
                setY(null)
                setClicked(null)
                setSelected(null)
                setOdlawFound(true)
            }
            else {
                alert("YOU didnt find ODLAW")
            }
        }
        if (e.target.value === "Wizard") {
            if(wizardData.delta.validXGuesses.includes(x) && wizardData.delta.validYGuesses.includes(y)) {
                alert("YOU FOUND Wizard")
                setX(null)
                setY(null)
                setClicked(null)
                setSelected(null)
                setWizardFound(true)
            }
            else {
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
            {url && <img onClick={handleClick} src={url}alt="find waldo"/>}
            {x && y &&
             <div style={{top: y, left: x}} className="search-box">
                 <select className="select-char" onChange={handleChange}>
                     <option disabled="disabled" selected="selected">Select character</option>
                     <option value="Waldo">Waldo</option>
                     <option value="Odlaw">Odlaw</option>
                     {/* <option value="Wenda">Wenda</option> */}
                     <option value="Wizard">Wizard</option>
                 </select>
            </div>}
            <p>{selected}</p>
        </div>
    )
}

export default ImageContainer