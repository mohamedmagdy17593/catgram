import React from 'react'
import { Input, Button, Form } from 'antd'

function SignupForm() {
  return (
    <Form layout="vertical">
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder="cat@catmail.com" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email' }]}
      >
        <Input placeholder="cat@catmail.com" />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Sign up
      </Button>
    </Form>
  )
}

export default SignupForm
