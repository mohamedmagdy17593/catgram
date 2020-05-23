import './ProfileHeader.less'

import React, { useState } from 'react'
import { getCatCoverStyle } from '../../../utils/cat'
import { Button, Typography } from 'antd'
import { useCat } from '../../../context/Cat'
import EditModal from './EditModal/EditModal'

const { Text } = Typography

function ProfileHeader({ cat }) {
  let { cat: me } = useCat()

  let [showEditModal, setShowEditModal] = useState(false)

  return (
    <div className="ProfileHeader">
      <div className="ProfileHeader__cover" style={getCatCoverStyle(cat)}></div>
      <div className="ProfileHeader__info container">
        <div className="ProfileHeader__info-avatar">
          <img src={cat.avatar} alt={`avatar for ${cat.name}`} />
        </div>
        {me?.id === cat.id && (
          <div className="ProfileHeader__info-edit-profile-button">
            <Button
              shape="round"
              type="dashed"
              onClick={() => setShowEditModal(true)}
            >
              Edit Profile
            </Button>
            <EditModal
              show={showEditModal}
              onClose={() => setShowEditModal(false)}
            />
          </div>
        )}
      </div>
      <div className="ProfileHeader__main-info container">
        <Text strong className="ProfileHeader__main-info-name">
          {cat.name}
        </Text>
        <Text className="ProfileHeader__main-info-username">
          @{cat.username}
        </Text>
        {cat.bio && (
          <Text className="ProfileHeader__main-info-bio">{cat.bio}</Text>
        )}
      </div>
    </div>
  )
}

export default ProfileHeader
