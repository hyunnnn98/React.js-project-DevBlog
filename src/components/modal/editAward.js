import React, { useState } from 'react'
import Modal from 'react-modal';

import './editAward.css'
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

export default function EditAward(props) {
    const [inputs, setInputs] = useState({
        program: '',
        award: '',
        date: ''
    });

    const { program, award, date } = inputs

    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handelCreateAward = () => {
        if (program.length === 0 || award.length === 0 || date.length === 0) {
            alert("값을 입력해주세요.")
        }
    }
    return (
        <Modal
            isOpen={props.showModal}
            contentLabel="대외활동 수정"
            style={customStyles}
        >
            <div onClick={() => props.setShowModal(false)} className="modal-close-button"><img src={closeButton} alt='' /></div>
            <div className="edit-award-container">
                <div>{props.type ? '교내' : '교외'} 활동</div>
                <div>활동명</div>
                <input name="program" className="edit-input" onChange={onChange} type="text" placeholder="활동명을 입력해주세요." />
                <div>상장명</div>
                <input name="award" className="edit-input" onChange={onChange} type="text" placeholder="상장명을 입력해주세요." />
                <div>날짜</div>
                <input name="date" className="edit-input" onChange={onChange} type="text" placeholder="날짜를 입력해주세요." />
                <div onClick={handelCreateAward}>추가</div>
            </div>
        </Modal>
    )
}
