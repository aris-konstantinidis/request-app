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


interface PostRequestAction {
    type: RequestsActionType.POST_REQUEST, // no payload as this acitons will just signify tha event to the reducer
}
interface PostRequestSuccessAction {
    type: RequestsActionType.POST_REQUEST_SUCCESS,
    payload: Request
}
interface PostRequestErrorAction {
    type: RequestsActionType.POST_REQUEST_ERROR
    payload: string
}




export type RequestsActions = FetchRequestsAction | FetchRequestsSuccessAction | FetchRequestsErrorAction |
    PostRequestAction | PostRequestSuccessAction | PostRequestErrorAction
