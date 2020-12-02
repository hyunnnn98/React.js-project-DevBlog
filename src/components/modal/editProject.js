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
                    <input className="edit-input" value={props.project ? props.project.title : null} type="text" placeholder="프로젝트 이름을 입력해주세요" />
                </div>
                <div className="edit-project-type">
                    <div>타입</div>
                    <select>
                        <option value="side">개인 프로젝트</option>
                        <option value="team">팀 프로젝트</option>
                    </select>
                    <div>포지션</div>
                    <select>
                        <option value="side">프론트엔드</option>
                        <option value="team">백엔드</option>
                        <option value="team">풀스택</option>
                    </select>
                </div>
                <div className="edit-emphasis">썸네일</div>
                {/* <div className="edit-emphasis">사진</div> */}
                <div className="edit-project-thumb">
                    <input
                        className="edit-input"
                        type="text"
                        readOnly='true'
                        value={props.project ? props.project.thumb : null}
                        placeholder="사진을 업로드해주세요"
                    />
                    <div>찾아보기 ...</div>
                </div>
                <div>
                    <div className="edit-emphasis">개발기간</div>
                    <input
                        className="edit-input"
                        type="text"
                        value={props.project ? props.project.period + " 월" : null}
                        placeholder="프로젝트의 진행기간을 입력해주세요"
                    />
                </div>
                <div>
                    <div className="edit-emphasis">설명</div>
                    <textarea
                        className="edit-input wide-input"
                        placeholder="프로젝트의 상세 내용 입력해주세요"
                    >
                        {props.project ? props.project.content : null}
                    </textarea>
                </div>
                <div className="edit-project-btn-wrapper">
                    <div>{props.project ? "수정" : "추가"}</div>
                </div>
            </div>

        </Modal>
    )
}
