// import {imageRef} from "./firebase/config.js"
import React from "react"
import Header from "./comps/Header"
import ImageContainer from "./comps/ImageContainer"
function App() {
  // const [url, setUrl] = useState(null)
  // const test = async(e) => {
  //   await imageRef.getDownloadURL().then(function(url) {
  //     setUrl(url)
  //   })
  //   // console.log(url)
  // }
  return (
    <div className="App">
      <Header />
      <ImageContainer />
      {/* {url && <img src={url} id="input" alt="test"/>} */}
      {/* <button onClick={test}>Test</button> */}
    </div>
  );
}

export default App;
