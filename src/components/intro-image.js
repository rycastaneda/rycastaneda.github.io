import React from 'react'
import custom from '../css/custom.module.css'

const IntroImage = ({ image }) => (
  <div className={custom.header}
  >
    <div className={custom.gradient}>
      <img src="./gradient.png" alt=""></img>
    </div>
    <img src={image} className={custom.coverimage} alt=""></img>
  </div>
)

export default IntroImage
