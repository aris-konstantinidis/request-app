import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { requestsActionCreators } from '../state'
import { useTypedSelector } from '../hooks/useTypedSelector'
import {SingleRequest} from './SingleRequest'

const RequestsList: React.FC = () => {
    
    // dispatch the fetch-requests action creator on component mount
    const dispatch = useDispatch()
    
    // get access to the store 
    const { requests, loading, error } = useTypedSelector((state) => state.requests)

    useEffect(() => {
        dispatch(requestsActionCreators.fetchRequests())
    }, [])

    
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {requests && requests.map((item) => {
                return <SingleRequest key={item._id} {...item} />
            })}
        </div>
    )
}

export default RequestsList