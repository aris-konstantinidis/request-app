import { Request } from '../state/reducers/requestReducer'
import RequestFooter from './RequestFooter'

export interface Props {
    setEditable(id: string): void,
    item: Request
}

const EditRequest = ({setEditable, item}: Props) => {

    
    
    return <div className="shadow border m-4 p-4">
        <h4>{item.title}</h4>
        <p className="text-muted">by {item.name} on {item.date}</p>
        <p>{item.description}</p>
        <RequestFooter setEditable={setEditable} item={item}/>
    </div>
}

export default EditRequest
