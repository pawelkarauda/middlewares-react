import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from 'reducers'
import async from 'middlewares/async'
import stateValidator from 'middlewares/stateValidator'

export default ({ children, initialState = {} }) => {
  
  return (
    <Provider 
      store={createStore(reducers, initialState,
        applyMiddleware(async, stateValidator))}>
      { children }
    </Provider>
  )
}