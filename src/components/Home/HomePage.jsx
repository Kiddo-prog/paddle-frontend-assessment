import React from 'react'
import styles from './HomePage.module.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <section className={styles.Main_Container}>
        <Header />
        <div className={styles.Container}>
        <div>
            <h1 className={styles.Heading}>something awesome is coming soon</h1>
            <p className={styles.HeadingText}>Your all-in-one affiliate marketing tracking software <b>track, automate</b> and <b>optimize</b> your campaigns</p>
        </div>

        <div className={styles.HOME_COUNTDOWN}>
            <Timer />
        </div>

        <form className={styles.WAITING_FORM}>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />

            <div className={styles.EMAIL_FIELD_CONTAINER}>
                <input type="email" placeholder='Enter your email address' 
                    style={{
                      padding: '0.6em',
                      outline: 'none',
                      border: 'none',
                      width: '100%',
                      borderRadius: '51px'
                    }}
                />
                <button type="submit" style={{
                    cursor: 'pointer', 
                    textTransform: 'uppercase', 
                    background: '#271AC1 0% 0% no-repeat padding-box', 
                    boxShadow: '0px 0px 10px #09090991',
                    borderRadius: '60px',
                    transform: 'translateX(-40px)',
                    padding: '0.6em',
                    color: '#ffffff',
                    fontSize: '0.9em',
                    width: '70%',
                    border: 'none'
                }}>
                        join our waiting list
                </button>
            </div>
        </form>

    </div>
        <Footer />
    </section>
  )
}

const Timer = () => {
    return (
        <>
            {
                COUNTDOWN_TIMER.map(time => (
                    <div key={time.time} style={{
                        background: '#FFFFFF 0% 0% no-repeat padding-box',
                        color: '#000000',
                        padding: '0.5em 1em',
                        borderRadius: '9px',
                        fontWeight: '900',
                        fontSize: '1.7em'
                    }}>
                        {time.time}
                        <div style={{
                            fontSize: '12px',
                            textTransform: 'capitalize',
                            fontWeight: '500'
                        }}>
                            {time.week}
                        </div>
                    </div>  
                ))
            }
        </>
    )
}

const COUNTDOWN_TIMER = [
    {
        time: 7,
        week: 'days'
    },
    {
        time: 24,
        week: 'Hours'
    },
    {
        time: 54,
        week: 'Minutes'
    },
    {
        time: 11,
        week: 'seconds'
    }
]

export default HomePage