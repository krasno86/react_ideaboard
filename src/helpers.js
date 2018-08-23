export function arrToMap(arr) {
    return arr.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, {})
}

// const commentMap = normalizedComments.reduce((acc, comment) => {
//     return acc.set(comment.id, comment)
// }, new Map())