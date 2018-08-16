import {INCREMENT, LOAD_ALL_ARTICLES} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

const loadAllArticles =  () => {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: 'http://localhost:3001/api/v1/articles'
    }
}

export {loadAllArticles};

// export function loadAllArticles() {
//     return {
//         type: LOAD_ALL_ARTICLES,
//         callAPI: 'http://localhost:3001/api/v1/articles'
//     }
// }
