import React from 'react'
import { Input, Button, Form } from 'antd'
import { gql } from 'apollo-boost'
import { showError } from '../../utils/errors'
import { useMutation } from '@apollo/react-hooks'

const LOGIN = gql`
  mutation LOGIN($input: LoginInput!) {
    login(input: $input)
  }
`

function LoginForm({ onSuccess }) {
  let [login, { loading }] = useMutation(LOGIN, {
    onCompleted() {
      onSuccess()
    },
    onError(error) {
      showError(error)
    },
  })

  function handleLogin(values) {
    login({ variables: { input: values } })
  }

  return (
    <Form layout="vertical" onFinish={handleLogin}>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email' }]}
      >
        <Input placeholder="cat@catmail.com" />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={loading}>
        Login
      </Button>
    </Form>
  )
}

export default LoginForm
