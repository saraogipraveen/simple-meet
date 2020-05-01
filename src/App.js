import React from 'react';
import './App.css';
import Login from './components/login';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function AuthenticatedApp() {
  return (
    <>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          Content
    </div>
      </Content>
    </>
  )
}



function UnAuthenticatedApp() {
  return (
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <Login />

      </div>
    </Content>
  )
}

function App() {
  const user = false;
  return (
    <Layout>
{      user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      <Footer style={{ textAlign: 'center' }}>Simple Meet ©2019 Created by Praveen Saraogi</Footer>
    </Layout>
  );
}

export default App;
