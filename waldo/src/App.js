// import {projectStorage, projectFirestore} from "./firebase/config.js"
import React from "react"
import Header from "./comps/Header"
import ImageContainer from "./comps/ImageContainer"
function App() {
  // const test = (e) => {
  //   console.log(projectStorage, projectFirestore)
  // }
  return (
    <div className="App">
      <Header />
      <ImageContainer />
      {/* <button onClick={test}>Test</button> */}
    </div>
  );
}

export default App;
