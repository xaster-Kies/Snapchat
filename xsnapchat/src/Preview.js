import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { selectcameraImage } from './features/cameraSlice'
import "./Preview.css"

function Preview() {
    const cameraImage = useSelector(selectcameraImage);
    const history = useHistory();

    useEffect(() => {
        if(!cameraImage) {
            history.replaceState("/")
        }
    }, [cameraImage, history]);

    return (
        <div className="preview">
            <img src={cameraImage} alt=""/>
        </div>
    )
}

export default Preview
