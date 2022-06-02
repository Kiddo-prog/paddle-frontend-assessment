import React from 'react'
import { Link } from 'react-router-dom'
import item from '../../data.json'
import styles from './AboutUs.module.css'

const Aboutus = () => {
  return (
    <main>
        <div className={styles.ABOUT_MAIN_HEADING_CONTAINER}>
            <div className={styles.ABOUT_HEADER_ONE}>
                <h5 className={styles.ABOUT_US_HEADING}>ABOUT US</h5>
                <h1 className={styles.ABOUT_US_SUB_HEADING}>Built for SaaS and E-commerce</h1>
            </div>

            <div className={styles.ABOUT_HEADER_TWO} style={{
                fontSize: '0.8em'
            }}>
                {item.About}
            </div>
        </div>


        <section>
            <h1 className={styles.ABOUT_HEADING}>Metricks was developed because just like you, we needed a product that could give us <b>good value</b></h1>

            <div className={styles.WHY_CONTAINER}>
                <div className={styles.WHY_SUB_CONTAINER_ONE}>
                    <h5 className={styles.WHY_SUB_HEADING_ONE}>why us?</h5>
                    {item.Why.description}
                </div>

                <div className={styles.WHY_SUB_CONTAINER_TWO}>
                    <h5 className={styles.WHY_SUB_HEADING_TWO}>Growing with you </h5>
                    <p>
                        {item.Why2.description}
                    </p>
                    <p>
                        {item.Why3.description}
                    </p>
                </div>
            </div>
        </section>

        <section className={styles.QUESTION_CONTAINER}>
            <h2 className={styles.QUESTION_HEADING}>Got a Question?</h2>
            <p className={styles.QUESTION_TEXT}>See how Metricks can help your business grow with the best affiliate marketing tracking software</p>
            <Link to={'/contact'} className={styles.QUESTION_CONTACT_LINK}>contact us</Link>
        </section>
    </main>
  )
}

export default Aboutus