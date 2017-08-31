import { combineReducers } from 'redux'

import users from './components/Users/reducers'

export const reducers = combineReducers({
  users
})

export function reducerCall(state, action, reducerClass) {
  
  // get action class method
  const [, method] = action.type.split('.')

  // get all class method
  const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
    if ('length' !== name && 'name' !== name && 'prototype' !== name) {
      return name
    }
  })

  // check if the action method exists in the static class
  if (methods.find(x => x === method)) {
    // clone the state
    const newState = cloneObject(state)

    // return static method
    return reducerClass[method](newState, action)
  } else {
    // there's no valid action, so just return the state
    return state
  }
}

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object))
}