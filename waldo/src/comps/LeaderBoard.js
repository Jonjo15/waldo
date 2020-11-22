import React from "react"
import useLeaderBoard from "../hooks/useLeaderBoard"

const LeaderBoard = () => {
    const {docs} = useLeaderBoard()
    return (
        <div className="leareboard-container" >
            {docs.map(ele => <p>{ele.name}</p>)}
        </div>
    )
}

export default LeaderBoard