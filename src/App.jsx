import Practice from "./PracticeOne"
import PracticeTwo from "./PracticeTwo"
import MovingDot from "./moving"
import PracticeInput from "./practiceInput"
import Count from './count';
import Panel from './panel';
import { useState } from "react"
function App() {
  // const [showText,setShowText] = useState(false);
  const [index,setIndex] = useState('')
  const onSetShow = (index) => {
    setIndex(index)
  }
  const [height,setHeight] = useState(true);
  return (
    <div>
     <Practice/>
       <PracticeTwo/> 
      <MovingDot/>
      <PracticeInput/> 
      <Panel isShowText={index === 0} index={0} onSetShow={onSetShow} />
      <Panel isShowText={index === 1} index={1} onSetShow={onSetShow} />
      <Panel isShowText={index === 2} index={2} onSetShow={onSetShow} />
      {height &&<Count/> }

      <Count/>
   
      <button onClick={()=> setHeight(!height)}>click me</button>
    </div>
  )
}

export default App