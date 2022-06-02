import React from 'react'
import DATA from '../../data.json'
import styles from './TermsPage.module.css'

const TermsPage = () => {
  return (
    <section className={styles.TERMS_CONTAINER}>
        <h2>Terms of Service</h2>
        <TermsOfService />
        <Definition />
        <Registration />
        <Account />
        <Fees />
        <Taxes />
        <Refund />
        <FeeChanges />
    </section>
  )
}

const TermsOfService = () => {
    return(
        <>
            <h2>1. Website Terms and Condition of Use</h2>
            {DATA.Terms.map(term => (
                <div key={term.terms}>
                    <p>{term.terms}</p>
                </div>
            ))}
        </>
    )
}

const Definition = () => {
    return(
        <>
        <h2>2. Definition</h2>
       { DATA.Definition.map(term => (
            <div key={term.description}>
                <p>{term.description}</p>
            </div>
        ))}
        </>
    )
}

const Registration = () => {
    return (
        <>
            <h2>3. Registration</h2>
            <p>{DATA.Registration}</p>
        </>
    )
}

const Account = () => {
    return (
        <>
        <h2>4. Account</h2>
        {
            DATA.Accounts.map((acc, index) => (
                <div key={index}>
                    <p><span>{acc.index}</span>{acc.description}</p>
                </div>
            ))
        }
        </>
    )
}

const Fees = () => {
    return (
        <>
            <h2>5. Fees</h2>
            {DATA.Fees.map((fee) => (
                <div key={fee.description}>
                    <p>{fee.description}</p>
                </div>
            ))}
        </>
    )
}
const Taxes = () => {
    return (
        <div>
            <h2>6. Taxes</h2>
            {DATA.Taxes}
        </div>
    )
}
const Refund = () => {
    return (
        <div>
            <h2>7. Refund</h2>
            {DATA.Refund}
        </div>
    )
}
const FeeChanges = () => {
    return (
        <div>
            <h2>8. Fee Changes</h2>
            {DATA.FeesChanges.map(fees => (
                <div key={fees.description}>
                    <p>{fees.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TermsPage