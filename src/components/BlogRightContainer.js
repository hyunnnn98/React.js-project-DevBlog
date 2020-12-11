import React, { useState, useEffect } from 'react'

import squre_plus from '../styles/img/square_plus_icon_gray.png'
import no_thumb_img from '../styles/img/no_thumb_img.png'

// import components
import ProfileInfo from './ProfileInfo'

const BlogRightContainer = (props) => {
    const [count, setCount] = useState(0)
    const [newPosts, setNewPosts] = useState([
        { id: 1, title: 'React Hooks 란 무엇일 ...', url: 'http://localhost:3001/', thumb: null },
        { id: 2, title: 'Github는 이것만 알면 다 ...', url: 'http://localhost:3001/', thumb: null },
        { id: 3, title: 'React Hooks 란 무엇일 ...', url: 'http://localhost:3001/', thumb: null }
    ])

    const { folders, folder } = props
    console.log(folder)
    useEffect(() => {
        let postsCount = 0
        folders && folders.map(v => postsCount += v.posts)
        setCount(postsCount)
    }, [])

    const handleClick = (data) => {
        props.setFolder({
            id: data.id,
            title: data.title
        })
    }

    return (
        <div className="blog-right-container">
            <ProfileInfo />
            <div className="search-container">
                <input placeholder="검색기능을 이용해보세요!" />
            </div>
            <div className="category-container">
                <div>카테고리</div>
                <div className={folder.id === null ? 'current' : null}>
                    <span onClick={() => props.setFolder({ id: null, title: null })} className="category-post-title">
                        All Categories
                    </span>
                    <span className="category-post-count">({count})</span>
                </div>
                <div className="category-main-container">
                    {
                        folders && folders.map((item, index) => (
                            <div className={folder.id === item.id ? 'current' : null} key={index}>

                                <span className="category-post-title" onClick={() => handleClick(item)}>
                                    <img src={squre_plus} alt='' />{item.title}
                                </span>
                                <span className="category-post-count">({item.posts})</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="new-poster-container">
                <div>최신글</div>
                {
                    newPosts.map(v =>
                        <div key={v.id}>
                            <img src={v.thumb ? v.thumb : no_thumb_img} />
                            {v.title}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default BlogRightContainer