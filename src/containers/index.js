import React, { Component, PropTypes } from 'react'
import { Layout, Menu, Button, Icon } from 'antd'
import { connect } from 'react-redux'
import CityWeather from './cityWeather'
import WeatherTable from './weatherTable'
import ImageWeather from './imageWeather/imageWeather'
import MapIndex from './mapindex'
import { allCityWeather, BEIJING_WEATHER, NANJING_WEATHER, SHANGHAI_WEATHER, GUANGZHOU_WEATHER, SHENZHEN_WEATHER, HANGZHOU_WEATHER, CHENGDU_WEATHER, SUZHOU_WEATHER, WENZHOU_WEATHER } from '../action/action'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const ContentDict = {1:<CityWeather />, 2:<WeatherTable />, 3:<ImageWeather />, 4:<MapIndex />}

class App extends Component {
	constructor(props) {
		super(props)
  }

	state = {
		collapsed: false,
		changed: 1,
	};

	componentWillMount () {
		const { dispatch } = this.props
		dispatch(allCityWeather('city=110000&extensions=all&key=ecfbe66140f8ed4cc0bcbcf92b111074', BEIJING_WEATHER))
		dispatch(allCityWeather('city=320100&extensions=all&key=ecfbe66140f8ed4cc0bcbcf92b111074', NANJING_WEATHER))
		dispatch(allCityWeather('city=310000&extensions=all&key=ecfbe66140f8ed4cc0bcbcf92b111074', SHANGHAI_WEATHER))
		dispatch(allCityWeather('city=440100&extensions=all&key=ecfbe66140f8ed4cc0bcbcf92b111074', GUANGZHOU_WEATHER))
		dispatch(allCityWeather('city=440300&extensions=all&key=ecfbe66140f8ed4cc0bcbcf92b111074', SHENZHEN_WEATHER))
		dispatch(allCityWeather('city=330100&extensions=all&key=ecfbe66140f8ed4cc0bcbcf92b111074', HANGZHOU_WEATHER))
		dispatch(allCityWeather('city=510100&extensions=all&key=ecfbe66140f8ed4cc0bcbcf92b111074', CHENGDU_WEATHER))
		dispatch(allCityWeather('city=320500&extensions=all&key=ecfbe66140f8ed4cc0bcbcf92b111074', SUZHOU_WEATHER))
		dispatch(allCityWeather('city=330300&extensions=all&key=ecfbe66140f8ed4cc0bcbcf92b111074', WENZHOU_WEATHER))
	}

	onCollapse = (collapsed) => {
		this.setState({ collapsed });
	}

	changeMode = (key) => {
		this.setState({changed:key.key})
	}

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	
	render() {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sider
				collapsible
				collapsed={this.state.collapsed}
				onCollapse={this.onCollapse}
				>
					<div>
						<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
								<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
						</Button>
						<Menu
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							mode="inline"
							theme="dark"
							inlineCollapsed={this.state.collapsed}
							onClick={this.changeMode}
						>
							<Menu.Item key="1">
								<Icon type="desktop" />
								<span>重要城市天气预报</span>
							</Menu.Item>
							<Menu.Item key="2">
								<Icon type="table" />
								<span>表格天气预报</span>
							</Menu.Item>
							<Menu.Item key="3">
								<Icon type="line-chart" />
								<span>图形天气预报</span>
							</Menu.Item>
							<Menu.Item key="4">
								<Icon type="global" />
								<span>地图查询</span>
							</Menu.Item>
							<Menu.Item key="5">
								<Icon type="line-chart" />
								<span>地图页面</span>
							</Menu.Item>
						</Menu>
					</div>
				</Sider>
				<Layout>
					<Content  id='main' style={{ margin: '0 16px' }}>
							{ContentDict[this.state.changed]}
					</Content>
					<Footer style={{ textAlign: 'center', backgroundColor: '#FFFFF0', color: '#001529' }}>
							Writed by XIE-ZHANG
					</Footer>
				</Layout>                   
			</Layout>
		);
	}
}

function mapStateToProps(state) {}

export default connect(mapStateToProps)(App)