import React from 'react'

// import modules
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';

import './write.css'

export default function AddPost() {
    return (
        <div className="write-container">
            게시글 작성 페이지 입니다.
            <div className="write-title-box">
                <div>제목</div>
                <input type="text" placeholder="게시글의 제목을 입력해주세요" />
            </div>
            <Editor
                initialValue="DEV HYUN에 새로운 지식을 공유해주세요!!"
                previewStyle="vertical"
                height="650px"
                initialEditType="markdown"
                useCommandShortcut={true}
                usageStatistics={false}
            />
        </div>
    )
}
