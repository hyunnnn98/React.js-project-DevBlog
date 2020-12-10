import React, { useState } from 'react'

// models
import { postsData, foldersData } from '../../models/post'

// styles
import './blog.css'
import post_thumb_1 from '../../styles/img/post_thumb_1.png'

// components
import BlogRightContainer from '../../components/BlogRightContainer'
import PostPage from './PostPage'

const PostList = ({ posts }) => {
    return posts && typeof posts === "object" && posts.map(v =>
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

const BlogPage = () => {
    const [isBlogPage, setIsBlogPage] = useState(false)
    const [posts, setPosts] = useState(postsData)
    const [folders, setFolders] = useState(foldersData)

    return (
        <div className="blog-container">
            <div className="blog-left-container">
                {
                    isBlogPage ?
                        <PostList posts={posts} /> : <PostPage />
                }
                {/* {
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
                } */}
            </div>
            <BlogRightContainer folders={folders} />
        </div>
    )
}

export default BlogPage