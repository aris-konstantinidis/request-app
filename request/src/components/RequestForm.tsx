import { useState } from "react"


const RequestForm: React.FC = () => {

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
    } 

    return <form onSubmit={handleSubmit} className="shadow border mb-4 p-3">
        <h3 className="mb-3">Request Form</h3>
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
        <button className="btn btn-primary">Submit</button>
    </form>
}

export default RequestForm