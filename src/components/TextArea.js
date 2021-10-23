import React, { useState, useEffect } from 'react'
import Popup from './Popup'
const delay = 10
function TextArea () {
  const [text, setText] = useState('')
  const [showText, setshowText] = useState(true)

  //   useEffect(() => {
  //     console.log('starting/restarting timer')
  //     clearTimeout(timerID)
  //     timerID = setTimeout(() => {
  //       console.log('finished')
  //     }, 2000)
  //   }, [text])
  useEffect(() => {
    console.log('PRESSED')
    let timer1 = setTimeout(() => {
      setshowText(false)
      console.log('HERE')
    }, delay * 1000)

    return () => {
      clearTimeout(timer1)
    }
  }, [text])

  //FUNCTIONS
  //   let timerID = null
  function handleChange (e) {
    setText(e.target.value)
    console.log(text)
    //   clearTimeout(timerID)
    //   timerID = setTimeout(() => {
    //     console.log('finished')
    //   }, 5000)
  }

  return showText ? (
    <div className='container'>
      <textarea
        rows='30'
        cols='100'
        value={text}
        autoFocus
        onChange={handleChange}
      >
        {text}
      </textarea>
    </div>
  ) : (
    <Popup text={text} setText={setText} setshowText={setshowText} />
  )
}

export default TextArea
