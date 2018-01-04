import fetch from 'isomorphic-fetch'

export const SELECT_WEATHER = 'SELECT_WEATHER'
// export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
// export const INVALIDATE_SUBREDDIT  = 'INVALIDATE_SUBREDDIT'

// export function selectWeather(message) {
// 	console.warn('dispatch')
// 	return {
// 		type: SELECT_WEATHER,
// 		message
// 	}
// }

// export function invalidateSubreddit(message) {
//   return {
//     type: INVALIDATE_SUBREDDIT ,
//     message
//   }
// }

// function requestPosts(message) {
// 	return {
// 		type: REQUEST_POSTS,
// 		message
// 	}
// }

function receivePosts(message, json) {
  return {
    type: RECEIVE_POSTS,
    message,
    posts: json.lives,
    // receivedAt: Date.now()
  }
}

function fetchPosts(message) {
	console.warn('发送请求')
	return function (dispatch) {
  // return dispatch => {
  //   dispatch(requestPosts(message))
		// return fetch(`http://restapi.amap.com/v3/weather/weatherInfo?${message}`)
		return fetch(`http://restapi.amap.com/v3/weather/weatherInfo?${message}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(message, json)))
  }
}

// function shouldFetchPosts(state, message) {
//   const posts = state.postsByWeather[message]
//   if (!posts) {
//     return true
//   } else if (posts.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }

export function fetchPostsIfNeeded(message) {
  return (dispatch, getState) => {
    // if (shouldFetchPosts(getState(), message)) {
      return dispatch(fetchPosts(message))
    // }
  }
}