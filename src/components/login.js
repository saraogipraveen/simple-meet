import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 16,
  },
  layout : 'vertical'
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const style = {
  // background : 'red'
}

const Login = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{...style}}>
      <h1 style={{textAlign:"center"}}>Login</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Enter your email to get started."
          name="username"
          rules={[
            {
              required: true,
              message: 'Email must be present.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Choose a password with atleast 8 characters."
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <a className="login-form-forgot" href="#">
          Forgot password
        </a>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Continue
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


export default Login;