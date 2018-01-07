import React from 'react';
import { Checkbox, Row, Col  } from 'antd';
import { Table } from 'antd';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux'
import { weatherTable } from '../action/action'
import { WEATHER_TABLE } from '../action/action'
import '../theme/table.less';

// 多选框
const CheckboxGroup = Checkbox.Group;
let cityGroup = [];

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
    function isSelect(value) {
        return checkedValues.includes(value.city);
    }
    cityGroup = data.filter(isSelect);
}
  
const plainOptions = ['Hangzhou', 'Chengdu', 'Suzhou'];
const options = ['Shanghai', 'Beijing', 'Guangzhou'];
const optionsWithDisabled = ['Shenzhen', 'Wenzhou', 'Nanjing'];

const columns = [{
    title: 'City',
    dataIndex: 'city',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'Mon',
    dataIndex: 'Monday',
  }, {
    title: 'Tue',
    dataIndex: 'Tuesday',
}, {
    title: 'Wed',
    dataIndex: 'Wednesday',
}, {
    title: 'Thu',
    dataIndex: 'Thursday',
}, {
    title: 'Fri',
    dataIndex: 'Friday',
}, {
    title: 'Sat',
    dataIndex: 'Saturday',
}, {
    title: 'Sun',
    dataIndex: 'Sunday',
}];

const data = [{
    city: 'Beijing',
    Monday: '晴',
    Tuesday: '中雨',
    Wednesday: '中雨转小雨',
    Thursday: '晴',
    Friday: '晴',
    Saturday: '晴',
    Sunday: '晴'
    }, {
    city: 'Shanghai',
    }, {
    city: 'Guangzhou',
    }, {
    city: 'Shenzhen',
    }, {
    city: 'Hangzhou',
    }, {
    city: 'Chengdu',
    }, {
    city: 'Suzhou',
    }, {
    city: 'Wenzhou',
    }, {
    city: 'Nanjing',
}];

class WeatherTable extends React.Component {

    componentWillMount () {
        const { dispatch } = this.props
		dispatch(weatherTable('city=110000&key=ecfbe66140f8ed4cc0bcbcf92b111074'))
    }
    
    state = { visible: false }
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
    handleOk = (e) => {
      this.setState({
        visible: false,
      });
    }
    handleCancel = (e) => {
      this.setState({
        visible: false,
      });
    }

    render() {
        console.warn('Table结果', this.props)
        return (
            <div className="weather-table">
                <Table bordered={true} className="table-nested" columns={columns} dataSource={cityGroup} pagination={false} />
                <Button type="primary" className="weather-nested" onClick={this.showModal}>选择城市</Button>
                <Modal
                    title="全国各大城市"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                        <Row>
                            <Col span={8}><Checkbox value="Beijing">Beijing</Checkbox></Col>
                            <Col span={8}><Checkbox value="Shanghai">Shanghai</Checkbox></Col>
                            <Col span={8}><Checkbox value="Guangzhou">Guangzhou</Checkbox></Col>
                            <Col span={8}><Checkbox value="Shenzhen">Shenzhen</Checkbox></Col>
                            <Col span={8}><Checkbox value="Hangzhou">Hangzhou</Checkbox></Col>
                            <Col span={8}><Checkbox value="Chengdu">Chengdu</Checkbox></Col>
                            <Col span={8}><Checkbox value="Suzhou">Suzhou</Checkbox></Col>
                            <Col span={8}><Checkbox value="Wenzhou">Wenzhou</Checkbox></Col>
                            <Col span={8}><Checkbox value="Nanjing">Nanjing</Checkbox></Col>
                        </Row>
                    </Checkbox.Group>
                </Modal>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { postsByWeather } = state
    const weatherTable = postsByWeather[WEATHER_TABLE] ? postsByWeather[WEATHER_TABLE]['itemTable']['lives'][0] : []
  
    return {
      weatherTable
    }
  }
  
  export default connect(mapStateToProps)(WeatherTable)