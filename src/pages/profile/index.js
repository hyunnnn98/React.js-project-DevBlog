import React from 'react'

// import components
import ProfileInfo from '../../components/ProfileInfo'

// import styles
import './profile.css'
import projectThumb_1 from '../../styles/img/project_thumb_1.png'
import projectThumb_2 from '../../styles/img/project_thumb_2.png'
import projectThumb_3 from '../../styles/img/project_thumb_3.png'
import projectThumb_4 from '../../styles/img/project_thumb_4.png'


export default function index() {
    return (
        <div className="profile-container">
            <div className="profile-content-container">
                <ProfileInfo />
                <div className="profile-info-container">
                    <div className="profile-title">
                        저는 ~~을 ~~하는 ~~ 입니다.
                    </div>
                    <div className="profile-sub-title">학력 / 대외활동</div>
                    <div className="profile-content">
                        <div>
                            <div className="profile-content-title">▶ 교내</div>
                            <div className="profile-content-award">
                                <div>● 2019.09 XX활동에서 00상</div>
                                <div>● 2019.09 XX활동에서 00상</div>
                                <div>● 2019.09 XX활동에서 00상</div>
                                <div>● 2019.09 XX활동에서 00상</div>
                                <div>● 2019.09 XX활동에서 00상</div>
                            </div>
                        </div>
                        <div>
                            <div className="profile-content-title">▶ 교외</div>
                            <div className="profile-content-award">
                                <div>● 2019.09 XX활동에서 00상</div>
                                <div>● 2019.09 XX활동에서 00상</div>
                                <div>● 2019.09 XX활동에서 00상</div>
                                <div>● 2019.09 XX활동에서 00상</div>
                                <div>● 2019.09 XX활동에서 00상</div>
                                <div>● 2019.09 XX활동에서 00상</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-skill-container">
                <div className="profile-skill-title" >기술스택</div>
                <div className="profile-skill-list">
                    <div>
                        <div className="skill-img">이미지 영역</div>
                        <div className="skill-sub-title">JavaScript</div>
                    </div>
                    <div>
                        <div className="skill-img">이미지 영역</div>
                        <div className="skill-sub-title">PHP</div>
                    </div>
                    <div>
                        <div className="skill-img">이미지 영역</div>
                        <div className="skill-sub-title">React.js</div>
                    </div>
                    <div>
                        <div className="skill-img">이미지 영역</div>
                        <div className="skill-sub-title">ReactNative.js</div>
                    </div>
                    <div>
                        <div className="skill-img">이미지 영역</div>
                        <div className="skill-sub-title">Laravel</div>
                    </div>
                    <div>
                        <div className="skill-img">이미지 영역</div>
                        <div className="skill-sub-title">Vue</div>
                    </div>
                    <div>
                        <div className="skill-img">이미지 영역</div>
                        <div className="skill-sub-title">Node.js</div>
                    </div>
                </div>
            </div>
            <div className="profile-project-list">
                <div>
                    <div className="project-title">TradeWithどうぶつの森</div>
                    <div className="project-container">
                        <div className="project-type">개인프로젝트</div>
                        <div className="project-img">
                            <a href="https://github.com/kokomade98/Vue.js-project-AnimalCrossing" target="_blank">
                                <img src={projectThumb_1} />
                            </a>
                        </div>
                        <div className="project-period">개발기간 : 2020.05 ~ 08</div>
                        <div className="project-content">닌텐도 회사의 대표작 “동물의 숲” 의  거래 플랫폼 개발 실시간 대화를 통해 유저간의 편리한 거래가 가능.</div>
                    </div>
                </div>
                <div>
                    <div className="project-title">키미노하나와</div>
                    <div className="project-container">
                        <div className="project-type">팀 프로젝트 - 프론트엔드</div>
                        <div className="project-img">
                            <a href="https://github.com/kokomade98" target="_blank">
                                <img src={projectThumb_2} />
                            </a>
                        </div>
                        <div className="project-period">개발기간 : 2020.05 ~ 08</div>
                        <div className="project-content">닌텐도 회사의 대표작 “동물의 숲” 의  거래 플랫폼 개발 실시간 대화를 통해 유저간의 편리한 거래가 가능.</div>
                    </div>
                </div>
                <div>
                    <div className="project-title">Oline GlobalZone</div>
                    <div className="project-container">
                        <div className="project-type">팀 프로젝트 - 백엔드</div>
                        <div className="project-img">
                            <a href="https://github.com/kokomade98" target="_blank">
                                <img src={projectThumb_3} />
                            </a>
                        </div>
                        <div className="project-period">개발기간 : 2020.05 ~ 08</div>
                        <div className="project-content">닌텐도 회사의 대표작 “동물의 숲” 의  거래 플랫폼 개발 실시간 대화를 통해 유저간의 편리한 거래가 가능.</div>
                    </div>
                </div>
                <div>
                    <div className="project-title">SmileBot</div>
                    <div className="project-container">
                        <div className="project-type">개인프로젝트</div>
                        <div className="project-img">
                            <a href="https://github.com/kokomade98" target="_blank">
                                <img src={projectThumb_4} />
                            </a>
                        </div>
                        <div className="project-period">개발기간 : 2020.05</div>
                        <div className="project-content">닌텐도 회사의 대표작 “동물의 숲” 의  거래 플랫폼 개발 실시간 대화를 통해 유저간의 편리한 거래가 가능.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
