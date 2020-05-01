import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 12
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

const Signup = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{...style}}>
      <h1 style={{textAlign:"center"}}>Sign up</h1>
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
          label="Enter your full name."
          name="name"
          rules={[
            {
              required: true,
              message: 'Name must be present.',
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
        <Form.Item
          label="Confirm Password"
          name="confirmpassword"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Continue
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


export default Signup;