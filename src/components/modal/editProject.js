import React, { useState } from 'react'
import Modal from 'react-modal'

import './editProject.css'
import closeButton from '../../styles/img/close-button.png'

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

export default function EditProject(props) {
    return (
        <Modal
            isOpen={props.showModal}
            contentLabel="프로젝트 수정"
            style={customStyles}
        >
            <div onClick={() => props.setShowModal(false)} className="modal-close-button"><img src={closeButton} alt='' /></div>
            <div className="edit-project-container">
                <div className="edit-project-title">
                    <div className="edit-emphasis">프로젝트명</div>
                    <input className="edit-input" type="text" placeholder="프로젝트 이름을 입력해주세요" />
                </div>
                <div className="edit-emphasis">타입 - select 박스 예정</div>
                {/* <div className="edit-emphasis">사진</div> */}
                <div className="edit-project-thumb">
                    <input className="edit-input" type="text" placeholder="사진을 업로드해주세요" />
                    <div>찾아보기 ...</div>
                </div>
                <div>
                    <div className="edit-emphasis">개발기간</div>
                    <input className="edit-input" type="text" placeholder="프로젝트의 상세 내용 입력해주세요" />
                </div>
                <div>
                    <div className="edit-emphasis">설명</div>
                    <input className="edit-input" type="text" placeholder="프로젝트의 상세 내용 입력해주세요" />
                </div>
                <div className="edit-project-btn-wrapper">
                    <div>수정</div>
                </div>
            </div>

        </Modal>
    )
}
