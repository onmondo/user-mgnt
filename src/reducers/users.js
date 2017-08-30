export default function users(state = {}, action) {
  let newState
  switch(action.type) {
    case 'users.modalDeleteShow':
      newState = JSON.parse(JSON.stringify(state))
      newState.modal = newState.modal ? newState.modal : {}
      newState.modal.list_delete = {
        show: true,
        id: action.id,
        username: action.username
      }
      return newState

    case 'users.modalDeleteHide':
      newState = JSON.parse(JSON.stringify(state))
      newState.modal.list_delete = {
        show: false,
        id: 0,
        username: ''
      }
      return newState

    case 'users.delete':
      newState = JSON.parse(JSON.stringify(state))

      newState = {
        list: new_state.list.filter((user) => {
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
      
    default:
      return state
  }
}