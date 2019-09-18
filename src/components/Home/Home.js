
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { StyleButton } from './HomeStyle'
class Mainpage extends Component {
  render () {
    return (
      <div>
        <div className='wpapper__main__button'>
          <Link to='/register'>
            <StyleButton>Login In</StyleButton>
          </Link>
          <Link to='/login'><StyleButton>Sign in</StyleButton></Link>
        </div>
      </div>
    )
  }
}
export default Mainpage
