import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { resetCameraImage, selectcameraImage } from './features/cameraSlice'
import CloseIcon from '@material-ui/icons/Close'
import TextFieldIcon from '@material-ui/icons/TextFields'
import CreateIcon from '@material-ui/icons/Create'
import NoteIcon from '@material-ui/icons/Note'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import TimerIcon from '@material-ui/icons/Timer'
import CropIcon from '@material-ui/icons/Crop'
import SendIcon from '@material-ui/icons/Send'
import { v4 as uuid } from "uuid"

import "./Preview.css"

function Preview() {
    const cameraImage = useSelector(selectcameraImage);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!cameraImage) {
            history.replace("/")
        }
    }, [cameraImage, history]);

    const closePreview = () => {
        dispatch(resetCameraImage());
        history.replace('/')
    }

    const sendPost = () => {
        const id = uuid();
        
    }

    return (
        <div className="preview">
            <CloseIcon onClick={closePreview} className='preview__close'/>
            <div className="preview__toolbarRight">
                <TextFieldIcon/>
                <CreateIcon/>
                <NoteIcon/>
                <MusicNoteIcon/>
                <AttachFileIcon/>
                <CropIcon/>
                <TimerIcon/>
            </div>
            <img src={cameraImage} alt=""/>
            <div className="preview__footer">
                <h2>Send Now</h2>
                <SendIcon onClick={sendPost} fontSize="small" className="preview__sendIcon"/>
            </div>
        </div>
    )
}

export default Preview
