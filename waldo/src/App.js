import {imageRef} from "./firebase/config.js"
import React, {useState} from "react"
import Header from "./comps/Header"
import ImageContainer from "./comps/ImageContainer"
import useFirestore from "./hooks/useFirestore"
function App() {
  const [url, setUrl] = useState(null)
  const [waldoFound, setWaldoFound] = useState(false)
  const [odlawFound, setOdlawFound] = useState(false)
  const [wizardFound, setWizardFound] = useState(false)
  const waldoData = useFirestore("Waldo")
  const odlawData = useFirestore("Odlaw")
  const wizardData = useFirestore("Wizard")
  // const [clicked, setClicked] = useState(null)
  const start = async(e) => {
    await imageRef.getDownloadURL().then(function(url) {
      setUrl(url)
    })
    // console.log(url)
  }
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
      {!url && <button onClick={start}>Start Game</button>}
      {/* <ImageContainer url={url}/> */}
      {url && <ImageContainer waldoData={waldoData} odlawData={odlawData} wizardData={wizardData} setWaldoFound={setWaldoFound} setOdlawFound={setOdlawFound} setWizardFound={setWizardFound} url={url}/>}
      
      {waldoFound && <div className="waldo"></div> }
      {odlawFound && <div className="odlaw"></div> }
      {wizardFound && <div className="wizard"></div> }
      {/* <p>{waldo.charData.X}</p> */}
      {/* <p>{waldo.charData.Y}</p> */}
      {/* <p>{waldo.delta.validXGuesses}</p> */}
    </div>
  );
}

export default App;
