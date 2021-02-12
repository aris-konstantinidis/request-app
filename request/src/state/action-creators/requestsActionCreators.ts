import axios from 'axios'
import { DispatchProp } from 'react-redux'
import { Dispatch } from 'redux'
import { RequestsActionType } from '../action-types/requestsActionTypes'
import { RequestsActions } from '../actions/requestsActions'
import { RequestDraft } from '../reducers/requestReducer'


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

export const postRequest = (request: RequestDraft) => { // also async --> thunk
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


export const deleteRequest = (id: string) => { // also async --> thunk
    return async (dispatch: Dispatch<RequestsActions>) => {
        dispatch({ type: RequestsActionType.DELETE_REQUEST })
        
        try {
            const { data } = await axios.post("http://localhost:9000/delete-request", {id: id})
            if (data.n === 1 && data.ok === 1 && data.deletedCount === 1) {
                dispatch({ type: RequestsActionType.DELETE_REQUEST_SUCCESS, payload: id })
            } else {
                throw new Error('Could not remove request') // this will be attached to the message property of the error object and will fit the catch case
            }

        } catch (error) {
            dispatch({ type: RequestsActionType.DELETE_REQUEST_ERROR, payload: error.message })
        }
    }
}

export const voteRequest = (id: string, vote: number) => { // also async --> thunk
    return async (dispatch: Dispatch<RequestsActions>) => {
        dispatch({ type: RequestsActionType.VOTE_REQUEST })
        
        try {
            const { data } = await axios.post("http://localhost:9000/vote-request", {id, vote})
            if (data) {
                dispatch({ type: RequestsActionType.VOTE_REQUEST_SUCCESS, payload: {id, vote} })
            } else {
                throw new Error('Could not add vote') // this will be attached to the message property of the error object and will fit the catch case
            }

        } catch (error) {
            dispatch({ type: RequestsActionType.VOTE_REQUEST_ERROR, payload: error.message })
        }
    }
}