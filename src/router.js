import React from 'react';
import { Router, Route, Switch ,Link} from 'dva/router';
import IndexPage from './routes/IndexPage';
import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
import OrderPage from './routes/OrderPage'
import CustomerDetails from './routes/CustomerDetails'

import {Layout, Menu, Breadcrumb, Icon} from 'antd'

function RouterConfig({ history }) {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return (
      <Router history={history}>
        <Layout>
          <Header className="header">
            <div className="logo" style={{color:"#fff",fontWeight:"bold",fontSize:"18px"}}>
              e洁家政后台管理系统  
            </div>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>
                    <Link to="/customer">顾客管理</Link>
                  </span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span>
                    <Link to="/order">订单管理</Link>
                  </span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  margin: 0,
                  padding:'1em',
                  minHeight: 280,
                }}
              >
                <Switch>
                  <Route path="/" exact component={IndexPage} />
                  <Route path="/orderLine" exact component={OrderLinePage} />
                  <Route path="/customer" exact component={CustomerPage} />
                  <Route path="/order" exact component={OrderPage} />
                  <Route path="/customerDetails" exact component={CustomerDetails} />
                  
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    
  );
}

export default RouterConfig;