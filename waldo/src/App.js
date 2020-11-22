import {imageRef} from "./firebase/config.js"
import React, {useState, useEffect} from "react"
import Header from "./comps/Header"
import ImageContainer from "./comps/ImageContainer"
import useFirestore from "./hooks/useFirestore"
import GameOver from "./comps/GameOver.js"
// import {addToLeaderBoard} from "./functions/addToLeaderBoard"
import ShowFoundChars from "./comps/ShowFoundChars.js"
// import UploadForm from "./comps/UploadForm.js"
function App() {
  const [url, setUrl] = useState(null)
  const [waldoFound, setWaldoFound] = useState(false)
  const [odlawFound, setOdlawFound] = useState(false)
  const [wizardFound, setWizardFound] = useState(false)
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
      setTimeout(() => {
          setOdlawFound(false)
          setWaldoFound(false)
          setWizardFound(false)
      }, 1500)
     
    }
  }, [waldoFound, odlawFound, wizardFound])
  
  return (
    <div className="App">
      <Header />
      {!url && <button id="startBtn" onClick={start}>Start Game</button>}
      {/* <ImageContainer url={url}/> */}
      {url && <ImageContainer gameOver={gameOver} waldoData={waldoData} odlawData={odlawData} wizardData={wizardData} setWaldoFound={setWaldoFound} setOdlawFound={setOdlawFound} setWizardFound={setWizardFound} url={url}/>}
      <ShowFoundChars waldoFound={waldoFound} odlawFound={odlawFound} wizardFound={wizardFound} />
      {gameOver && <GameOver />}
      {/* {gameOver && <UploadForm />} */}
    </div>
  );
}

export default App;
