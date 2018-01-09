import React, { Component } from 'react'
import { Select } from 'antd'
import BeijingChartWeather from './beijingChartWeather'
import ShanghaiChartWeather from './shanghaiChartWeather'
import GuangzhouChartWeather from './guangzhouChartWeather'
import ShenzhenChartWeather from './shenzhenChartWeather'
import HangzhouChartWeather from './hangzhouChartWeather'
import ChenduChartWeather from './chenduChartWeather'
import SuzhouChartWeather from './suzhouChartWeather'
import NanjingChartWeather from './nanjingChartWeather'
import WenzhouChartWeather from './wenzhouChartWeather'
import '../../theme/imageWeather.less';

const CityDict = { "北京": <BeijingChartWeather />, "上海": <ShanghaiChartWeather />, "广州": <GuangzhouChartWeather />, 
"深圳": <ShenzhenChartWeather />, "杭州": <HangzhouChartWeather />, "成都": <ChenduChartWeather />, "苏州": <SuzhouChartWeather />, 
"南京": <NanjingChartWeather />, "温州": <WenzhouChartWeather /> }

// 下拉选择框
const Option = Select.Option



class ImageWeather extends Component { 

  constructor() {
    super()
    this.state = {
      city: "北京",
    }
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
    this.setState({city: value}); 
  }
  render () {
    return (
      <div className='image-weather'>
        <div className='top-chart-weather'>
          {CityDict[this.state.city]}
          <Select defaultValue="北京" style={{ width: 120 }} onChange={this.handleChange}>
            <Option value="北京">北京</Option>
            <Option value="上海">上海</Option>
            <Option value="广州">广州</Option>
            <Option value="深圳">深圳</Option>
            <Option value="杭州">杭州</Option>
            <Option value="成都">成都</Option>
            <Option value="苏州">苏州</Option>
            <Option value="南京">南京</Option>
            <Option value="温州">温州</Option>
          </Select>
        </div>
      </div>
    )
  }
}

export default ImageWeather;