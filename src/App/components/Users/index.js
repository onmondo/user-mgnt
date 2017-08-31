import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

import User from './User/index'
import Modal from './deleteModal'

class Users extends React.Component {
  
  render() {
    return(
      <div>
      <Table bordered hover responsive striped>
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>ID</th>
          <th>Username</th>
          <th>Job</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {this.props.users.map((user) => {
          return (
            <User key={user.id} user={user} />
          )
        })}
      </tbody>
    </Table>
    <Modal />
    </div>
    )
  }
}

// export the connected class
function mapStateToProps(state) {
  return ({
    users: state.users.list
  })
}

export default connect(mapStateToProps)(Users)