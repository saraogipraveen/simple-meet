import React from 'react';
import './App.css';
import Login from './components/login';
import { Layout } from 'antd';
import Signup from './components/signup';
import ResetPassword from './components/reset-password';
import AuthenticatedApp from './components/AuthenticatedApp/authenticated-app';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const { Header, Content, Footer } = Layout;
function UnAuthenticatedApp() {
  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <ResetPassword />
    </div>
  )
}

function App() {
  const user = true;
  // return user ? <AuthenticatedApp /> : <UnAuthenticatedApp />
  return <Router>
    <Switch>
      <Route path="/singup">
        <Signup />
      </Route>
      <Route path="/resetpassword">
        <ResetPassword />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <AuthenticatedApp />
      </Route>
    </Switch>
  </Router>
}

export default App;
