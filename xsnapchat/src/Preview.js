import React from 'react'
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
            
        </div>
    )
}

export default Preview
