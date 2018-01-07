import React, { Component, PropTypes } from 'react'
import { Layout, Menu, Button, Icon } from 'antd'
import { connect } from 'react-redux'
import CityWeather from './cityWeather'
import WeatherTable from './weatherTable'
import { allCityWeather, BEIJING_WEATHER, NANJING_WEATHER } from '../action/action'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const ContentDict = {1:<CityWeather />, 2:<WeatherTable />}

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
		console.warn('需要', this.props)
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
															<Icon type="pie-chart" />
															<span>Option 1</span>
													</Menu.Item>
													<Menu.Item key="2">
															<Icon type="desktop" />
															<span>Option 2</span>
													</Menu.Item>
													<Menu.Item key="3">
															<Icon type="inbox" />
															<span>Option 3</span>
													</Menu.Item>
													<SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
															<Menu.Item key="5">Option 5</Menu.Item>
															<Menu.Item key="6">Option 6</Menu.Item>
															<Menu.Item key="7">Option 7</Menu.Item>
															<Menu.Item key="8">Option 8</Menu.Item>
													</SubMenu>
													<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
															<Menu.Item key="9">Option 9</Menu.Item>
															<Menu.Item key="10">Option 10</Menu.Item>
															<SubMenu key="sub3" title="Submenu">
																	<Menu.Item key="11">Option 11</Menu.Item>
																	<Menu.Item key="12">Option 12</Menu.Item>
															</SubMenu>
													</SubMenu>
											</Menu>
									</div>
							</Sider>
							<Layout>
									<Header style={{ background: '#fff', padding: 0 }} />
									<Content  id='main' style={{ margin: '0 16px' }}>
											{ContentDict[this.state.changed]}
											{/* <WeatherTable />*/}
									</Content>
									<Footer style={{ textAlign: 'center' }}>
											Writed by XIE-ZHANG
									</Footer>
							</Layout>                   
					</Layout>
			);
	}
}

function mapStateToProps(state) {
	// console.warn('全局state', state)
  	const { postsByWeather } = state
	const beijingDetail = postsByWeather[BEIJING_WEATHER] ? postsByWeather[BEIJING_WEATHER]['beiJing']['forecasts'][0]['casts'] : []
	const nanjingDetail = postsByWeather[NANJING_WEATHER] ? postsByWeather[NANJING_WEATHER]['nanJing']['forecasts'][0]['casts'] : []

  return {
	beijingDetail,
	nanjingDetail
  }
}

export default connect(mapStateToProps)(App);