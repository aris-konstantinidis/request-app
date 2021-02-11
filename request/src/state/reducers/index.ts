import { combineReducers } from 'redux'
import requestsReducer from './requestReducer'

const reducers = combineReducers({
    requests: requestsReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>
