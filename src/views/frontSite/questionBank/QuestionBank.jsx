// import React from 'react'
import { Link } from 'react-router-dom'
import './QuestionBank.css'
function QuestionBank() {
  return (
    <main className='pt-5'>  
        <div className="container">
        <h1 className="question-bank-heading">Question Bank</h1>
    <p className="question-bank-description">
        Our primary aim is to make PLAB or MLA studying more sociable. We provide explanations to PLAB and MLA questions that many may find confusing...
    </p>
    <p className="question-bank-description">
        We also have revision guides that take you through topics highlighting the most important KEYS for the exam, pretty much like a textbook...
    </p>
    <p className="question-bank-description">
        Sign up for our Question Bank today to gain access to practice by categories, timed mock practices, revision guides, and dedicated study groups.
    </p>

    <div className="subscription-box">
        <div className="subscription-icon">
            <span>T</span>
        </div>
        <div className="subscription-details">
            <h2 className="subscription-title">Target/UKMLA Question Bank</h2>
            <p className="subscription-description">
                Gain access to more than 4,300 questions with explanations for the PLAB Part 1 exam and the MLA Applied Knowledge Test (AKT) including practice by categories, timed mock practices, revision guides, and dedicated study groups.
            </p>
            <p className="subscription-description">
                <span>Subscription:</span> £20 for 3 months or £25 for 5 months
            </p>
            <p className="subscription-description">
                <span>Optional:</span> £10 for Gems Add-on
            </p>
            <p className="subscription-description">
                Please note each subscription is valid for one attempt with the option to reset for a fee.
            </p>
        <Link to='/signup' className="signup-button">Sign Up</Link>
        </div>
    </div>
        </div>
    </main>
  )
}

export default QuestionBank