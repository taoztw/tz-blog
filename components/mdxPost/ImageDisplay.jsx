import React from 'react'
import Image from 'next/image'

export const CenterImage = ({ src, alt, width, height }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Image src={src} alt={alt} width={width} height={height} />
  </div>
)
