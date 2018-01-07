import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducer/reducer'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  if (module.hot) {
    module.hot.accept('./reducer/reducer', () => {
      const nextRootReducer = require('./reducer/reducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
