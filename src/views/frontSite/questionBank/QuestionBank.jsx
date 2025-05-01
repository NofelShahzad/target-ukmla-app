// import React from 'react'
import { Link } from 'react-router-dom'
import './QuestionBank.css'
function QuestionBank() {
  return (
    <main className='py-5'>  
        <div className="container">
        <h1 className="question-bank-heading">Question Bank</h1>
    <p className="question-bank-description">
    At <span className='fw-600'>Target UKMLA</span>, we believe that studying for the <span className='fw-600'>PLAB</span> or <span className='fw-600'>UKMLA</span> doesn’t have to be isolating. Our platform makes preparation more collaborative, clear, and effective.    </p>
    
    
    
    <br />

    <p className='mb-0'> <strong>Clear, concise explanations</strong></p>
    <p className="big-mock-description">We break down tricky questions with explanations that actually make sense—helping you understand, not just memorise.</p>
            
    <br />

    <p className='mb-0'> <strong>Smart High Yield Gems</strong></p>
    <p className="big-mock-description">Think of them as textbooks—only better. Structured by topic and packed with KEY points tailored to what the exam really tests.</p>
    <br />

    <p className='mb-0'> <strong>Unlimited Exam-style Timed Practice Mocks</strong></p>
    <p className="big-mock-description">With your Question Bank subscription, you can create Unlimited Practice Mocks. These will run in exam-style, timed – 180 questions from all categories, timed for 3 hours. You can paused and resume if needed. After finishing, you will be able to see your results and performance, and go through the explanations.</p>
            
    
    
    
    
    
    {/* <p className="question-bank-description">
        We also have revision guides that take you through topics highlighting the most important KEYS for the exam, pretty much like a textbook...
    </p>
    <p className="question-bank-description">
        Sign up for our Question Bank today to gain access to practice by categories, timed mock practices, revision guides, and dedicated study groups.
    </p> */}

    <div className="subscription-box">
        {/* <div className="subscription-icon">
            <span>T</span>
        </div> */}
        <div className="subscription-details">
            <h2 className="subscription-title">Target/UKMLA Question Bank</h2>
            <p className="subscription-description">
            Get full access to thousands of <span className='fw-600'>high-yield questions</span> tailored for both the <span className='fw-600'>PLAB 1</span> and <span className='fw-600'>UKMLA AKT</span> exams. Each question comes with clear, exam-focused explanations to boost your understanding and confidence.
            </p>
            <ul className='no-bullets'>
                <li><span className='pe-1'>✔️</span> Practice by category</li>
                <li><span className='pe-1'>✔️</span> Unlimited Timed Practice Mocks </li>
                <li><span className='pe-1'>✔️</span> In-depth High Yield Gems </li>
                <li><span className='pe-1'>✔️</span> Dedicated study groups by exam date/location </li>
            </ul>
            <strong>Subscription Options</strong>
            <ul>
                <li className="subscription-description mb-0">
                    <span>Basic plan:</span> 1 month access - £15
                </li>
                <li className="subscription-description mb-0">
                    <span>Standards plan:</span> 3 months access - £20
                </li>
                <li className="subscription-description mb-0">
                    <span>Premium plan:</span> 5 months access - £25
                </li>
            </ul>
            {/* <p className="subscription-description">
                <span>Subscription:</span> £20 for 3 months or £25 for 5 months
            </p> */}
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