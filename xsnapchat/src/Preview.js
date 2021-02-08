import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { resetCameraImage, selectcameraImage } from './features/cameraSlice'
import CloseIcon from '@material-ui/icons/Close'
import "./Preview.css"

function Preview() {
    const cameraImage = useSelector(selectcameraImage);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!cameraImage) {
            history.replaceState("/")
        }
    }, [cameraImage, history]);

    const closePreview = () => {
        dispatch(resetCameraImage());
        history.replace('/')
    }

    return (
        <div className="preview">
            <CloseIcon onClick={closePreview} className='preview__close'/>
            <div className="preview__toolbarRight">
                <TextFieldIcons/>
                <CreateIcon/>
                <NoteIcon/>
                
            </div>
            <img src={cameraImage} alt=""/>
        </div>
    )
}

export default Preview
