import fetch from 'isomorphic-fetch'

export const SELECT_WEATHER = 'SELECT_WEATHER'
export const WEATHER_TABLE = 'WEATHER_TABLE'

export function selectWeather(message) {
  let actionType = SELECT_WEATHER
  return (dispatch, getState) => {
      return dispatch(fetchPosts(message, actionType))
  }
}

export function weatherTable(message) {
  let actionType = WEATHER_TABLE
  return (dispatch, getState) => {
      return dispatch(fetchPosts(message, actionType))
  }
}

function receivePosts(message, json, actionType) {
  return {
    type: actionType,
    message,
    weatherDetail: json,
    weatherTable: json
  }
}

function fetchPosts(message, actionType) {
	return function (dispatch) {
		return fetch(`http://restapi.amap.com/v3/weather/weatherInfo?${message}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(message, json, actionType)))
  }
}