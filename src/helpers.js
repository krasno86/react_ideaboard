import {Map} from 'immutable'

export function arrToMap(arr, DataRecord = Map) {
    return arr.reduce((acc, item) =>
        acc.set(item.id, new DataRecord(item))
    , new Map({}))
}

// const commentMap = normalizedComments.reduce((acc, comment) => {
//     return acc.set(comment.id, comment)
// }, new Map())