import React from 'react';
import { Checkbox, Row, Col  } from 'antd';
import { Table } from 'antd';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { BEIJING_WEATHER, NANJING_WEATHER, SHANGHAI_WEATHER, GUANGZHOU_WEATHER, SHENZHEN_WEATHER, HANGZHOU_WEATHER, CHENGDU_WEATHER, SUZHOU_WEATHER, WENZHOU_WEATHER } from '../action/action'

import '../theme/table.less';

// 多选框
const CheckboxGroup = Checkbox.Group;
let cityGroup = [];

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
    function isSelect(value) {
        return checkedValues.includes(value.city);
    }
    cityGroup = dataFormat.filter(isSelect);
}
  
const plainOptions = ['Hangzhou', 'Chengdu', 'Suzhou'];
const options = ['Shanghai', 'Beijing', 'Guangzhou'];
const optionsWithDisabled = ['Shenzhen', 'Wenzhou', 'Nanjing'];

// 表格列表项
const date = new Date();
var arr = [{ title: '城市', dataIndex: 'city'}];
for (let i=0; i <=3; i++) {
    let obj = {};
    obj.title = (date.getMonth() + 1) + '月' + (date.getDate() + i) + '日';
    obj.children = [{ title: '晨间', dataIndex: 'dayweather' + i}, { title: '夜晚', dataIndex: 'nightweather' + i}]
    arr.push(obj);
}
const columns = arr;

var dataFormat = [];

class WeatherTable extends React.Component {

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
        const data = this.props;
        console.warn('Table结果', data);
        dataFormat = [];
        for (let key of Object.keys(data)) {
            if (key === 'dispatch') {
                continue;
            }
            var obj = {};
            obj.city = key;
            data[key].forEach(function (val, index) {
                obj['dayweather' + index] = val.dayweather;
                obj['nightweather' + index] = val.nightweather;
            });
            dataFormat.push(obj);
        }
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
  
export default connect(mapStateToProps)(WeatherTable);