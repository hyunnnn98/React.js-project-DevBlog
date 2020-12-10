import React from 'react'

// import styles
import './post.css'
import disqusSample from '../../styles/img/disqus-sample.png'

export default function PostPage() {
    return (
        <div className="post-body-container">
            <div className="post-title-container">
                <div>React.js</div>
                <div>제목이 들어갈 위치입니다.</div>
                <div>2020. 11. 13. 13:12</div>
            </div>
            <div className="post-content-container">내용이 들어갈 위치입니다. ( 마크다운 )</div>
            {/* previewst- container */}
            <div className="post-preview-container">
                <div className="post-preview-header">
                    <div>'React.js' 카테고리의 다른 글</div>
                    <div>more</div>
                </div>
                <div className="post-preview-wrapper">
                    <div className="post-preview-item">
                        <div className="post-preview-title">[React.js] React Hooks 란 무엇일까? (1)</div>
                        <div className="post-preview-date">2020.11.10</div>
                    </div>
                    <div className="post-preview-item">
                        <div className="post-preview-title current">[React.js] React Hooks 란 무엇일까? (1)</div>
                        <div className="post-preview-date">2020.11.10</div>
                    </div>
                    <div className="post-preview-item">
                        <div className="post-preview-title">[React.js] React Hooks 란 무엇일까? (1)</div>
                        <div className="post-preview-date">2020.11.10</div>
                    </div>
                </div>
            </div>
            {/* comment - items - container */}
            <div className="comment-items-container">
                댓글 기능이 들어갈 위치입니다. - Disqus 
                <img src={disqusSample} alt=''/>
            </div>
            <div>전체 게시글 페이지네이션 이 들어갈 위치입니다.</div>
        </div>
    )
}
