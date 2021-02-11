import { RequestsActionType }from '../action-types/requestsActionTypes'
import { RequestsActions } from '../actions/requestsActions'

export interface Request {
    name: string,
    title: string,
    description: string
}

interface RequestsState {
    loading: boolean,
    error: string | null,
    requests: Request[]
}

const initialState = {
    loading: false,
    error: null,
    requests: []
}


const requestsReducer = (state: RequestsState = initialState, action: RequestsActions): RequestsState => {

    switch (action.type) {

        case RequestsActionType.FETCH_REQUESTS:
            return { loading: true, error: null, requests: [] }    

        case RequestsActionType.FETCH_REQUESTS_SUCCESS:
            return { loading: false, error: null, requests: action.payload }
    
        case RequestsActionType.FETCH_REQUESTS_ERROR:
            return { loading: false, error: action.payload, requests: [] }
        default:
            return state
    }

}

export default requestsReducer
