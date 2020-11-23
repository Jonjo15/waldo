import React from "react"
import useLeaderBoard from "../hooks/useLeaderBoard"
import PlayerRecord from "./PlayerRecord"

const LeaderBoard = () => {
    const {docs} = useLeaderBoard()
    return (
        <div className="leareboard-container" >
            
            {docs.map((ele,i) => <PlayerRecord key={i} place={i+1} name={ele.name} score={ele.score}/>)}
            <button className="play-again">Play Again!</button>
        </div>
    )
}

export default LeaderBoard