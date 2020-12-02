import React, { useState } from 'react'
import './blog.css'

import post_thumb_1 from '../../styles/img/post_thumb_1.png'

import BlogRightContainer from '../../components/BlogRightContainer'

const BlogPage = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'React Hooks 란 무엇일까?',
            thumb: null,
            content: 'React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect 라고 한다. 화면 렌더링 반환 속도 ...',
            created_at: '2020. 11.01 21.33'
        },
        {
            id: 2,
            title: 'React Hooks 란 무엇일까?',
            thumb: null,
            content: 'React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect 라고 한다. 화면 렌더링 반환 속도 ...',
            created_at: '2020. 11.01 21.33'
        },
        {
            id: 3,
            title: 'React Hooks 란 무엇일까?',
            thumb: null,
            content: 'React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect 라고 한다. 화면 렌더링 반환 속도 ...',
            created_at: '2020. 11.01 21.33'
        },
        {
            id: 4,
            title: 'React Hooks 란 무엇일까?',
            thumb: null,
            content: 'React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect 라고 한다. 화면 렌더링 반환 속도 ...',
            created_at: '2020. 11.01 21.33'
        },
        {
            id: 5,
            title: 'React Hooks 란 무엇일까?',
            thumb: null,
            content: 'React 컴포넌트가 화면에 렌더링된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 Side Effect 라고 한다. 화면 렌더링 반환 속도 ...',
            created_at: '2020. 11.01 21.33'
        },
    ])

    return (
        <div className="blog-container">
            <div className="blog-left-container">
                {
                    posts.map(v =>
                        <div className="post-container" key={v.id}>
                            <div className="post-left-container">
                                <img src={post_thumb_1} alt='' />
                            </div>
                            <div className="post-right-container">
                                <div>{v.title}</div>
                                <div>{v.content}</div>
                                <div>{v.created_at}</div>
                            </div>
                        </div>
                    )
                }
            </div>
            <BlogRightContainer />
        </div>
    )
}

export default BlogPage