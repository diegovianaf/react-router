import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav style={{display: 'flex', gap: '12px'}}>
      <Link to='/'>Home</Link>
      <Link to='users'>Users</Link>
    </nav>
  )
}

export default Header
