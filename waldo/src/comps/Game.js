import React, {useState, useEffect} from "react"
// import GameOver from "./GameOver"
import {imageRef} from "../firebase/config.js"
import ImageContainer from "./ImageContainer"
import useFirestore from "../hooks/useFirestore"
// import GameOver from "./GameOver.js"
// import {addToLeaderBoard} from "./functions/addToLeaderBoard"
import ShowFoundChars from "./ShowFoundChars.js"
import UploadForm from "./UploadForm.js"
import Timer from "./Timer"
const Game = ({setShowLeaderBoard, setShowGame}) => {
  const [url, setUrl] = useState(null)
  const [waldoFound, setWaldoFound] = useState(false)
  const [odlawFound, setOdlawFound] = useState(false)
  const [wizardFound, setWizardFound] = useState(false)
  const [showTimer, setShowTimer] = useState(true)
//   const [showImgCont, setShowImgCont] = useState(true)
  const [score, setScore] = useState(null)
  const waldoData = useFirestore("Waldo")
  const odlawData = useFirestore("Odlaw")
  const wizardData = useFirestore("Wizard")
  const [gameOver, setGameOver] = useState(false);
  const start = async(e) => {
    await imageRef.getDownloadURL().then(function(url) {
      setUrl(url)
    })
    // console.log(url)
  }
  useEffect(() => {
    if (waldoFound && odlawFound && wizardFound) {
        setGameOver(true)
        setOdlawFound(false)
        setWaldoFound(false)
        setWizardFound(false)
    }
  }, [waldoFound, odlawFound, wizardFound])
    return (
        <>
            {!url && <button id="startBtn" onClick={start}>Start Game</button>}
            {/* <ImageContainer url={url}/> */}
            {url && <ImageContainer score={score} setScore={setScore} gameOver={gameOver} waldoData={waldoData} odlawData={odlawData} wizardData={wizardData} setWaldoFound={setWaldoFound} setOdlawFound={setOdlawFound} setWizardFound={setWizardFound} url={url}/>}
            {url && showTimer && <Timer setShowTimer={setShowTimer} gameOver={gameOver} setScore={setScore}/>}
            <ShowFoundChars waldoFound={waldoFound} odlawFound={odlawFound} wizardFound={wizardFound} />
            {gameOver && score && <UploadForm setShowGame={setShowGame} setShowLeaderBoard={setShowLeaderBoard} setScore={setScore} score={score}/>}
        </>
    )
}

export default Game