// import {imageRef} from "./firebase/config.js"
import React, { useState } from "react"
import Header from "./comps/Header"
import Game from "./comps/Game"
import LeaderBoard from "./comps/LeaderBoard";
// import ImageContainer from "./comps/ImageContainer"
// import useFirestore from "./hooks/useFirestore"
// import GameOver from "./comps/GameOver.js"
// import {addToLeaderBoard} from "./functions/addToLeaderBoard"
// import ShowFoundChars from "./comps/ShowFoundChars.js"
// import UploadForm from "./comps/UploadForm.js"
function App() {
  const [showLeaderBoard, setShowLeaderBoard] = useState(false)
  return (
    <div className="App">
      <Header />
      <Game setShowLeaderBoard={setShowLeaderBoard}/>
      {showLeaderBoard && <LeaderBoard />}
      {/* {gameOver && <UploadForm />} */}
    </div>
  );
}

export default App;
