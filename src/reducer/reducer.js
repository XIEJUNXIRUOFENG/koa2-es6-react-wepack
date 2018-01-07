import { combineReducers } from 'redux'
import { SELECT_WEATHER } from '../action/action'

function posts(state = {
	items: []
}, action) {
	switch (action.type) {
		case SELECT_WEATHER:
			return Object.assign({}, state, {
				items: action.weatherDetail,
			})
		default:
			return state
	}
}

function postsByWeather(state = { }, action) {
  switch (action.type) {
    case SELECT_WEATHER:
      return Object.assign({}, state, {
        [action.type]: posts(state[action.type], action)
      })
    default:
      return state
  }
}

const allApp = combineReducers({
	postsByWeather
})

export default allApp