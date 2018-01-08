import React, { Component } from 'react'
import BeijingChartWeather from './beijingChartWeather'

class ImageWeather extends Component {

  render () {
    return (
      <div className='image-weather'>
        <BeijingChartWeather />
      </div>
    )
  }
}

export default ImageWeather;