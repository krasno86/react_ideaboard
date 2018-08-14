import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import logger from '../middlewares/logger'
import api from '../middlewares/api'

const enhancer = applyMiddleware(api, logger)

const store = createStore(reducer, {}, enhancer)

window.store = store

export default store