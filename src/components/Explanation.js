import React from 'react'
import Button from 'react-bootstrap/Button'
import '../App.css'
const Explanation = ({ showScreen, setShowScreen }) => {
  const onClickHandler = () => {
    setShowScreen(false)
  }

  return (
    <div className='container explanation center'>
      <h2 className='white-text'>
        Don’t stop writing, or all progress will be lost.
      </h2>
      <h3 className='white-text'>
        For most writers, a big problem is writing block. Where you can't think
        of what to write and you can't write anything. This app solves this
        problem by forcing you to keep writing!
      </h3>

      <h3 className='red-text'>
        If you don't write for 10 seconds you will lose progress!
      </h3>

      <Button
        variant='success'
        size='lg'
        className='button-text'
        onClick={onClickHandler}
      >
        Start Writing
      </Button>
    </div>
  )
}

export default Explanation
