import React from 'react'
import './blog.css'

import post_thumb_1 from '../../styles/img/post_thumb_1.png'
import squre_plus from '../../styles/img/square_plus_icon_gray.png'
import no_thumb_img from '../../styles/img/no_thumb_img.png'

// import components
import ProfileInfo from '../../components/ProfileInfo'

export default function index() {
    return (
        <div className="blog-container">
            <div className="blog-left-container">
                <div className="post-container">
                    <div className="post-left-container">
                        <img src={post_thumb_1} />
                    </div>
                    <div className="post-right-container">
                        <div>React Hooks 란 무엇일까?</div>
                        <div>React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect 라고 한다. 화면 렌더링 반환 속도 ...</div>
                        <div>2020. 11.01 21.33</div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="post-left-container">
                        <img src={post_thumb_1} />
                    </div>
                    <div className="post-right-container">
                        <div>React Hooks 란 무엇일까?</div>
                        <div>React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect 라고 한다. 화면 렌더링 반환 속도 ...</div>
                        <div>2020. 11.01 21.33</div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="post-left-container">
                        <img src={post_thumb_1} />
                    </div>
                    <div className="post-right-container">
                        <div>React Hooks 란 무엇일까?</div>
                        <div>React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect 라고 한다. 화면 렌더링 반환 속도 ...</div>
                        <div>2020. 11.01 21.33</div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="post-left-container">
                        <img src={post_thumb_1} />
                    </div>
                    <div className="post-right-container">
                        <div>React Hooks 란 무엇일까?</div>
                        <div>React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect 라고 한다. 화면 렌더링 반환 속도 ...</div>
                        <div>2020. 11.01 21.33</div>
                    </div>
                </div>
                <div className="post-container">
                    <div className="post-left-container">
                        <img src={post_thumb_1} />
                    </div>
                    <div className="post-right-container">
                        <div>React Hooks 란 무엇일까?</div>
                        <div>React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect 라고 한다. 화면 렌더링 반환 속도 ...</div>
                        <div>2020. 11.01 21.33</div>
                    </div>
                </div>
            </div>
            <div className="blog-right-container">
                <ProfileInfo/>
                <div className="search-container">
                    <input placeholder="검색기능을 이용해보세요!" />
                </div>
                <div className="category-container">
                    <div>카테고리</div>
                    <div>All Categories<span className="category-post-count">(212)</span></div>
                    <div className="category-main-container">
                        <div>
                            <img src={squre_plus} />
                            React.js
                            <span className="category-post-count">(11)</span>
                        </div>
                        <div>
                            <img src={squre_plus} />
                            ReactNavite.js
                            <span className="category-post-count">(14)</span>
                        </div>
                        <div>
                            <img src={squre_plus} />
                            Laravel.js
                            <span className="category-post-count">(52)</span>
                        </div>
                    </div>
                </div>
                <div className="new-poster-container">
                    <div>최신글</div>
                    <div>
                        <img src={no_thumb_img} />
                            React Hooks 란 무엇일 ...
                    </div>
                    <div>
                        <img src={no_thumb_img} />
                            Github는 이것만 알면 다 ...
                    </div>
                </div>
            </div>
        </div>
    )
}
