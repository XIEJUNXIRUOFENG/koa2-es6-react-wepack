import React, { Component, propTypes } from 'react'
import { connect } from 'react-redux';
import {echarts} from '../../utils/echartsImport';
import { BEIJING_WEATHER, NANJING_WEATHER, SHANGHAI_WEATHER, GUANGZHOU_WEATHER, SHENZHEN_WEATHER,
     HANGZHOU_WEATHER, CHENGDU_WEATHER, SUZHOU_WEATHER, WENZHOU_WEATHER } from '../../action/action'

export const BusinessData = {
  market: [ 1, 2, 4, 8, 16, 32, 64, 128, 256 ]
};

class BeijingChartWeather extends Component {

  constructor(props) {
    super(props);
    this.options = {};
    this.chartIns = null;
  }

  static defaultProps = {
    style: {height: 400, width: 400},
    color: ['#dc6b35', '#fbff1e', '#7adc4e', '#25ba93'],
  };

  componentDidMount() {
    console.warn('char图', this.props)
    const {Beijing, color} = this.props
    let dateData = []
    let beijingDaytemp = []
    let beijingNighttemp = []
    Beijing.forEach((e, i) => {
      dateData[i] = e.date
      beijingDaytemp[i] = e.daytemp
      beijingNighttemp[i] = e.nighttemp
    })
    console.warn('X坐标', dateData)
    this.options.color = color
    this.options.series = [
      {
        name: '白天温度',
        type: 'line',
        data: beijingDaytemp
      },
      {
        name: '夜晚温度',
        type: 'line',
        data: beijingNighttemp
      }
    ];
    this.options.xAxis = {
      type: 'category',
      name: '日期',
      splitLine: {show: false},
      data: dateData
    },
    this.options.yAxis = {
      type: 'value',
      axisLabel: {
          formatter: '{value} °C'
      }
    },
    this.options.legend = {
      data: ['北京白天温度', '北京晚上温度']
    }
    this.chartIns = echarts.init(this.chartContainer);
    this.chartIns.setOption(this.options);
  }

  componentWillUnmount() {
    echarts.dispose(this.chartContainer);
  }

  render () {
    const props = {
      ref: ref => (this.chartContainer = ref),
      style: this.props.style
    };
    return (
      <div className='profile-pie'>
        <div {...props} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { postsByWeather } = state
  const Beijing = postsByWeather[BEIJING_WEATHER] ? postsByWeather[BEIJING_WEATHER]['beiJing']['forecasts'][0]['casts'] : []
  const Nanjing = postsByWeather[NANJING_WEATHER] ? postsByWeather[NANJING_WEATHER]['nanJing']['forecasts'][0]['casts'] : []
  const Shanghai = postsByWeather[SHANGHAI_WEATHER] ? postsByWeather[SHANGHAI_WEATHER]['shangHai']['forecasts'][0]['casts'] : []
  const Guangzhou = postsByWeather[GUANGZHOU_WEATHER] ? postsByWeather[GUANGZHOU_WEATHER]['guangZhou']['forecasts'][0]['casts'] : []
  const Shenzhen = postsByWeather[SHENZHEN_WEATHER] ? postsByWeather[SHENZHEN_WEATHER]['shenZhen']['forecasts'][0]['casts'] : []
  const Hangzhou = postsByWeather[HANGZHOU_WEATHER] ? postsByWeather[HANGZHOU_WEATHER]['hangZhou']['forecasts'][0]['casts'] : []
  const Chengdu = postsByWeather[CHENGDU_WEATHER] ? postsByWeather[CHENGDU_WEATHER]['chengDu']['forecasts'][0]['casts'] : []
  const Suzhou = postsByWeather[SUZHOU_WEATHER] ? postsByWeather[SUZHOU_WEATHER]['suZhou']['forecasts'][0]['casts'] : []
  const Wenzhou = postsByWeather[WENZHOU_WEATHER] ? postsByWeather[WENZHOU_WEATHER]['wenZhou']['forecasts'][0]['casts'] : []
  return {
      Beijing,
      Nanjing,
      Shanghai,
      Guangzhou,
      Shenzhen,
      Hangzhou,
      Chengdu,
      Suzhou,
      Wenzhou
  }
}

export default connect(mapStateToProps)(BeijingChartWeather);