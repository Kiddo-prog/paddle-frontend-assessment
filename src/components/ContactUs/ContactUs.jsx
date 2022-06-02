import React from 'react'

import styles from './ContactUs.module.css'
import { useNavigate, useLocation } from 'react-router-dom'


const ContactUs = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const contact = location.pathname.split('/')[1]
  return (
    <section className={styles.CONTACT_FORM_CONTAINER}>
      <div className={styles.CONTACT_FORM_SUB_CONTAINER_ONE} style={{
        flex: '4'
      }}></div>
        <form className={styles.CONTACT_FORM_SUB_CONTAINER_TWO} style={{transition: contact ? '1s ease-in' : '' }} onAnimationEnd={contact ? '1s ease-in' : '' }>
          <div style={{
            position: 'relative',
            width: '20%',
            transform: 'translate(-130%, -30%)',
            cursor: 'pointer'
          }}
          onClick={() => {navigate('/')}}
          ><svg clip-rule="evenodd" fill='white' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.007 2c-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997s9.998-4.48 9.998-9.997c0-5.518-4.48-9.998-9.998-9.998zm1.523 6.21s1.502 1.505 3.255 3.259c.147.147.22.339.22.531s-.073.383-.22.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.531-.221-.292-.293-.294-.766-.003-1.057l1.977-1.977h-6.693c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.693l-1.978-1.979c-.29-.289-.287-.762.006-1.054.147-.147.339-.221.53-.222.19 0 .38.071.524.215z" fill-rule="nonzero"/></svg></div>
            <h1 className={styles.CONTACT_FORM_SUB_CONTAINER_TWO_HEADING}>Hey, we are still in the works,<br /> but you can send us a message</h1>
            <label htmlFor="first-name">First name</label>
            <input type="text" placeholder='Enter your first name' />
            <label htmlFor="last-name">Last name</label>
            <input type="text" placeholder='Enter your last name' />
            <label htmlFor="Email">Email Address</label>
            <input type="text" placeholder='Enter your email address' />
            <label htmlFor="about">Tell Us What You Need Help With</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter a Topic, Like "Channel Problem...'></textarea>
            <button type="submit">send now</button>
        </form>
    </section>
  )
}

export default ContactUs