import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';

// models
import { postsData, foldersData } from '../../models/post'
import { API_BLOG } from '../../utils/api'

// styles
import './blog.css'

// components
import BlogRightContainer from '../../components/BlogRightContainer'
import PostPage from './PostPage'
import PostList from './PostList'

const BlogPage = (props) => {
    // 데이터 집단 관리
    const [posts, setPosts] = useState(postsData)
    const [folders, setFolders] = useState(null)
    // 선택된 데이터 관리
    const [postInfo, setPostInfo] = useState({ id: null, content: null })
    const [folderInfo, setFolderInfo] = useState({ id: null, title: null })

    const { match: { path } } = props

    useEffect(() => {
        // 폴더 불러오기
        async function setData(setFolders, setPosts) {
            const { data: foldersData } = await API_BLOG.getCategories();
            setFolders(foldersData.info)
            const { data: postsData } = await API_BLOG.getAllPosts();
            setPosts(postsData.info)
        }

        setData(setFolders, setPosts)
    }, [])

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
    }, [path])

    return (
        <div className="blog-container">

            <div className="blog-left-container">
                <Route exact path='/blog' render={() => <PostList posts={posts} />} />
                <Route path='/blog/:post_id' render={() => <PostPage folder={folderInfo} />} />
            </div>
            { folders ?
                <BlogRightContainer
                    folder={folderInfo}
                    setFolder={setFolderInfo}
                    folders={folders}
                /> : null
            }
        </div>
    )
}

export default BlogPage