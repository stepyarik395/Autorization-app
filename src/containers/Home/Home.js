
import React from 'react'
import { Link } from 'react-router-dom'
import { StyleButton, StyleWrapperMain } from './HomeStyle'
const Mainpage = () => {
  return (
    <div>
      <StyleWrapperMain>
        <Link to='/signup'><StyleButton>Sign up</StyleButton></Link>
        <Link to='/signin'><StyleButton> Sign in</StyleButton></Link>
      </StyleWrapperMain>
    </div>
  )
}
export default Mainpage
