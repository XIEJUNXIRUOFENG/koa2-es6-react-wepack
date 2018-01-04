import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Button } from 'antd';
import { fetchPostsIfNeeded } from '../action/action'

class CityWeather extends Component {
	constructor(props) {
		super(props)
	}

	// componentDidMount() {
  //   const { dispatch, selectWeatherDit } = this.props
  //   dispatch(fetchPostsIfNeeded(selectWeatherDit))
  // }

	getWeather = () => {
		const { dispatch } = this.props
    // 这里可以传两个值，一个是 reactjs 一个是 frontend
    dispatch(fetchPostsIfNeeded('city=110101&key=ecfbe66140f8ed4cc0bcbcf92b111074'))
	}

	// componentDidMount() {
  //   const { dispatch } = this.props
  //   // 这里可以传两个值，一个是 reactjs 一个是 frontend
  //   dispatch(fetchPostsIfNeeded('city=110101&key=ecfbe66140f8ed4cc0bcbcf92b111074'))
  // }

	componentWillReceiveProps(nextProps) {
   console.warn(nextProps)
  }

	render() {
		const { posts } = this.props
		console.log(posts);
		return (
			<div>
				<Button type="primary" onClick={this.getWeather}>点击获取天气</Button>
				{/* <div>{posts}</div> */}
			</div>
		)
	}
}

// CityWeather.propTypes = {
// 	// selectWeatherDit: PropTypes.object.isRequired,
//   // posts: PropTypes.array.isRequired,
//   // isFetching: PropTypes.bool.isRequired,
//   // lastUpdated: PropTypes.number,
//   // dispatch: PropTypes.func.isRequired
// }

function mapStateToProps(state) {
	const { postsByWeather } = state
  // const {
  //   isFetching,
  //   lastUpdated,
  //   items: posts
  // } = postsByWeather[selectedWeatherDit] || {
  //   isFetching: true,
  //   items: []
	// }
	const {

    items: posts

  } = postsByWeather['city=110101&key=ecfbe66140f8ed4cc0bcbcf92b111074'] || {
    items: []
  }

  return {
    posts
    // posts,
    // isFetching,
    // lastUpdated
  }
}

export default connect(mapStateToProps)(CityWeather);