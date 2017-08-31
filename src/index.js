import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import uuid from 'node-uuid'
import './stylesheets/main.scss'

import App from './App/index'
import Users from './App/components/Users/index'
// import UserEdit from './pages/UserEdit'
import NotFound from './App/notFound'
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
// let middleware = applyMiddleware(routerMiddleware(browserHistory))
const store = createStore(reducers,
  initial_state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // middleware
)
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Users} />
        <Route path="user/:id" component={UserEdit} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router> */}
  </Provider>, 
  document.getElementById('app')
)