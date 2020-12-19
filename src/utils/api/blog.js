import { SERVER_URL } from '../const'
import axios from 'axios'

// blog api
export function getCategories() {
    return axios.get(SERVER_URL + '/category')
}

export function setCategory(data) {
    return axios.post(SERVER_URL + `/category`, data)
}

export function getAllPosts() {
    return axios.get(SERVER_URL + `/post/`)
}

export function getPost(postId) {
    return axios.get(SERVER_URL + `/post/${postId}`)
}

export function setPost(data) {
    return axios.post(SERVER_URL + `/post`, data)
}
