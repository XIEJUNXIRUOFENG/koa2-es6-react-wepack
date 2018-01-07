import fetch from 'isomorphic-fetch'

export const SELECT_WEATHER = 'SELECT_WEATHER'

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
    weatherDetail: json.lives,
  }
}

function fetchPosts(message, actionType) {
	return function (dispatch) {
		return fetch(`http://restapi.amap.com/v3/weather/weatherInfo?${message}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(message, json, actionType)))
  }
}