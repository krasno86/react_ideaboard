import axios from 'axios'

export default store => next => action => {
    const {callAPI} = action
    if (!callAPI) return next(action)

    fetch(callAPI)
        .then(res => res.json())
        .then(response => next({...action, response}))

    // axios.get('http://localhost:3001/api/v1/ideas')
    //     .then(response => next({...action, responce}))
    //     .catch(error => console.log(error))
}
