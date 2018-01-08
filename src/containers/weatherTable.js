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

var onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
    cityGroup = dataFormat.filter((value) => {
        return checkedValues.includes(value.city);
    });
};
  
const plainOptions = ['杭州', '成都', '苏州'];
const options = ['上海', '北京', '广州'];
const optionsWithDisabled = ['深圳', '温州', '南京'];
const defaultCheckedList = ['杭州', '上海', '南京'];

// 表格列表项
const date = new Date();
var arr = [{ title: '城市', dataIndex: 'city'}];
for (let i=0; i <=3; i++) {
    let obj = {};
    obj.title = (date.getMonth() + 1) + '月' + (date.getDate() + i) + '日';
    obj.children = [{ title: '晨间', dataIndex: 'dayweather' + i}, { title: '晨温', dataIndex: 'daytemp' + i}, 
    { title: '夜晚', dataIndex: 'nightweather' + i}, { title: '晚温', dataIndex: 'nighttemp' + i}]
    arr.push(obj);
}
const columns = arr;

var dataFormat = [];
const cityDict = { 'Beijing':'北京', 'Shanghai':'上海', 'Guangzhou':'广州', 'Shenzhen':'深圳', 'Hangzhou':'杭州', 'Chengdu':'成都', 
'Suzhou':'苏州', 'Nanjing':'南京', 'Wenzhou':'温州' };

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


    componentWillMount() {
        const data = this.props;
        dataFormat = [];
        for (let key of Object.keys(data)) {
            if (key === 'dispatch') {
                continue;
            }
            var obj = {};
            obj.city = cityDict[key];
            data[key].forEach((val, index) => {
                obj['dayweather' + index] = val.dayweather;
                obj['daytemp' + index] = val.daytemp + '℃';
                obj['nightweather' + index] = val.nightweather;
                obj['nighttemp' + index] = val.nighttemp + '℃';
            });
            dataFormat.push(obj);
        }
        cityGroup = dataFormat.filter((value) => {
            return ["上海", "深圳", "北京", "广州"].includes(value.city);
        });
    }

    render() {
        return (
            <div className="weather-table">
                <Table bordered={true} className="table-nested" columns={columns} dataSource={cityGroup} pagination={false} />
                <Button type="primary" className="weather-nested" onClick={this.showModal}>选择城市</Button>
                <Modal
                    closable={false}
                    footer={null}
                    title="全国各大城市"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {/* <CheckboxGroup options={plainOptions} defaultValue={['杭州']} onChange={onChange} />
                    <br /><br />
                    <CheckboxGroup options={options} defaultValue={['上海']} onChange={onChange} />
                    <br /><br />
                    <CheckboxGroup options={optionsWithDisabled}  defaultValue={['南京']} onChange={onChange} /> */}
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange} defaultValue={['北京', '上海', '广州', '深圳']}>
                        <Row>
                        <Col span={8}><Checkbox value="北京">北京</Checkbox></Col>
                        <Col span={8}><Checkbox value="上海">上海</Checkbox></Col>
                        <Col span={8}><Checkbox value="广州">广州</Checkbox></Col>
                        <Col span={8}><Checkbox value="深圳">深圳</Checkbox></Col>
                        <Col span={8}><Checkbox value="杭州">杭州</Checkbox></Col>
                        <Col span={8}><Checkbox value="成都">成都</Checkbox></Col>
                        <Col span={8}><Checkbox value="苏州">苏州</Checkbox></Col>
                        <Col span={8}><Checkbox value="南京">南京</Checkbox></Col>
                        <Col span={8}><Checkbox value="温州">温州</Checkbox></Col>
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