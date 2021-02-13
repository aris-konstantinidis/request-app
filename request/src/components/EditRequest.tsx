import { Request } from '../state/reducers/requestReducer'
import { useDispatch } from 'react-redux'
import { requestsActionCreators } from '../state'
import { useState } from 'react'
import RequestFooter from './RequestFooter'
import {Props} from './SingleRequest'

const SingleRequest = ({setEditable, item}: Props) => {
    const [newTitle, setTitle] = useState(item.title)
    const [newDescription, setDescription] = useState(item.description)

    const dispatch = useDispatch()
    const handleEdit = () => {
        dispatch(requestsActionCreators.editRequest(item._id, newTitle, newDescription))
        setEditable('')
    }


    return <div className="shadow border m-4 p-4">
            <h4><input className="form-control" onChange={(e) => setTitle(e.target.value)} value={newTitle}/></h4>
            <p className="text-muted">by {item.name} on {item.date}</p>
            <p><textarea className="form-control" onChange={(e) => setDescription(e.target.value)} value={newDescription}></textarea></p>
            <button onClick={handleEdit} className="btn border btn-light mb-3">&#128190; Save</button>
            <RequestFooter setEditable={setEditable} item={item} />
    </div>
}

export default SingleRequest