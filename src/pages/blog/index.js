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
import { SignalCellularNullOutlined } from '@material-ui/icons';

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
    // 데이터 집단 관리
    const [posts, setPosts] = useState(postsData)
    const [folders, setFolders] = useState(foldersData)
    // 선택된 데이터 관리
    const [post, setPost] = useState({ id: null, content: null })
    const [folder, setFolder] = useState({ id: null, title: null })

    const { postId } = props.match.params;

    // 페이지 추적
    useEffect(() => {
        setIsBlogPage(postId && typeof (Number(postId)) === 'number' ? false : true)
        window.scrollTo(0, 0)
        if (postId && typeof (Number(postId)) === 'number') {
            // params 로 부터 받아온 게시글 id 로 
            // 1) 게시글 정보 조회
            // 2) 카테고리 정보 조회

            setFolder({ id: 1, title: 'React.js' })
            // setPost({ id: null, content: null })
            setIsBlogPage(false)
        } else {
            setPost({ id: null, content: null })
            setIsBlogPage(true)
        }
    }, [postId])

    return (
        <div className="blog-container">
            <div className="blog-left-container">
                {
                    isBlogPage ?
                        <PostList posts={posts} /> : <PostPage folder={folder} />
                }
            </div>
            <BlogRightContainer
                folder={folder}
                setFolder={setFolder}
                folders={folders}
            />
        </div>
    )
}

export default BlogPage