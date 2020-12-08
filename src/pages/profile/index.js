import React, { useState, useEffect } from 'react'
import { API_PROFILE } from '../../utils/api'

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
import deleteOutlineImg from '../../styles/img/trash-can.png'
import editlImg from '../../styles/img/edit-button.png'

const ProfilePage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [projects, setProjects] = useState(Profile.projects)
    const [skills, setSkills] = useState(Profile.skills)
    const [onCampus, setOnCampus] = useState(Profile.onCampus);
    const [outCampus, setOutCampus] = useState(Profile.outCampus);

    const [showProjectModal, setShowProjectModal] = useState(false)
    const [showSkillModal, setShowSkillModal] = useState(false)
    const [showAwardModal, setShowAwardModal] = useState(false)
    const [awardType, setAwardType] = useState(true)
    const [skillType, setSkillType] = useState(null)
    const [projectType, setProjectType] = useState(null)

    const handleDeleteAward =async (type, _id) => {
        await API_PROFILE.deleteAward(_id)
        type === 'on' ?
            setOnCampus(onCampus.filter((e) => (e.id !== _id)))
            : setOutCampus(outCampus.filter((e) => (e.id !== _id)))
    }

    const handleDeleteProject = (_id) => {
        setProjects(projects.filter((e) => (e.id !== _id)))
    }

    const handleDeleteSkill = (_id) => {
        setSkills(skills.filter((e) => (e.id !== _id)))
    }

    useEffect(() => {
        handleRefresh('award')
        // handleRefresh('skill')
        handleRefresh('project')
    }, [])

    useEffect(() => {
        if (showSkillModal === false) {
            setSkillType(null)
        }
    }, [showSkillModal])

    useEffect(() => {
        if (showProjectModal === false) {
            setProjectType(null)
        }
    }, [showProjectModal])

    const handleRefresh = async (type) => {
        try {
            let api = null
            let setState = null

            switch (type) {
                case 'award':
                    api = API_PROFILE.getAwards
                    setState = (data) => {
                        setOnCampus(data.onCampus)
                        setOutCampus(data.outCampus)
                    }
                    break;
                case 'skill':
                    api = API_PROFILE.getSkills
                    setState = (data) => { setSkills(data) }
                    break;
                case 'project':
                    api = API_PROFILE.getProjects
                    setState = (data) => { setProjects(data) }
                    break;
                default:
                    break;
            }

            const { data } = await api()
            console.log(type + " : " + data.info)
            console.log(data)
            setState(data.info)
        } catch (e) {
            return false;
        }

        return true;
    }

    return (
        <div className="profile-container">
            <EditProject
                project={projectType}
                setShowModal={setShowProjectModal}
                showModal={showProjectModal}
                handleRefresh={handleRefresh}
            />
            <EditSkill
                skill={skillType}
                setShowModal={setShowSkillModal}
                showModal={showSkillModal}
                handleRefresh={handleRefresh}
            />
            <EditAward
                type={awardType}
                setShowModal={setShowAwardModal}
                showModal={showAwardModal}
                setOnCampus={setOnCampus}
                setOutCampus={setOutCampus}
                handleRefresh={handleRefresh}
            />
            <div className="profile-content-container">
                <div>
                    <ProfileInfo />
                    {isLogin ?
                        <div class="profile-info-plus-container">
                            <div onClick={() => setShowSkillModal(true)}>기술스택  +</div>
                            <div onClick={() => setShowProjectModal(true)}>프로젝트  +</div>
                        </div> : null
                    }
                </div>
                <div className="profile-info-container">
                    <div className="profile-title">
                        저는 ~~을 ~~하는 ~~ 입니다.
                    </div>
                    <div className="profile-sub-title">학력 / 대외활동</div>
                    <div className="profile-content">
                        <div>
                            <div className="profile-content-title">▶ 교내
                                {isLogin ?
                                    <span onClick={() => {
                                        setShowAwardModal(true)
                                        setAwardType(true)
                                    }} className="profile-content-edit">
                                        <img src={plusImg} alt='' /></span> : null
                                }
                            </div>
                            <div className="profile-content-award">
                                {
                                    onCampus.map((v) =>
                                        (<div>
                                            ● {v.award_at} {v.title} {v.award && v.award.length !== 0 ? `- ${v.award}상` : '참가'}
                                            { isLogin ?
                                                <span
                                                    onClick={() => handleDeleteAward('on', v.id)}
                                                    className="profile-content-edit"><img src={deleteOutlineImg} alt='' /></span> : null
                                            }
                                        </div>)
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <div className="profile-content-title">▶ 교외
                                {isLogin ?
                                    <span onClick={() => {
                                        setShowAwardModal(true)
                                        setAwardType(false)
                                    }} className="profile-content-edit"><img src={plusImg} alt='' /></span> : null
                                }
                            </div>
                            <div className="profile-content-award">
                                {
                                    outCampus.map((v) =>
                                        (<div>
                                            ● {v.award_at} {v.title} {v.award && v.award.length !== 0 ? `- ${v.award}상` : null}
                                            { isLogin ?
                                                <span
                                                    onClick={() => handleDeleteAward('out', v.id)}
                                                    className="profile-content-edit"><img src={deleteOutlineImg} alt='' /></span> : null
                                            }
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
                                {isLogin ?
                                    <div className="skill-modify">
                                        <div onClick={() => {
                                            setSkillType(v)
                                            setShowSkillModal(true)
                                        }}>수정</div>
                                        <div onClick={() => handleDeleteSkill(v.id)}>삭제</div>
                                    </div> : null
                                }
                                <div className="skill-img"><img src={v.thumb} alt='썸네일' /></div>
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
                                    {isLogin ?
                                        <div className="project-modify">
                                            <span onClick={() => {
                                                setProjectType(v)
                                                setShowProjectModal(true)
                                            }} className="profile-content-edit"><img src={editlImg} alt='' /></span>
                                            <span onClick={() => handleDeleteProject(v.id)} className="profile-content-edit"><img src={deleteImg} alt='' /></span>
                                        </div> : null
                                    }
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

export default ProfilePage