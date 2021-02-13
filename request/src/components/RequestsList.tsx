import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import { requestsActionCreators } from '../state'
import { useTypedSelector } from '../hooks/useTypedSelector'
import SingleRequest from './SingleRequest'
import EditRequest from './EditRequest'

const RequestsList: React.FC = () => {
    
    // dispatch the fetch-requests action creator on component mount
    const dispatch = useDispatch()
    const [editable, setEditable] = useState('')
    
    // get access to the store 
    const { requests, loading, error } = useTypedSelector((state) => state.requests)

    
    
    const requestsList = requests.map((item) => {
            if (item._id !== editable) {
                return <SingleRequest key={item._id} setEditable={setEditable} item={item} />
            }
            return <EditRequest key={item._id} setEditable={setEditable} item={item} />
        })
    
    useEffect(() => {
        dispatch(requestsActionCreators.fetchRequests())
    }, [])
    
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {requests && requestsList}
        </div>
    )
}

export default RequestsList