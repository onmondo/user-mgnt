import React from 'react'

import Users from './Users'

// App component
export default class App extends React.Component {

  render(){
    // render users
    return(
      <div className="container">
      <Users />
      </div>
    )
  }
}
