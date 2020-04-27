import React from 'react'
import { Input, Button, Form } from 'antd'

function LoginForm() {
  return (
    <Form layout="vertical">
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email' }]}
      >
        <Input placeholder="cat@catmail.com" />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form>
  )
}

export default LoginForm
