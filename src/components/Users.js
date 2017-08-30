import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

import User from './User'
import UserDeleteModal from './UserDeleteModal'

class Users extends React.Component {
  
  constructor(props) {
    super(props)

    // this.modalDeleteShow = this.modalDeleteShow.bind(this)
  }

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
    <UserDeleteModal />
    </div>
    )
  }

  // modalDeleteShow(event) {
  //   const user_id = Number(event.target.dataset.id)
  //   const username = event.target.dataset.username
  //   if (user_id || username) {
  //     this.props.dispatch({
  //       type: 'users.modalDeleteShow',
  //       id: user_id,
  //       username
  //     })
  //   }
  // }  
}

// export the connected class
function mapStateToProps(state) {
  return ({
    users: state.users.list
  })
}

export default connect(mapStateToProps)(Users)