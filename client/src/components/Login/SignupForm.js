import React from 'react'
import { Input, Button, Form } from 'antd'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { showError } from '../../utils/errors'

const SIGNUP = gql`
  mutation SIGNUP($input: SignupInput!) {
    signup(input: $input)
  }
`

function SignupForm({ onSuccess }) {
  let [signup, { loading }] = useMutation(SIGNUP, {
    onCompleted() {
      onSuccess()
    },
    onError(error) {
      showError(error)
    },
  })

  function handleSignup(values) {
    signup({ variables: { input: values } })
  }

  return (
    <Form layout="vertical" onFinish={handleSignup}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder="Sassy" />
      </Form.Item>

      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input placeholder="sassy" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email' }]}
      >
        <Input placeholder="cat@catmail.com" />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={loading}>
        Sign up
      </Button>
    </Form>
  )
}

export default SignupForm
