import fetch from 'isomorphic-fetch'

export const SELECT_WEATHER = 'SELECT_WEATHER'
export const BEIJING_WEATHER = 'BEIJING_WEATHER'
export const NANJING_WEATHER = 'NANJING_WEATHER'
export const SHANGHAI_WEATHER = 'SHANGHAI_WEATHER'
export const GUANGZHOU_WEATHER = 'GUANGZHOU_WEATHER'
export const SHENZHEN_WEATHER = 'SHENZHEN_WEATHER'
export const HANGZHOU_WEATHER = 'HANGZHOU_WEATHER'
export const CHENGDU_WEATHER = 'CHENGDU_WEATHER'
export const SUZHOU_WEATHER = 'SUZHOU_WEATHER'
export const WENZHOU_WEATHER = 'WENZHOU_WEATHER'

export function allCityWeather(message, actionType) {
  return (dispatch, getState) => {
      return dispatch(fetchPosts(message, actionType))
  }
}

export function selectWeather(message) {
  let actionType = SELECT_WEATHER
  return (dispatch, getState) => {
      return dispatch(fetchPosts(message, actionType))
  }
}

function receivePosts(message, json, actionType) {
  return {
    type: actionType,
    message,
    weatherDetail: json,
    beijingWeather: json,
    nanjingWeather: json,
    shanghaiWeather: json,
    guangzhouWeather: json,
    shenzhenWeather: json,
    hangzhouWeather: json,
    chengduWeather: json,
    suzhouWeather: json,
    wenzhzouWeather: json,
  }
}

function fetchPosts(message, actionType) {
	return function (dispatch) {
		return fetch(`http://restapi.amap.com/v3/weather/weatherInfo?${message}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(message, json, actionType)))
  }
}