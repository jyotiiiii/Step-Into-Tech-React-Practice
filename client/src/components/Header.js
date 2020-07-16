import React from 'react'

function Header(props) {
  const { children } = props

  return (
    <header className="header">
      <div className="header-content">
        <h1>Eastenders Database</h1>
        {children}
      </div>
    </header>
  )
}

export default Header
