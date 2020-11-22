import {imageRef} from "./firebase/config.js"
import React, {useState, useEffect} from "react"
import Header from "./comps/Header"
import ImageContainer from "./comps/ImageContainer"
import useFirestore from "./hooks/useFirestore"
import GameOver from "./comps/GameOver.js"
import {addToLeaderBoard} from "./functions/addToLeaderBoard"
function App() {
  const [url, setUrl] = useState(null)
  const [waldoFound, setWaldoFound] = useState(false)
  const [odlawFound, setOdlawFound] = useState(false)
  const [wizardFound, setWizardFound] = useState(false)
  const waldoData = useFirestore("Waldo")
  const odlawData = useFirestore("Odlaw")
  const wizardData = useFirestore("Wizard")
  const [gameOver, setGameOver] = useState(false);
  // const [clicked, setClicked] = useState(null)
  const start = async(e) => {
    await imageRef.getDownloadURL().then(function(url) {
      setUrl(url)
    })
    // console.log(url)
  }
  useEffect(() => {
    if (waldoFound && odlawFound && wizardFound) {
      setGameOver(true)
      // setOdlawFound(false)
      // setWaldoFound(false)
      // setWizardFound(false)
    }
  }, [waldoFound, odlawFound, wizardFound])
  // const handleClick = (e) => {
  //   if (clicked) {
  //     setClicked(null)
  //   }
  //   else {
  //     setClicked(true)
  //   }
  // }
  return (
    <div className="App">
      <Header />
      {!url && <button id="startBtn" onClick={start}>Start Game</button>}
      {/* <ImageContainer url={url}/> */}
      {url && <ImageContainer gameOver={gameOver} waldoData={waldoData} odlawData={odlawData} wizardData={wizardData} setWaldoFound={setWaldoFound} setOdlawFound={setOdlawFound} setWizardFound={setWizardFound} url={url}/>}
      
      {waldoFound && <div className="waldo"></div> }
      {odlawFound && <div className="odlaw"></div> }
      {wizardFound && <div className="wizard"></div> }
      {gameOver && <GameOver />}
      {/* <p>{waldo.charData.X}</p> */}
      {/* <p>{waldo.charData.Y}</p> */}
      {/* <p>{waldo.delta.validXGuesses}</p> */}
      <button onClick={addToLeaderBoard("hello", 33)}>Test firebase</button>
    </div>
  );
}

export default App;
