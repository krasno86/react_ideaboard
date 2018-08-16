import axios from 'axios'

export default store => next => action => {
    const {callAPI} = action;
    if (!callAPI) return next(action);

    // fetch(callAPI)
    //     .then(res => {
    //         console.log('000000000000000 --- Middlevare next',res)
    //         res
    //     })
    //     .then(response => {
    //         console.log('1111111 --- Middlevare next',response)
    //
    //         next({...action, response})
    //     })

    axios.get(callAPI)
        .then(res => res.data)
        .then(response => next({...action, response}))
}
