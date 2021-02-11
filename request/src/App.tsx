import React from 'react'
import RequestForm from './components/RequestForm'
import RequestsList from './components/RequestsList'
import { Provider } from 'react-redux'
import { store } from './state'

const App = () => {
  return <Provider store={store}>


    <div className="row m-0 p-5">
      <div className="col-3 p-0 m-0">
        <RequestForm />
      </div>
      <div className="col-9 p-0 m-0">
        <RequestsList />
      </div>
    </div>




  </Provider> 
}

export default App
