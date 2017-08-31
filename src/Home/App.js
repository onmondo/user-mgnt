import React from 'react'

import Users from './components/Users/index'

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
