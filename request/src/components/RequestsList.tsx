import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { requestsActionCreators } from '../state'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { request } from "http";

const RequestsList: React.FC = () => {
    
    // dispatch the fetch-requests action creator on component mount
    const dispatch = useDispatch()
    
    // get access to the store 
    const { requests, loading, error } = useTypedSelector((state) => state.requests)

    useEffect(() => {
        dispatch(requestsActionCreators.fetchRequests())
    }, [])
    
    return <div className="p-5">
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {!loading && !error && requests.map((item) => <div key={item.name} className="shadow border mb-4 p-3">
                <h5>{item.title}</h5>
                <p className="text-muted small mb-2">by {item.name}</p>
                <pre>{item.description}</pre>
            </div> )}
    </div>
}

export default RequestsList