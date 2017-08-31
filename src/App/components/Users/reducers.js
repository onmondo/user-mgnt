import { reducerCall } from '../../reducers'
export default function users(state = {}, action) {
  return reducerCall(state, action, UserReducer)
}

class UserReducer {
  static modalDeleteShow(newState, action) {
    newState.modal = newState.modal ? newState.modal : {}
    newState.modal.list_delete = {
      show: true,
      id: action.id,
      username: action.username
    }
    return newState    
  }

  static modalDeleteHide(newState, action) {
    newState.modal.list_delete = {
      show: false,
      id: 0,
      username: ''
    }
    return newState
  }

  static delete(newState, action) {
    newState = {
      list: newState.list.filter((user) => {
        return user.id !== action.id
      }),
      modal: {
        list_delete: {
          show: false,
          id: 0,
          username: ''
        }
      }
    }

    return newState    
  }
}