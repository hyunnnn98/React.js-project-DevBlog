import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

// import styles
import './post.css'
import disqusSample from '../../styles/img/disqus-sample.png'

export default function PostPage(props) {
    const location = useLocation();
    // 페이지 추적
    useEffect(() => {
        // setIsBlogPage(postId && typeof (Number(postId)) === 'number' ? false : true)
        window.scrollTo(0, 0)

        /*
            사용자로부터 들어올 때 '/blog/:id' 로 들어온 경우 ?
    
            db에서 해당 카테고리 id + post 정보 가져와서
            PostPage에 넘겨주기 !!!
    
            정보 가져오는 동안은 loading ... 연결
        */
    }, [location]);


    return (
        <div className="post-body-container">
            <div className="post-title-container">
                <div>{props.folder.title}</div>
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
                    <Link to='/blog/1' className="post-preview-item">
                        <div className="post-preview-title">[React.js] React Hooks 란 무엇일까? (1)</div>
                        <div className="post-preview-date">2020.11.10</div>
                    </Link>
                    <Link to='/blog/2' className="post-preview-item">
                        <div className="post-preview-title current">[React.js] React Hooks 란 무엇일까? (1)</div>
                        <div className="post-preview-date">2020.11.10</div>
                    </Link>
                    <Link to='/blog/3' className="post-preview-item">
                        <div className="post-preview-title">[React.js] React Hooks 란 무엇일까? (1)</div>
                        <div className="post-preview-date">2020.11.10</div>
                    </Link>
                </div>
            </div>
            {/* comment - items - container */}
            <div className="comment-items-container">
                댓글 기능이 들어갈 위치입니다. - Disqus
                <img src={disqusSample} alt='' />
            </div>
            <div>전체 게시글 페이지네이션 이 들어갈 위치입니다.</div>
        </div>
    )
}
