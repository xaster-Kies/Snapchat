import React from 'react'
import { useSelector } from 'react-redux'
import { selectcameraImage } from './features/cameraSlice'
import "./Preview.css"

function Preview() {
    const cameraImage = useSelector(selectcameraImage);

    useEffect(() => {
        if(!cameraImage) {
            history
        }
    })

    return (
        <div className="preview">
            
        </div>
    )
}

export default Preview
