import React from 'react';
import { Layout } from 'antd';
import Home from './home';

const { Header, Content, Footer } = Layout;


const AuthenticatedApp = () => {
  const logoStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.2)",
    margin: "16px 24px 16px 0",
    cssFloat: "right"
  }

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ position: 'fixed', zIndex: 1, height: '72px', width: '100%' }}>
        <div className="logo" style={{ ...logoStyle }} />
      </Header>
      <Content className="site-layout" style={{ padding: '0 0', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Home />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Simple Meet ©2019 Created by Praveen Saraogi</Footer>

    </Layout>
  )
}

export default AuthenticatedApp;
