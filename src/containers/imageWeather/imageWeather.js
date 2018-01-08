import React, { Component } from 'react'
import BeijingChartWeather from './beijingChartWeather'
import NanjingChartWeather from './nanjingChartWeather'
import '../../theme/imageWeather.less';

class ImageWeather extends Component {

  render () {
    return (
      <div className='image-weather'>
        <div className='top-chart-weather'>
          <BeijingChartWeather />
          <NanjingChartWeather />
        </div>
      </div>
    )
  }
}

export default ImageWeather;