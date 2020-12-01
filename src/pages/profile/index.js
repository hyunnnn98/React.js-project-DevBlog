import React, { useState } from 'react'

// import components
import ProfileInfo from '../../components/ProfileInfo'
import EditProject from '../../components/modal/editProject'
import EditSkill from '../../components/modal/editSkill'
import EditAward from '../../components/modal/editAward'

// import styles
import './profile.css'
import { Profile } from '../../models'
import plusImg from '../../styles/img/plus.png'
import deleteImg from '../../styles/img/delete-button.png'
import editlImg from '../../styles/img/edit-button.png'

export default function ProfileContainer() {
    const [projects, setProjects] = useState(Profile.projects)
    const [skills, setSkills] = useState(Profile.skills)
    const [onCampus, setOnCampus] = useState(Profile.onCampus);
    const [outCampus, setOutCampus] = useState(Profile.outCampus);

    const [showProjectModal, setShowProjectModal] = useState(false)
    const [showSkillModal, setShowSkillModal] = useState(false)
    const [showAwardModal, setShowAwardModal] = useState(false)
    const [awardType, setAwardType] = useState(true)

    const handelDeleteAward = (type, _id) => {
        type === 'on' ?
            setOnCampus(onCampus.filter((e) => (e.id !== _id)))
            : setOutCampus(outCampus.filter((e) => (e.id !== _id)))
    }

    const handelDeleteProject = (_id) => {
        setProjects(projects.filter((e) => (e.id !== _id)))
    }

    return (
        <div className="profile-container">
            <EditProject setShowModal={setShowProjectModal} showModal={showProjectModal} />
            <EditSkill setShowModal={setShowSkillModal} showModal={showSkillModal} />
            <EditAward
                type={awardType}
                setShowModal={setShowAwardModal}
                showModal={showAwardModal}
                setOnCampus={setOnCampus}
                setOutCampus={setOutCampus}
            />
            <div className="profile-content-container">
                <ProfileInfo />
                <div className="profile-info-container">
                    <div className="profile-title">
                        저는 ~~을 ~~하는 ~~ 입니다.
                    </div>
                    <div className="profile-sub-title">학력 / 대외활동</div>
                    <div className="profile-content">
                        <div>
                            <div onClick={() => {
                                setShowAwardModal(true)
                                setAwardType(true)
                            }} className="profile-content-title">▶ 교내
                            <span className="profile-content-edit"><img src={plusImg} alt='' /></span>
                            </div>
                            <div className="profile-content-award">
                                {
                                    onCampus.map((v) =>
                                        (<div>
                                            ● {v.award_at} {v.title} {v.award.length !== 0 ? `- ${v.award}상` : '참가'}
                                            <span
                                                onClick={() => handelDeleteAward('on', v.id)}
                                                className="profile-content-edit circleWrapper"><img src={deleteImg} alt='' /></span>
                                        </div>)
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <div onClick={() => {
                                setShowAwardModal(true)
                                setAwardType(false)
                            }} className="profile-content-title">▶ 교외
                            <span className="profile-content-edit"><img src={plusImg} alt='' /></span>
                            </div>
                            <div className="profile-content-award">
                                {
                                    outCampus.map((v) =>
                                        (<div>
                                            ● {v.award_at} {v.title} {v.award.length !== 0 ? `- ${v.award}상` : null}
                                            <span
                                                onClick={() => handelDeleteAward('out', v.id)}
                                                className="profile-content-edit circleWrapper"><img src={deleteImg} alt='' /></span>
                                        </div>)
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-skill-container">
                <div className="profile-skill-title" >기술스택</div>
                <div className="profile-skill-list">
                    {
                        skills.map(v =>
                            <div key={v.id}>
                                <div className="skill-modify">
                                    <div onClick={() => setShowSkillModal(true)}>수정</div>
                                    <div>삭제</div>
                                </div>
                                <div className="skill-img">이미지 영역</div>
                                <div className="skill-sub-title">{v.title}</div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="profile-project-list">
                {
                    projects.map(v =>
                        <div>
                            <div className="project-title">{v.title}</div>
                            <div className="project-container">
                                <div className="project-type-wrapper">
                                    <div className="project-type">
                                        {v.type} - {v.position}
                                    </div>
                                    <div className="project-modify">
                                        <span onClick={() => setShowProjectModal(true)} className="profile-content-edit"><img src={editlImg} alt='' /></span>
                                        <span onClick={() => handelDeleteProject(v.id)} className="profile-content-edit"><img src={deleteImg} alt='' /></span>
                                    </div>
                                </div>
                                <div className="project-img">
                                    <a href={v.link} target="_blank">
                                        <img src={v.thumb} alt='' />
                                    </a>
                                </div>
                                <div className="project-period">개발기간 : {v.period}</div>
                                <div className="project-content">{v.content}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    )
}
