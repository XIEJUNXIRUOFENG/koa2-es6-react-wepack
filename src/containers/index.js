import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Button, Icon } from 'antd';
import CityWeather from './cityWeather';
import WeatherTable from './weatherTable';
// import MapIndex from './mapindex';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const ContentDict = {1:<CityWeather />, 2:<WeatherTable />}

class SiderDemo extends React.Component {

    state = {
        collapsed: false,
        changed: 1,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
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


ReactDOM.render(<SiderDemo />, document.getElementById('root'))