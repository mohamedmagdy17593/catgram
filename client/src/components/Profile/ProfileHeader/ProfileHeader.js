import './ProfileHeader.less'

import React from 'react'
import { getCatCoverStyle } from '../../../utils/cat'
import { Button, Typography } from 'antd'
import { useCat } from '../../../context/Cat'

const { Text } = Typography

function ProfileHeader({ cat }) {
  console.log({ cat })
  let { cat: me } = useCat()

  return (
    <div className="ProfileHeader">
      <div className="ProfileHeader__cover" style={getCatCoverStyle(cat)}></div>
      <div className="ProfileHeader__info container">
        <div className="ProfileHeader__info-avatar">
          <img src={cat.avatar} alt={`avatar for ${cat.name}`} />
        </div>
        {me?.id === cat.id && (
          <Button
            className="ProfileHeader__info-edit-profile-button"
            shape="round"
            type="dashed"
          >
            Edit Profile
          </Button>
        )}
      </div>
      <div className="ProfileHeader__main-info container">
        <Text strong className="ProfileHeader__main-info-name">
          {cat.name}
        </Text>
        <Text className="ProfileHeader__main-info-username">
          @{cat.username}
        </Text>
      </div>
    </div>
  )
}

export default ProfileHeader
