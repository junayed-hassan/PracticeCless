/* eslint-disable react-hooks/rules-of-hooks */


function panel({isShowText,onSetShow}) {

  return (
    <div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        {isShowText && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sit quas vitae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sit quas vitae!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sit quas vitae!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sit quas vitae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sit quas vitae!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sit quas vitae!</p>}
        {!isShowText && <button onClick={() => onSetShow()}>show</button>}
        
    </div>
  )
}

export default panel