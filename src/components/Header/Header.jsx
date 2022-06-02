import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.NavContainer}>   
        <Link to={"/"} className={styles.Link}>METRICKS</Link>
        <div className={styles.NavItems}>
            <DesktopNavItem />
            <Link to='/contact' className={styles.Contact_Link}>contact us</Link>
        </div>
    </nav>
  )
}

const DesktopNavItem = () => {
    return(
        NAV_ITEMS.map(item => (
            <NavItems key={item.label} {...item} />
        ))
    )
}

const NavItems = ({label, href}) => {
    return (
        <div>
            <Link to={href} className={styles.Link}>{label}</Link>
        </div>
    )
}

const NAV_ITEMS = [
    {
        label: 'About us',
        href: '/about'
    }, 
    {
        label: 'blog',
        href: '/blog'
    }
]


export default Header