import { RequestsActionType } from '../action-types/requestsActionTypes'
import { Request } from '../reducers/requestReducer'

interface FetchRequestsAction {
    type: RequestsActionType.FETCH_REQUESTS
}

interface FetchRequestsSuccessAction {
    type: RequestsActionType.FETCH_REQUESTS_SUCCESS,
    payload: Request[]
}

interface FetchRequestsErrorAction {
    type: RequestsActionType.FETCH_REQUESTS_ERROR,
    payload: string
}

export type RequestsActions = FetchRequestsAction | FetchRequestsSuccessAction | FetchRequestsErrorAction
