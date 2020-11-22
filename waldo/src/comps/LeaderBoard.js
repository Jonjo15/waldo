import React from "react"
import useLeaderBoard from "../hooks/useLeaderBoard"
import PlayerRecord from "./PlayerRecord"

const LeaderBoard = () => {
    const {docs} = useLeaderBoard()
    return (
        <div className="leareboard-container" >
            
            {docs.map((ele,i) => <PlayerRecord key={i} name={ele.name} score={ele.score}/>)}
        </div>
    )
}

export default LeaderBoard