import React from "react"
import useFirestore from "../hooks/useFirestore"
// import "../waldo/jpg"
// import {projectStorage} from "../firebase/config.js"
const ImageContainer = () => {
    const {url} = useFirestore()
    // let imageRef;
    // (async() => {
    //    imageRef = await projectStorage.ref().child("waldo.jpg").getDownloadURL()
    // })()
    
    return (
        <div className="image-container" >
            {url && <img src={url}alt="find waldo"/>}
        </div>
    )
}

export default ImageContainer