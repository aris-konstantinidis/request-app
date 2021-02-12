import { Request } from '../state/reducers/requestReducer'
import { useDispatch } from 'react-redux'
import { requestsActionCreators } from '../state'

export const SingleRequest = ({name, title, description, date, votes, _id}: Request) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(requestsActionCreators.deleteRequest(_id))
    }
    const handleVote = (vote: number) => {
        console.log(vote)
        dispatch(requestsActionCreators.voteRequest(_id, vote))
    }
    
    
    return <div className="shadow border m-4 p-4">
        <h4>{title}</h4>
        <p className="text-muted">by {name} on {date}</p>
        <p>{description}</p>
        <div className="w-100">
            <button onClick={() => handleVote(1)} className="btn btn-light border mr-2">&#128077;</button>
            <button onClick={() => handleVote(-1)} className="btn btn-light border mr-2">&#128078;</button>
            <span>{votes} <span className="text-muted small">points</span></span>
            <button onClick={handleRemove} className="btn btn-light border float-right">&#10060; Delete</button>
        </div>
    </div>
}