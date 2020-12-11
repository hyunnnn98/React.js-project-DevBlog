import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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
                <Link to={`/blog/${v.id}`}>{v.title}</Link>
                <div className="post-right-content">{v.content}</div>
                <div className="post-right-created">{v.created_at}</div>
            </div>
        </div>
    )
}

const BlogPage = (props) => {
    const [isBlogPage, setIsBlogPage] = useState(true)
    const [posts, setPosts] = useState(postsData)
    const [folders, setFolders] = useState(foldersData)

    const { postId } = props.match.params;

    useEffect(() => {
        console.log(typeof (page_id))
        setIsBlogPage(postId && typeof (Number(postId)) === 'number' ? false : true)
        window.scrollTo(0, 0)
    }, [postId])

    return (
        <div className="blog-container">
            <div className="blog-left-container">
                {
                    isBlogPage ?
                        <PostList posts={posts} /> : <PostPage />
                }
            </div>
            <BlogRightContainer folders={folders} />
        </div>
    )
}

export default BlogPage