import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import uuid from 'node-uuid'
import './stylesheets/main.scss'

import App from './Home/App'
import { reducers } from './Home/reducers'

// import 'react-lumberjack'

// auto-generate the user sample list
let users = []
for (let i=1; i<=10; i++) {
  users.push({
    id: uuid.v4(),
    username: `Johnny ${i}`,
    job: `Employee ${i}`
  })
}

const initial_state = {
  users: {
    list: users
  }
}

//create store
const store = createStore(reducers,
  initial_state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
)