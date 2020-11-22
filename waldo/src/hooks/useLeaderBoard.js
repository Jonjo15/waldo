import {useState, useEffect} from "react"
import {leaderBoardRef} from "../firebase/config"

const useLeaderBoard = () => {
    // const players
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unsub = leaderBoardRef.orderBy("score", "desc")
        .onSnapshot(snap => {
            let document = []
            snap.forEach((doc) => {
                document.push({...doc.data()})
            })
            setDocs(document)
        })
        return () => unsub()
    })
    return {docs}
}

export default useLeaderBoard