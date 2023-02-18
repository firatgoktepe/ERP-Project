import React from 'react'
import Image from 'next/image'
import profilePic from '../../../assets/logo.png'

const DrawerLogo: React.FC = () => {
  return (
    <Image
      src={profilePic}
      width={50}
      height={50}
      alt="Logo"
      className="logoImage"
    />
  )
}

export default DrawerLogo
