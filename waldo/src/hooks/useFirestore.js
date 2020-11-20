import {useState, useEffect} from "react"
import {projectFirestore} from "../firebase/config"
// import {getValidDelta} from "../functions/getValidDelta"

const useFirestore = (char) => {
    // const [imageUrl, setImageUrl] = useState(null)
    const [charData, setCharData] = useState([]);

    useEffect(() => {

        const charRef = projectFirestore.collection("characters");
        charRef.onSnapshot(snap => {
            // let data = []
            snap.forEach(doc => {
                if (doc.id === char) {
                    setCharData(doc.data())
                }
            })
        })
        // projectFirestore.collection("images").add({url})
        
    }, [char])
    return {charData}
}

export default useFirestore