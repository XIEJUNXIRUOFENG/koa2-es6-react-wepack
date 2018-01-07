import { combineReducers } from 'redux'
import { SELECT_WEATHER, WEATHER_TABLE, BEIJING_WEATHER } from '../action/action'

function posts(state = {
	items: [], itemTable: [], beiJing: []
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
		case BEIJING_WEATHER:
			return Object.assign({}, state, {
				beiJing: action.beijingWeather,
			})
		default:
			return state
	}
}

function postsByWeather(state = { }, action) {
  switch (action.type) {
		case SELECT_WEATHER:
		case WEATHER_TABLE:
		case BEIJING_WEATHER:
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