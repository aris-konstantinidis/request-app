import { Request } from '../state/reducers/requestReducer'
import { useDispatch } from 'react-redux'
import { requestsActionCreators } from '../state'
import {Props} from './SingleRequest'
import { useState } from 'react'

const RequestFooter = ({setEditable, item}: Props) => {
    const [active, setActive] = useState(true)
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(requestsActionCreators.deleteRequest(item._id))
    }
    const handleVote = (vote: number) => {
        if (localStorage.getItem(item._id)) return false
        localStorage.setItem(`${item._id}`, 'true')
        dispatch(requestsActionCreators.voteRequest(item._id, vote))
    }
    
    const handleEdit = () => {
        setActive(!active)
        if (active) {
            return setEditable(item._id)
        }
        return setEditable('')
    }


    return <div className="w-100">
    <button onClick={() => handleVote(1)} className="btn btn-light border mr-2">&#128077;</button>
    <button onClick={() => handleVote(-1)} className="btn btn-light border mr-2">&#128078;</button>
    <span>{item.votes} <span className="text-muted small">points</span></span>
    <button onClick={handleRemove} className="btn btn-light border float-right">&#10060; Delete</button>
    <button onClick={handleEdit} className="btn btn-light border float-right mr-2">&#128221; Edit</button>
</div>
}

export default RequestFooter