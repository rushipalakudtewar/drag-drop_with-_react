import React, { forwardRef } from 'react'

const Note = forwardRef(({content,initialPos, ...props},ref) => {
    return (
      <div ref={ref} style={{position:'absolute', left:`${initialPos?.x}`, top:`${initialPos?.y}`, border:'1px solid black', userSelect:'none', cursor:"move", padding:"10px", backgroundColor:"lightYellow",}} {...props}>▶️{content}</div>
    )
  })

export default Note