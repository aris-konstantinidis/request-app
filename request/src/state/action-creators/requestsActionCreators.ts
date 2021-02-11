import axios from 'axios'
import { DispatchProp } from 'react-redux'
import { Dispatch } from 'redux'
import { RequestsActionType } from '../action-types/requestsActionTypes'
import { RequestsActions } from '../actions/requestsActions'
import { Request } from '../reducers/requestReducer'


export const fetchRequests = () => { // async --> thunk
    return async (dispatch: Dispatch<RequestsActions>) => {
        // directly dispatch the fetch requests action
        dispatch({ type: RequestsActionType.FETCH_REQUESTS })

        try {
            const { data } = await axios.get("http://localhost:9000/requests")
            const requests  = data.map((request: any) => { // create the requests array 
                return request
            })
            // if everything ok dispatch the success action to the reducer
            dispatch({ type: RequestsActionType.FETCH_REQUESTS_SUCCESS, payload: requests })
        } catch (error) {
            // if something fails
            dispatch({ type: RequestsActionType.FETCH_REQUESTS_ERROR, payload: error.message })
        }
    }
}

export const postRequest = (request: Request) => { // also async --> thunk
    return async (dispatch: Dispatch<RequestsActions>) => {
        dispatch({ type: RequestsActionType.POST_REQUEST })
        
        try {
            const { data } = await axios.post("http://localhost:9000/request", request)
            dispatch({ type: RequestsActionType.POST_REQUEST_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: RequestsActionType.POST_REQUEST_ERROR, payload: error.message })
        }
    }
}