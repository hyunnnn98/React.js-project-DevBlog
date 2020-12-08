import React, { useState } from 'react'
import Modal from 'react-modal';
import { API_PROFILE } from '../../utils/api'

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
    const [image, setImage] = useState({
        file: null,
        imagePreviewUrl: null
    })

    const handleChange = (e) => {
        console.log(e.target.files)
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImage({
                file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    // 이미지 업로드 기능 추가
    const handleCreate = async () => {
        if (image === null) {
            alert("이미지 업로드 후 등록 가능합니다.")
        }
        const formData = new FormData();
        formData.append('thumb', image.file);
        formData.append('title', title);

        // TODO 예외처리하기
        await API_PROFILE.setSkill(formData);
        await props.handleRefresh('skill')
        props.setShowModal(false)
    }

    const onChange = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

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
                <input id="upload-file" type="file" onChange={(e) => handleChange(e)} hidden />
                <div style={{ alignSelf: "flex-start" }}>사진 업로드 ( 이미지를 클릭해주세요 )</div>
                <label for="upload-file" className="edit-skill-image-container">
                    {
                        props.skill ?
                            <img src={props.skill.thumb} alt="썸네일" /> :
                            <img
                                className={image === null ? "center-image" : null}
                                src={image.imagePreviewUrl === null ? noPhoto : image.imagePreviewUrl} alt="" /
                            >
                    }
                </label>
                <div style={{ alignSelf: "flex-start" }}>Skill 이름</div>
                <input type="text" onChange={(e) => onChange(e)} className="edit-input" value={props.skill ? props.skill.title : title} />
                <div onClick={() => handleCreate()} className="normal-button">{props.skill ? "수정" : "추가"}</div>
            </div>

        </Modal>
    )
}
