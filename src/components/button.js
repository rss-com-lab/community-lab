import React from 'react'

import buttonStyles from './scss/button.module.scss'

const Button = (props) => {
  return (
    <div>
      <a href="#" className={buttonStyles.btn} >{props.title}</a>
    </div>
  )
}

export default Button