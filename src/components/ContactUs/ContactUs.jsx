import React from 'react'

import styles from './ContactUs.module.css'

const ContactUs = () => {
  return (
    <section className={styles.CONTACT_FORM_CONTAINER}>
      <div className={styles.CONTACT_FORM_SUB_CONTAINER_ONE} style={{
        flex: '4'
      }}></div>
        <form className={styles.CONTACT_FORM_SUB_CONTAINER_TWO}>
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