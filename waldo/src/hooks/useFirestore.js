import {useState, useEffect} from "react"
import {projectFirestore, imageRef} from "../firebase/config"

const useFirestore = () => {
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {

        imageRef.getDownloadURL().then(function(url) {
            projectFirestore.collection("images").add({url})
            setImageUrl(url)
        })
        // projectFirestore.collection("images").add({url})
        
    })
    return {imageUrl}
}

export default useFirestore