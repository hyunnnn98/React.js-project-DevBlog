import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';

import './addCategory.css'
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

export default function AddCategory(props) {
    const [name, setName] = useState(null);

    const onChange = (e) => {
        const categoryName = e.target.value
        setName(categoryName)
    }

    const handleCreate = async () => {
        //TODO 카테고리 추가 api 받아서 name 전송하기
        // 추가한다음에 닫힐때는 카테고리 부분 초기화 해주는게 맞지 않을까? 싶은데..
        props.setShowModal(false)
    }

    return (
        <Modal
            ariaHideApp={false}
            isOpen={props.showModal}
            contentLabel="카테고리 추가"
            style={customStyles}
        >
            <div onClick={() => props.setShowModal(false)} className="modal-close-button"><img src={closeButton} alt='' /></div>
            <div className="add-category-container">
                <div>카테고리 추가</div>
                <div>
                    <input name="title" className="edit-input" onChange={onChange} type="text" placeholder="카테고리 이름을 입력해주세요." />
                    <div onClick={() => handleCreate()} className="normal-button">추가</div>
                </div>
            </div>
        </Modal>
    )
}
