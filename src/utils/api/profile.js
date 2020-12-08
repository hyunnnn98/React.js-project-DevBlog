import { SERVER_URL } from '../const'
import axios from 'axios'

// skill api
export function getSkills() {
    return axios.get(SERVER_URL + '/skill')
}

export function setSkill(skill_id, data) {
    return axios.post(SERVER_URL + `/skill/${skill_id}`, data)
}

export function deleteSkill({ skill_id }) {
    return axios.delete(SERVER_URL + `/skill/${skill_id}`)
}

// award api
export function getAwards() {
    console.log('get awawrds')
    return axios.get(SERVER_URL + '/award')
}

export function setAward(data) {
    return axios.post(SERVER_URL + '/award', data)
}

export function updateAward(award_id, data) {
    return axios.put(SERVER_URL + `/award/${award_id}`, data)
}

export function deleteAward(award_id) {
    return axios.delete(SERVER_URL + `/award/${award_id}`)
}

// project api
export function getProjects() {
    console.log('get project')
    return axios.get(SERVER_URL + '/project')
}

export function setProject(data) {
    return axios.post(SERVER_URL + '/project', data)
}

export function updateProject(project_id, data) {
    return axios.put(SERVER_URL + `/project/${project_id}`, data)
}

export function deleteProject(project_id) {
    return axios.delete(SERVER_URL + `/project/${project_id}`)
}
