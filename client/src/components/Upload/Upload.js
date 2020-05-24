/**
 * from: https://ant.design/components/upload/#header
 */
import React, { useState } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { message, Upload as AntUpload } from 'antd'

function Upload({ onChange, value, className }) {
  let [loading, setLoading] = useState(false)

  function handleChange(info) {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => {
        setLoading(false)
        onChange(imageUrl)
      })
    }
  }

  let uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  )

  return (
    <AntUpload
      name="avatar"
      listType="picture-card"
      className={className}
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {!loading && value ? (
        <img src={value} alt="img" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </AntUpload>
  )
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
    return false
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
    return false
  }
  return isJpgOrPng && isLt2M
}

export default Upload
