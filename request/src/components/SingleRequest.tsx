import { Request } from '../state/reducers/requestReducer'
 
export const SingleRequest = ({name, title, description, date}: Request) => {
    
 
    return <div className="shadow border p-4">
        <h5>{title}</h5>
        <p className="text-muted">by {name} on {date}</p>
        <pre>{description}</pre>
    </div>
}