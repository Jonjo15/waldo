import {imageRef} from "./firebase/config.js"
import React, {useState} from "react"
import Header from "./comps/Header"
import ImageContainer from "./comps/ImageContainer"
function App() {
  const [url, setUrl] = useState(null)
  const test = async(e) => {
    await imageRef.getDownloadURL().then(function(url) {
      setUrl(url)
    })
    // console.log(url)
  }
  return (
    <div className="App">
      <Header />
      {!url && <button onClick={test}>Start Game</button>}
      {/* <ImageContainer url={url}/> */}
      {url && <ImageContainer url={url}/>}
      <div className="search-box"></div>
      
    </div>
  );
}

export default App;
