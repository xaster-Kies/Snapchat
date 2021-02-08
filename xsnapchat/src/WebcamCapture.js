import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import { setCameraImage } from './features/cameraSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
}


function WebcamCapture() {
    const webcamRef = useRef(null)
    const [image, setImage] = useState(null)
    const dispatch = useDispatch();
    const history = useHistory();

    const capture = useCallback(
        () => {
           const imageSrc = webcamRef.current.getScreenshot();
           dispatch(setCameraImage(imageSrc));
           history.push("/preview")
        },
        [webcamRef],
    )
    
    return (
        <div className="webcamCapture">
            <Webcam
            audio={false}
            height={videoConstraints.height}
            ref = {webcamRef}
            screenshotFormat="image/jpeg"
            width = {videoConstraints.widht}
            videoConstraints={videoConstraints}
            />
            
            <RadioButtonUncheckedIcon
            className="webCapture__button"
            onClick={capture}
            fontSize="large"

            />

            
        </div>
    )
}

export default WebcamCapture
