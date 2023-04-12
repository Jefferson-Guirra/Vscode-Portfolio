import React from 'react'
import Image from 'next/image'

interface Props {
  type: string
  size: number
}
export const IconType = ({ type, size }: Props) => {
  return (
    <Image
      src={`images/${type}.svg`}
      width={size}
      height={size}
      alt={`${type} icon`}
    />
  )
}
