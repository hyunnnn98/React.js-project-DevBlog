import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { API_PROFILE } from '../../utils/api'
import { dataURLtoFile } from '../../utils/convertProject'

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
    const [inputs, setInputs] = useState({
        title: '',
        type: 'side',
        position: 'front',
        content: '',
        project_start_date: '',
        project_end_date: '',
        project_link: '',
    });

    // TODO 날짜 validation 체크 ( 프론트 + 백 )

    const [image, setImage] = useState({
        file: null,
        imagePreviewUrl: null
    })

    const { title, type, position, content, project_start_date, project_end_date, project_link } = inputs
    const { project } = props

    useEffect(() => {
        if (props && props.project) {
            let file = dataURLtoFile(project.thumb, 'a.png')
            setImage({
                'file': file,
                'imagePreviewUrl': file.name
            });

            setInputs({
                title: project.title,
                type: project.type,
                position: project.position,
                content: project.content,
                project_start_date: project.project_start_date,
                project_end_date: project.project_end_date,
                project_link: project.project_link,
            })
        }

    }, [project])

    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    // 이미지 업로드 기능 추가
    const handleCreate = async () => {
        if (image === null) {
            alert("이미지 업로드 후 등록 가능합니다.")
        }
        const formData = new FormData()
        formData.append('title', title)
        formData.append('thumb', image.file)
        formData.append('type', type)
        formData.append('position', position)
        formData.append('content', content)
        formData.append('project_start_date', project_start_date)
        formData.append('project_end_date', project_end_date)
        formData.append('project_link', project_link)

        // TODO 예외처리하기
        props.project ?
            await API_PROFILE.updateProject(props.project.id, formData) : await API_PROFILE.setProject(formData)

        await props.handleRefresh('project')
        handleInit()
    }

    const handleChange = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImage({
                'file': file,
                'imagePreviewUrl': file.name
            });
        }

        reader.readAsDataURL(file)
    }

    const handleInit = () => {
        setInputs({
            title: '',
            type: 'side',
            position: 'front',
            content: '',
            project_start_date: '',
            project_end_date: '',
            project_link: '',
        })

        setImage({
            file: null,
            imagePreviewUrl: null
        })

        props.setShowModal(false)
    }

    return (
        <Modal
            isOpen={props.showModal}
            contentLabel="프로젝트 수정"
            style={customStyles}
            ariaHideApp={false}
        >
            <div onClick={() => props.setShowModal(false)} className="modal-close-button"><img src={closeButton} alt='' /></div>
            <div className="edit-project-container">
                <div className="edit-project-title">
                    <div className="edit-emphasis">프로젝트명</div>
                    <input
                        name="title"
                        onChange={onChange}
                        className="edit-input"
                        value={title}
                        type="text" placeholder="프로젝트 이름" />
                </div>
                <div className="edit-project-type">
                    <div>타입</div>
                    <select name="type" onChange={onChange}>
                        <option value="side">개인 프로젝트</option>
                        <option value="team">팀 프로젝트</option>
                    </select>
                    <div>포지션</div>
                    <select name="position" onChange={onChange}>
                        <option value="front">프론트엔드</option>
                        <option value="back">백엔드</option>
                        <option value="full">풀스택</option>
                    </select>
                </div>
                <div className="edit-emphasis">썸네일</div>
                {/* <div className="edit-emphasis">사진</div> */}
                <div className="edit-project-thumb">
                    <input
                        className="edit-input"
                        type="text"
                        readOnly={true}
                        value={props.project ? props.project.thumb : image.imagePreviewUrl}
                        placeholder="사진을 업로드해주세요"
                    />
                    <input id="upload-project-file" type="file" onChange={(e) => handleChange(e)} hidden />
                    <label htmlFor="upload-project-file">찾아보기 ...</label>
                </div>
                <div>
                    <div className="edit-emphasis">개발기간</div>
                    <input
                        onChange={onChange}
                        name="project_start_date"
                        className="edit-input"
                        type="text"
                        value={(props.project && props.project.project_start_date) ? props.project.project_start_date : project_start_date}
                        placeholder="프로젝트의 시작날짜"
                    />
                    <input
                        onChange={onChange}
                        name="project_end_date"
                        className="edit-input"
                        type="text"
                        value={(props.project && props.project.project_end_date) ? props.project.project_end_date : project_end_date}
                        placeholder="프로젝트의 종료날짜"
                    />
                </div>
                <div>
                    <div className="edit-emphasis">설명</div>
                    <textarea
                        onChange={onChange}
                        name="content"
                        className="edit-input wide-input"
                        placeholder="프로젝트의 상세 내용"
                    >
                        {props.project ? props.project.content : null}
                    </textarea>
                </div>
                <div>
                    <div className="edit-emphasis">깃허브 주소</div>
                    <input
                        onChange={onChange}
                        name="project_link"
                        className="edit-input"
                        type="text"
                        value={(props.project && props.project.project_link) ? props.project.project_link : project_link}
                        placeholder="깃허브 주소"
                    />
                </div>
                <div onClick={handleCreate} className="edit-project-btn-wrapper">
                    <div>{props.project ? "수정" : "추가"}</div>
                </div>
            </div>

        </Modal>
    )
}
