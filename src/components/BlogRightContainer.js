import React, { useState, useEffect } from 'react'

import squre_plus from '../styles/img/square_plus_icon_gray.png'
import no_thumb_img from '../styles/img/no_thumb_img.png'

// import components
import ProfileInfo from './ProfileInfo'

const BlogRightContainer = (props) => {
    const [folder, setFolder] = useState([
        { folderName: 'React.js', count: 11 },
        { folderName: 'ReactNative.js', count: 26 },
        { folderName: 'Vue.js', count: 31 },
        { folderName: 'Laravel', count: 22 }
    ])
    const [newPosts, setNewPosts] = useState([
        { id: 1, title: 'React Hooks 란 무엇일 ...', url: 'http://localhost:3001/', thumb: null },
        { id: 2, title: 'Github는 이것만 알면 다 ...', url: 'http://localhost:3001/', thumb: null },
        { id: 3, title: 'React Hooks 란 무엇일 ...', url: 'http://localhost:3001/', thumb: null }

    ])
    const [count, setCount] = useState(0)

    useEffect(() => {
        let postsCount = 0
        folder.map(v => postsCount += v.count)
        setCount(postsCount)
    }, [folder])

    return (
        <div className="blog-right-container">
            <ProfileInfo />
            <div className="search-container">
                <input placeholder="검색기능을 이용해보세요!" />
            </div>
            <div className="category-container">
                <div>카테고리</div>
                <div>All Categories<span className="category-post-count">({count})</span></div>
                <div className="category-main-container">
                    {
                        folder.map((item, index) => (
                            <div key={index}>
                                <img src={squre_plus} alt='' />
                                {item.folderName}
                                <span className="category-post-count">({item.count})</span>
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