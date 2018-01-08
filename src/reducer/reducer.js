import { combineReducers } from 'redux'
import { SELECT_WEATHER, WEATHER_TABLE, BEIJING_WEATHER, NANJING_WEATHER,SHANGHAI_WEATHER, GUANGZHOU_WEATHER, SHENZHEN_WEATHER, HANGZHOU_WEATHER, CHENGDU_WEATHER, SUZHOU_WEATHER, WENZHOU_WEATHER } from '../action/action'

function posts(state = {
	items: [], beiJing: [], nanJing: [], shangHai: [], guangZhou: [], shenZhen: [], hangZhou: [], chengDu: [], suZhou: [], wenZhou: []
}, action) {
	switch (action.type) {
		case SELECT_WEATHER:
			return Object.assign({}, state, {
				items: action.weatherDetail,
			})
		case BEIJING_WEATHER:
			return Object.assign({}, state, {
				beiJing: action.beijingWeather,
			})
		case NANJING_WEATHER:
			return Object.assign({}, state, {
				nanJing: action.nanjingWeather,
			})
		case SHANGHAI_WEATHER:
			return Object.assign({}, state, {
				shangHai: action.shanghaiWeather,
			})
		case GUANGZHOU_WEATHER:
			return Object.assign({}, state, {
				guangZhou: action.guangzhouWeather,
			})
		case SHENZHEN_WEATHER:
			return Object.assign({}, state, {
				shenZhen: action.shenzhenWeather,
			})
		case HANGZHOU_WEATHER:
			return Object.assign({}, state, {
				hangZhou: action.hangzhouWeather,
			})
		case CHENGDU_WEATHER:
			return Object.assign({}, state, {
				chengDu: action.chengduWeather,
			})
		case SUZHOU_WEATHER:
			return Object.assign({}, state, {
				suZhou: action.suzhouWeather,
			})
		case WENZHOU_WEATHER:
			return Object.assign({}, state, {
				wenZhou: action.wenzhzouWeather,
			})
		default:
			return state
	}
}

function postsByWeather(state = { }, action) {
  switch (action.type) {
		case SELECT_WEATHER:
		case BEIJING_WEATHER:
		case NANJING_WEATHER:
		case SHANGHAI_WEATHER:
		case SHENZHEN_WEATHER:
		case GUANGZHOU_WEATHER:
		case HANGZHOU_WEATHER:
		case CHENGDU_WEATHER:
		case SUZHOU_WEATHER:
		case WENZHOU_WEATHER:
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