import {useState, useEffect} from "react"
import {projectFirestore} from "../firebase/config"
import {getValidDelta} from "../functions/getValidDelta"

const useFirestore = (char) => {
    // const [imageUrl, setImageUrl] = useState(null)
    const [charData, setCharData] = useState([]);
    const [delta, setDelta] = useState(null);
    // const [deltaY, setDeltaY] = useState(null)
    useEffect(() => {

        const charRef = projectFirestore.collection("characters");
        charRef.onSnapshot(snap => {
            // let data = []
            snap.forEach(doc => {
                if (doc.id === char) {
                    setCharData(doc.data())
                    let delta = getValidDelta(doc.data())
                    setDelta(delta)
                }
            })
        })
        // projectFirestore.collection("images").add({url})
        
    }, [char])
    return {charData, delta}
}

export default useFirestore