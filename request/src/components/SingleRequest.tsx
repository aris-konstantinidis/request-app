import { Request } from '../state/reducers/requestReducer'
import { useDispatch } from 'react-redux'
import { requestsActionCreators } from '../state'

interface Props {
    log(id: string): void,
    item: Request
}

export const SingleRequest = ({log, item}: Props) => {

    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(requestsActionCreators.deleteRequest(item._id))
    }
    const handleVote = (vote: number) => {
        if (localStorage.getItem(item._id)) return false
        localStorage.setItem(`${item._id}`, 'true')
        dispatch(requestsActionCreators.voteRequest(item._id, vote))
    }
    
    const handlePropFunction = (id: string) => {
        log(id)
    }
    
    return <div className="shadow border m-4 p-4">
        <h4>{item.title}</h4>
        <p className="text-muted">by {item.name} on {item.date}</p>
        <p>{item.description}</p>
        <div className="w-100">
            <button onClick={() => handleVote(1)} className="btn btn-light border mr-2">&#128077;</button>
            <button onClick={() => handleVote(-1)} className="btn btn-light border mr-2">&#128078;</button>
            <span>{item.votes} <span className="text-muted small">points</span></span>
            <button onClick={handleRemove} className="btn btn-light border float-right">&#10060; Delete</button>
            <button onClick={() => handlePropFunction(item._id)} className="btn btn-light border float-right mr-2">&#128221; Edit</button>
        </div>
    </div>
}