import React, { useState } from 'react'
import Modal from 'react-modal';

import closeButton from '../../styles/img/close-button.png'
import noPhoto from '../../styles/img/no-photo.png'
import './editSKill.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

export default function EditSkill(props) {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    
    //TODO 이미지 업로드 기능 추가
    return (
        <Modal
            isOpen={props.showModal}
            contentLabel="스킬 수정"
            style={customStyles}
        >
            <div onClick={() => props.setShowModal(false)} className="modal-close-button"><img src={closeButton} alt='' /></div>
            <div className="edit-skill-container">
                <div style={{ alignSelf: "flex-start", fontWeight: 900, fontSize: 24, marginBottom: '10px' }}>
                    기술스택 {props.skill ? "수정" : "추가"}
                </div>
                <div style={{ alignSelf: "flex-start" }}>사진 업로드 ( 이미지를 클릭해주세요 )</div>
                <div className="edit-skill-image-container">
                    {
                        props.skill ?
                            <img src={props.skill.thumb} alt="썸네일" /> :
                            <img className={image === null ? "center-image" : null} src={image === null ? noPhoto : image} alt="" />
                    }
                </div>
                <div style={{ alignSelf: "flex-start" }}>Skill 이름</div>
                <input type="text" className="edit-input" value={props.skill ? props.skill.title : ""} />
                <div className="normal-button">{props.skill ? "수정" : "추가"}</div>
            </div>

        </Modal>
    )
}
