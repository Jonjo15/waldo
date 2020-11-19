import React from "react"
// import useFirestore from "../hooks/useFirestore"
// import "../waldo/jpg"
// import {projectStorage} from "../firebase/config.js"
const ImageContainer = ({url}) => {
    // const {url} = useFirestore()
    // let imageRef;
    // const [url, setUrl] = useState(null)
    // (async() => {
    //   let url = await projectStorage.ref().child("waldo.jpg").getDownloadURL()
    //   setUrl(url)  
    // })()
    
    return (
        <div className="image-container" >
            {url && <img src={url}alt="find waldo"/>}
        </div>
    )
}

export default ImageContainer