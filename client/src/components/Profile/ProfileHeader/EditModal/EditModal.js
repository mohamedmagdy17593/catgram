import './EditModal.less'

import React from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { useCat } from '../../../../context/Cat'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { showError } from '../../../../utils/errors'
import Upload from '../../../Upload/Upload'

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
  let { name, bio, avatar, cover } = me

  let [editProfile, { loading }] = useMutation(EDIT_PROFILE, {
    onCompleted() {
      onClose()
    },
    onError(error) {
      showError(error)
    },
  })

  function handleFinish(values) {
    if (values.avatar === avatar) {
      delete values.avatar
    }
    if (values.cover === cover) {
      delete values.cover
    }

    editProfile({ variables: { input: values } })
  }

  return (
    <Modal
      className="EditModal"
      visible={show}
      onCancel={onClose}
      title="Edit profile"
      centered
      footer={null}
      destroyOnClose={true}
    >
      <Form
        layout="vertical"
        initialValues={{ name, bio, avatar, cover }}
        onFinish={handleFinish}
      >
        <Form.Item name="avatar" label="Avatar">
          <Upload className="EditModal__avatar" />
        </Form.Item>

        <Form.Item name="cover" label="Cover">
          <Upload className="EditModal__cover" />
        </Form.Item>

        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input placeholder="Sassy" />
        </Form.Item>

        <Form.Item name="bio" label="Bio">
          <Input.TextArea />
        </Form.Item>

        <Button type="primary" loading={loading} htmlType="submit">
          Save
        </Button>
      </Form>
    </Modal>
  )
}

export default EditModal
