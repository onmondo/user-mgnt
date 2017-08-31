import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'

class User extends React.Component {

  constructor(props) {
    super(props)

    this.modalDeleteShow = this.modalDeleteShow.bind(this)
  }
  render() {
    const user = this.props.user
    return(
      <tr>
      <td><input type="checkbox" /></td>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.job}</td>
      <td>
          <a href={'/user-edit'+user.id}>
          <Button bsSize="xsmall">
            <Glyphicon glyph="edit" />
          </Button>
          </a>
      </td>
      <td>
        <Button bsSize="xsmall" 
                onClick={this.modalDeleteShow}>
          <Glyphicon glyph="remove" />
        </Button>
      </td>
    </tr>
    )
  }

  modalDeleteShow(event) {
    const { id, username } = this.props.user
    console.log(id, username)
    if (id || username) {
      this.props.dispatch({
        type: 'users.modalDeleteShow',
        id,
        username
      })
    }
  }

}

User.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default connect()(User)