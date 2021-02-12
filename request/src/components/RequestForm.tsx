import { useState } from "react"
import { useDispatch } from 'react-redux'
import { requestsActionCreators } from '../state'


const RequestForm: React.FC = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setName('')
        setTitle('')
        setDescription('')
        e.preventDefault()
        dispatch(requestsActionCreators.postRequest({name, title, description}))
    } 

    return (<form onSubmit={handleSubmit} className="shadow border m-4 mb-4 p-4">
        <h5 className="mb-3">Request Form</h5>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>
        </div>
        <button className="btn border btn-light" disabled={!Boolean(name) || !Boolean(title) || !Boolean(description)}>&#9997; Submit</button>
    </form>)
}

export default RequestForm