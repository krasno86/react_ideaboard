import {arrToMap} from '../helpers'
import {LOAD_ALL_ARTICLES} from '../constants'
import {normalizedArticles} from '../fixtures'

// export default (articleState = {}, action) => {
//     const {type, payload, responce} = action
//
//     switch (type){
//         case LOAD_ALL_ARTICLES:
//             return arrToMap(responce)
//     }
//    return articleState
// }

export default (articleState = normalizedArticles, action) => {
// export default (articleState = {}, action) => {
    const {type, payload, responce} = action

    // switch (type){
    //     case LOAD_ALL_ARTICLES:
    //         return articleState
    // }
    return articleState
}