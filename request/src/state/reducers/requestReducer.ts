import { RequestsActionType }from '../action-types/requestsActionTypes'
import { RequestsActions } from '../actions/requestsActions'

export interface Request {
    name: string,
    title: string,
    description: string,
    _id?: string,
    date?: string
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

        // handle fetch requests from server
        case RequestsActionType.FETCH_REQUESTS:
            return { loading: true, error: null, requests: [] }    
        case RequestsActionType.FETCH_REQUESTS_SUCCESS:
            return { loading: false, error: null, requests: action.payload }
        case RequestsActionType.FETCH_REQUESTS_ERROR:
            return { loading: false, error: action.payload, requests: [] }

        // handle new requests
        case RequestsActionType.POST_REQUEST:
            return { loading: true, error: null, requests: state.requests }
        case RequestsActionType.POST_REQUEST_SUCCESS: 
            return { loading: false, error: null, requests: [...state.requests, action.payload]}
        case RequestsActionType.POST_REQUEST_ERROR:
            return { loading: false, error: action.payload, requests: state.requests }


        // on initialization
        default:
            return state
    }

}

export default requestsReducer
