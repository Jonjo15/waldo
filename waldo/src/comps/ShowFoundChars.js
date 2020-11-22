import React from "react"

const ShowFoundChars = ({waldoFound, odlawFound, wizardFound}) => {

    return (
        <>
            {waldoFound && <div className="waldo"></div> }
            {odlawFound && <div className="odlaw"></div> }
            {wizardFound && <div className="wizard"></div> }
        </>
    )
}
export default ShowFoundChars