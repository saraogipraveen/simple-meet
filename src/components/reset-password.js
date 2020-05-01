import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 16,
  },
  layout: 'vertical'
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

function ResetPasswordLink() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return <Form
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



    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Send reset link
</Button>
    </Form.Item>
  </Form>
}

function ResetPasswordForm() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return <Form
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
      label="New Password."
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
      label="Confirm Password."
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
}

const ResetPassword = () => {
  // const onFinish = values => {
  //   console.log('Success:', values);
  // };

  // const onFinishFailed = errorInfo => {
  //   console.log('Failed:', errorInfo);
  // };

  const resetlink = true;
  return (
    <div style={{ ...style }}>
      <h1 style={{ textAlign: "center" }}>Reset password</h1>
      {resetlink ? <ResetPasswordLink /> : <ResetPasswordForm />}
    </div>
  );
};


export default ResetPassword;