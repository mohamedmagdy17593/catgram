import React from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { useCat } from '../../../../context/Cat'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { showError } from '../../../../utils/errors'

const EDIT_PROFILE = gql`
  mutation EDIT_PROFILE($input: EditProfileInput) {
    editProfile(input: $input) {
      id
      name
      email
      username
      avatar
      bio
    }
  }
`

function EditModal({ show, onClose }) {
  let { cat: me } = useCat()
  let { name, bio } = me

  let [editProfile, { loading }] = useMutation(EDIT_PROFILE, {
    onCompleted() {
      onClose()
    },
    onError(error) {
      showError(error)
    },
  })

  function handleFinish(values) {
    editProfile({ variables: { input: values } })
  }

  return (
    <Modal visible={show} onCancel={onClose} title="Edit profile" footer={null}>
      <Form
        layout="vertical"
        initialValues={{ name, bio }}
        onFinish={handleFinish}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Sassy" />
        </Form.Item>

        <Form.Item name="bio" label="Bio">
          <Input.TextArea />
        </Form.Item>

        <Button loading={loading} htmlType="submit">
          Save
        </Button>
      </Form>
    </Modal>
  )
}

export default EditModal
