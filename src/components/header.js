import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './scss/header.module.scss'

const scrollToElement = require('scroll-to-element');

const Header = () => {
  
  const handleLinkClick = (e, target) => {

    if (typeof window !== undefined) {
      if (window.location.pathname === '/') {
        e.preventDefault()
        scrollToElement(target, {
          offset: 0,
          ease: "out-cube",
          duration: 2000,
        })
      }
    }

  }

  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href='#section1'>Home</a>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="#section2">About</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={e => handleLinkClick(e, '#section3')} to="#section3" > Experience </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header