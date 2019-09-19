
import React from 'react'
import { Link } from 'react-router-dom'
import { StyleButton } from './HomeStyle'
const Mainpage = () => {
  return (
    <div>
      <div className='wpapper__main__button'>
        <Link to='/signup'><StyleButton>Sign up</StyleButton></Link>
        <Link to='/signin'><StyleButton> Sign in</StyleButton></Link>
      </div>
    </div>
  )
}
export default Mainpage
