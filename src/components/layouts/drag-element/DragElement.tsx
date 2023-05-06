import React from 'react'
import { useState } from 'react'

interface Props {
  children: JSX.Element
  width: number
  height: number
}
export const DragElement = ({ children, width, height }: Props) => {
  const [drag, setDrag] = useState({
    x: 0,
    y: 0,
  })
  const handleDragElement = (e: React.DragEvent) => {
    setDrag({
      x: e.clientX,
      y: e.clientY,
    })
  }
  return (
    <div
      onDrag={handleDragElement}
      onDragEnd={handleDragElement}
      style={{
        position: `${drag.x !== 0 || drag.y !== 0 ? 'absolute' : 'relative'}`,
        transform: `${
          drag.x !== 0 || drag.y !== 0 ? 'translate3d(-50%,-100%,0)' : 'initial'
        }`,
        left: `${drag.x}px`,
        top: `${drag.y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {children}
    </div>
  )
}
