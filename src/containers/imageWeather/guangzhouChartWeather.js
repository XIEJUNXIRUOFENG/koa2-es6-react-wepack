import React, { Component, propTypes } from 'react'
import { connect } from 'react-redux';
import {echarts} from '../../utils/echartsImport';
import { GUANGZHOU_WEATHER } from '../../action/action'
import Card from '../card'

class GuangzhouChartWeather extends Component {

  constructor(props) {
    super(props);
    this.options = {};
    this.chartIns = null;
  }

  static defaultProps = {
    style: {height: 500, width: 500},
    color: ['#c23531', '#2f4554', '#7adc4e', '#25ba93'],
  };

  componentDidMount() {
    const {Guangzhou, color} = this.props
    let dateData = []
    let guangzhouDaytemp = []
    let guangzhouNighttemp = []
    Guangzhou.forEach((e, i) => {
      dateData[i] = e.date
      guangzhouDaytemp[i] = e.daytemp
      guangzhouNighttemp[i] = e.nighttemp
    })
    this.options = {
      title: {
        text: '广州近四天昼夜温度情况',
        subtext: '数据来源高德天气',
        textStyle: {
          fontSize: 14
        }
      },
      legend: {
        data:['白天温度','夜晚温度'],
        top: 40
      },
      tooltip: {
        trigger: 'axis'
      },
      grid : {
        top: 100
      },
      toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
      },
      color: color,
      series: [
        {
          name: '白天温度',
          type: 'line',
          data: guangzhouDaytemp,
          markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
          }
        },
        {
          name: '夜晚温度',
          type: 'line',
          data: guangzhouNighttemp,
          markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
                {type: 'average', name: '平均值'}
            ]
          }
        }
      ],
      xAxis: {
        type: 'category',
        name: '日期',
        splitLine: {show: false},
        data: dateData
      },
      yAxis: {
        name: '温度',
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        },
      }
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
      <Card className='guangzhou-chart-weather' title='广州气象'>
        <div {...props} />
      </Card>
    )
  }
}

function mapStateToProps(state) {
  const { postsByWeather } = state
  const Guangzhou = postsByWeather[GUANGZHOU_WEATHER] ? postsByWeather[GUANGZHOU_WEATHER]['guangZhou']['forecasts'][0]['casts'] : []
  return {
    Guangzhou,
  }
}

export default connect(mapStateToProps)(GuangzhouChartWeather);