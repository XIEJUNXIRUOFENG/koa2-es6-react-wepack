import { combineReducers } from 'redux'
import { RECEIVE_POSTS } from '../action/action'

// function selectWeatherDit (state = {}, action) {
// 	console.warn('dit出发了')
// 	switch (action.type) {
// 		case SELECT_WEATHER:
// 			return action.message
// 		default:
// 			return state
// 	}
// }

function posts(state = {
	// isFetching: false,
	// didInvalidate: false,
	items: []
}, action) {
	switch (action.type) {
		// case INVALIDATE_SUBREDDIT :
		// 	return Object.assign({}, state, {
		// 		didInvalidate: true
		// 	})
		// case REQUEST_POSTS:
		// 	return Object.assign({}, state, {
		// 		isFetching: true,
		// 		didInvalidate: false
		// 	})
		case RECEIVE_POSTS:
			return Object.assign({}, state, {
				// isFetching: false,
				// didInvalidate: false,
				items: action.posts,
				// lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

function postsByWeather(state = { }, action) {
	console.warn(action)
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        [action.message]: posts(state[action.message], action)
      })
    default:
      return state
  }
}

const allApp = combineReducers({
	// selectWeatherDit,
	postsByWeather
})

export default allApp