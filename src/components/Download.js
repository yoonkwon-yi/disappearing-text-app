import React from 'react'
import Button from 'react-bootstrap/Button'

const Download = ({ text }) => {
  console.log(text)
  const downloadTxtFile = () => {
    const element = document.createElement('a')
    const file = new Blob([text], {
      type: 'text/plain;charset=utf-8'
    })
    element.href = URL.createObjectURL(file)
    element.download = 'myFile.txt'
    document.body.appendChild(element)
    element.click()
  }
  return (
    <div>
      <Button onClick={downloadTxtFile}>Download Text</Button>
    </div>
  )
}

export default Download
