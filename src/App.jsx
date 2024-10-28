// import Practice from "./PracticeOne"
// import PracticeTwo from "./PracticeTwo"
// import MovingDot from "./moving"
// import PracticeInput from "./practiceInput"
import Panel from './panel';
import { useState } from "react"
function App() {
  const [showText,setShowText] = useState(false);
  const onSetShow = () => {
    setShowText(!showText)
  }
  return (
    <div>
      {/* <Practice/> */}
      {/* <PracticeTwo/> */}
      {/* <MovingDot/> */}
      {/* <PracticeInput/> */}
      <Panel isShowText={showText} onSetShow={onSetShow} />
      <Panel isShowText={showText} onSetShow={onSetShow} />
      <Panel isShowText={showText} onSetShow={onSetShow} />
    </div>
  )
}

export default App