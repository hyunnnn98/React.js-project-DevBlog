import React, { useState } from 'react'
import Modal from 'react-modal';
import { API_PROFILE } from '../../utils/api'

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
        title: '',
        award: '',
        award_at: ''
    });

    const { title, award, award_at } = inputs

    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleCreateAward = async () => {
        if (title.length === 0 || award_at.length === 0) {
            alert("값을 입력해주세요.")
        }
        try {
            const data = {
                'type': props.type ? 'onCampus' : 'outCampus',
                title: inputs.title,
                award: inputs.award,
                award_at: inputs.award_at
            }

            await API_PROFILE.setAward(data)
            await props.handleRefresh('award')
            props.setShowModal(false)
        } catch (e) {
            alert("오류!")
        }
        /**
         * 1. 입력 된 값 라라벨 서버에 보내기
         * 2. 전송 확인되면 자동으로 모달장 닫기
         * 3. 닫은 후 대외활동 내역 서버로부터 다시 받아온 후 리렌더링
         */
    }
    return (
        <Modal
            ariaHideApp={false}
            isOpen={props.showModal}
            contentLabel="대외활동 수정"
            style={customStyles}
        >
            <div onClick={() => props.setShowModal(false)} className="modal-close-button"><img src={closeButton} alt='' /></div>
            <div className="edit-award-container">
                <div>{props.type ? '교내' : '교외'} 활동</div>
                <div>활동명</div>
                <input name="title" className="edit-input" onChange={onChange} type="text" placeholder="활동명을 입력해주세요." />
                <div>상장명</div>
                <input name="award" className="edit-input" onChange={onChange} type="text" placeholder="상장명을 입력해주세요. ( 없다면 패스 )" />
                <div>날짜</div>
                <input name="award_at" className="edit-input" onChange={onChange} type="text" placeholder="날짜를 입력해주세요." />
                <div onClick={handleCreateAward}>추가</div>
            </div>
        </Modal>
    )
}
