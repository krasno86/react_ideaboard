import {INCREMENT, LOAD_ALL_ARTICLES} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: 'http://localhost:3001/api/v1/articles'
    }
}