import {arrToMap} from '../helpers'
import {LOAD_ALL_ARTICLES} from '../constants'
import {Map, Record} from 'immutable'
// import {normalizedArticles} from '../fixtures'

const defaultState = new Record({
    id: undefined,
    title: undefined,
    text: undefined
    // comments: []
})

// export default (articleState = defaultState, action) => {
export default (articleState = [], action) => {
    const {type, payload, response} = action

    switch (type){
        case LOAD_ALL_ARTICLES:
            return arrToMap(response, defaultState)
            // return response
    }
   return articleState
}
