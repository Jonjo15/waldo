import React from "react"

const PlayerRecord = ({name, score}) => {
    return (
        <div className="player-record">
            <p>{name} : {score}</p>
        </div>
    )
}
export default PlayerRecord