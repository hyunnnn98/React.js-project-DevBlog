import React, { useState } from 'react'
import Modal from 'react-modal';

import closeButton from '../../styles/img/close-button.png'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 0,
    }
};

export default function EditSkill(props) {
    return (
        <Modal
            isOpen={props.showModal}
            contentLabel="스킬 수정"
            style={customStyles}
        >
            <div onClick={() => props.setShowModal(false)} className="modal-close-button"><img src={closeButton} alt='' /></div>
            <div>
                모달입니다.
                <div>이미지</div>
                <div>언어명</div>
                <div>수정버튼</div>
                <div>취소버튼</div>
            </div>

        </Modal>
    )
}
