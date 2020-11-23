import React from "react"

const PlayerRecord = ({name, score, place}) => {
    return (
        <div className="player-record">
            <p><span className="place">{place}.</span> {name} {score} seconds</p>
            {/* <p>Time: {score} seconds</p> */}
        </div>
    )
}
export default PlayerRecord