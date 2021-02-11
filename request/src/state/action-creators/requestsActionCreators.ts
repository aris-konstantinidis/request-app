import axios from 'axios'
import { DispatchProp } from 'react-redux'
import { Dispatch } from 'redux'
import { RequestsActionType } from '../action-types/requestsActionTypes'
import { RequestsActions } from '../actions/requestsActions'


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