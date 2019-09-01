import React from 'react'
import { Link } from 'gatsby'

import Button from './button'
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
      <div className="container">
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={e => handleLinkClick(e, '#section1')} to="#section1" > О нас </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={e => handleLinkClick(e, '#section2')} to="#section2" > Преимущества </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={e => handleLinkClick(e, '#section3')} to="#section3" > Принцип работы </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={e => handleLinkClick(e, '#section4')} to="#section4" > Наши проекты </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={e => handleLinkClick(e, '#section5')} to="#section5" > Контакты </Link>
            </li>
            <Button title="Подать заявку" />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header