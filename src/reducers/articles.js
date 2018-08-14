import {arrToMap} from '../helpers'
import {LOAD_ALL_ARTICLES} from '../constants'

export default (articleState = {}, action) => {
    const {type, payload, responce} = action

    switch (type){
        case LOAD_ALL_ARTICLES:
            return arrToMap(responce)
    }

}