import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducer/reducer'

// const loggerMiddleware = createLogger()

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware,
//   loggerMiddleware
// )(createStore)

// export default function configureStore(initialState) {
//   return createStoreWithMiddleware(rootReducer, initialState)
// }

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore)

//  [redux-thunk]里的action可以是一个函数，用来发起异步请求。
//  [redux-promise]里的action可以是一个promise对象，用来更优雅的进行异步操作。

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer/reducer', () => {
      const nextRootReducer = require('./reducer/reducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
