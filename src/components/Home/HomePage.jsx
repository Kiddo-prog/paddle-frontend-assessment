import React, { useState } from 'react'
import styles from './HomePage.module.css'
import { useLocation } from 'react-router-dom'


const HomePage = () => {
const location = useLocation()
const contact = location.pathname.split('/')[1]
  
  return (
    <section className={styles.Container} style={{ filter: contact ? 'blur(5px)' : '', transform: contact ? 'scale(0.9)' : '', transition: contact ? '1s ease-in': ''}}>
        <div style={{
                    background: 'transparent linear-gradient(177deg, #213F72 0%, #1D0040 100%) 0% 0% no-repeat padding-box',
                    borderRadius: '50%',
                    height: '20%',
                    width: '8%',
                    position: 'absolute',
                    right: '15%',
                    top: '38%'
                }}>
                    </div>
                    <div style={{
                        background: 'transparent linear-gradient(177deg, #7F1E7B 0%, #19073B 100%) 0% 0% no-repeat padding-box',
                        borderRadius: '50%',
                        height: '18%',
                        width: '8%',
                        position: 'absolute',
                        left: '10%',
                        top: '18%',
                        opacity: 1
                    }}>
                </div>
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