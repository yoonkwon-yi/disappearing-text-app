import React, { useState } from 'react'
import Explanation from './Explanation'
import Header from './Header'
import TextArea from './TextArea'

const LandingPage = () => {
  const [showScreen, setShowScreen] = useState(true)

  return showScreen ? (
    <div>
      <Explanation showScreen={showScreen} setShowScreen={setShowScreen} />
    </div>
  ) : (
    <div>
      <Header />
      <TextArea />
    </div>
  )
}

export default LandingPage
