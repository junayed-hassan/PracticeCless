import { useState } from 'react';

export default function MovingDot() {
    const [position,setPosition] = useState({
        x: 0,
        y: 0
    });

    const moveHandler = (e) => {
       setPosition({
        x: e.clientX,
        y: e.clientY
       })
    }
let prent ={
    position: 'relative',
    width: '100vw',
    height: '100vh',
}
let child ={
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: '50%',
    width:20,
    height:20,
    transform:` translate(${position.x}px,${position.y}px)`,
    top:-10,
    left:-10,
}
  return (
   <div style={prent} onPointerMove={moveHandler}>
    <div style={child}>
    </div>
  </div>
  )
}
