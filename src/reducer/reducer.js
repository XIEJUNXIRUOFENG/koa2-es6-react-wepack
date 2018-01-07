import { combineReducers } from 'redux'
import { SELECT_WEATHER, WEATHER_TABLE } from '../action/action'

function posts(state = {
	items: [], itemTable: []
}, action) {
	switch (action.type) {
		case SELECT_WEATHER:
			return Object.assign({}, state, {
				items: action.weatherDetail,
			})
		case WEATHER_TABLE:
			return Object.assign({}, state, {
				itemTable: action.weatherTable,
			})
		default:
			return state
	}
}

function postsByWeather(state = { }, action) {
  switch (action.type) {
		case SELECT_WEATHER:
		case WEATHER_TABLE:
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