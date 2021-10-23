import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap'
import '../App.css'
import Download from './Download'
const Popup = ({ text, setText, setshowText }) => {
  console.log('HI')
  console.log(text)
  const [show, setShow] = useState(true)
  const handleRestart = () => {
    setshowText(true)
    setText('')
    setShow(false)
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleRestart}
        backdrop='static'
        keyboard={false}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Modal.Title>Time Expired</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have been idle for more than 10 seconds!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleRestart}>
            Restart
          </Button>
          <Download text={text}>Download Text</Download>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Popup
