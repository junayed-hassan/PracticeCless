/* eslint-disable react/prop-types */
import { useState } from "react";


function PracticeTwo() {
const [text,setText] = useState(0);
const myData = [
    "This is junayed0 hasan",
    "This is hasan junayed1 ",
    "junayed2 hasan This is ",
    "This hasan is junayed3 ",
    " junayed4 This is hasan"

]
//  const clickHandler = ()=>{
//     setText(text +1)
//  }
  return (
    <div>
        <One text={myData[text]} />
        <button onClick={()=>setText(text +1)}>click me</button>
    </div>
  )
}

export default PracticeTwo;


function One({text}) {
    return <h2>{text}</h2>
}
