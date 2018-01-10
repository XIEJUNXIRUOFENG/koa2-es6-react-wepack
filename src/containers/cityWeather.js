import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { selectWeather } from '../action/action'
import { SELECT_WEATHER } from '../action/action'
import '../theme/cityWeather.less'

class CityWeather extends Component {
	constructor(props) {
		super(props)
  }
  
	componentWillReceiveProps(nextProps) {
  }

	render() {
		return (
			<div className="city-weather">
				<div className="city-container">
					<div className="img img01"></div>
					<div className="img img02"></div>
					<div className="img img03"></div>
					<div className="img img04"></div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  const { postsByWeather } = state
	const weatherDetail = postsByWeather[SELECT_WEATHER] ? postsByWeather[SELECT_WEATHER]['items']['lives'][0] : []

  return {
    weatherDetail
  }
}

export default connect(mapStateToProps)(CityWeather);