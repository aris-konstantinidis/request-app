import { RequestsActionType }from '../action-types/requestsActionTypes'
import { RequestsActions } from '../actions/requestsActions'

export interface Request extends RequestDraft {
    _id: string,
    date: string,
    votes: number
}


export interface RequestDraft {
    name: string,
    title: string,
    description: string,
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


        // handle removal of requests
        case RequestsActionType.DELETE_REQUEST:
            return { loading: true, error: null, requests: state.requests }
        case RequestsActionType.DELETE_REQUEST_SUCCESS:
            return { loading: false, error: null, requests: state.requests.filter(item => item._id !== action.payload) }
        case RequestsActionType.DELETE_REQUEST_ERROR:
            return { loading: false, error: action.payload, requests: state.requests }


        // handle votes
        case RequestsActionType.VOTE_REQUEST:
            return { loading: true, error: null, requests: state.requests }
        case RequestsActionType.VOTE_REQUEST_SUCCESS:
            let index = state.requests.findIndex(item => item._id === action.payload.id)
            state.requests[index].votes = state.requests[index].votes + action.payload.vote
            return { loading: false, error: null, requests: state.requests }
        case RequestsActionType.VOTE_REQUEST_ERROR:
            return { loading: false, error: action.payload, requests: state.requests }

        // on initialization
        default:
            return state
    }

}

export default requestsReducer
