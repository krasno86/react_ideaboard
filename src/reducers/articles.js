import {arrToMap} from '../helpers'
import {LOAD_ALL_ARTICLES} from '../constants'
// import {normalizedArticles} from '../fixtures'

export default (articleState = {}, action) => {
    const {type, payload, response} = action

    switch (type){
        case LOAD_ALL_ARTICLES:
            console.log('3333 === Articles Reducer - response', response)
            // return arrToMap(response)
            return response
    }
   return articleState
}

// export default (articleState = normalizedArticles, action) => {
//     const {type, payload, responce} = action
//     return articleState
// }