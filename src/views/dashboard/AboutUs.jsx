import React from 'react'

function AboutUs() {
    return (
        <div className='container pt-3'>
            <h2 className="big-mock-heading">About Us</h2>
            <p className="big-mock-description">
                <span className="fw-600">Target UKMLA</span> is a dedicated exam prep platform created by the team behind <span className='fw-600'>Target Med</span>—a trusted name in high-quality medical education.</p>
            <p className="big-mock-description">
                We focus on helping medical students and international doctors prepare effectively for the <span className='fw-600'> UKMLA Applied Knowledge Test (AKT)</span> and <span className='fw-600'>PLAB Part 1</span>. Our mission is simple:
                Make revision focused, high-yield, and actually enjoyable.
            </p>

            <br />

            <p className='mb-0'> <strong>Expert-Crafted Content</strong></p>
            <p className="big-mock-description">All of our questions, explanations, and revision materials are written and peer-reviewed by experienced <span className='fw-600'>senior doctors</span>, <span className='fw-600'>GPs</span>, and <span className='fw-600'>UK-based educators</span>. We ensure every piece of content reflects the <span className='fw-600'>MLA content map</span> and matches the difficulty level of the actual exams.</p>
            
            <br />
            
            <p className='mb-0'> <strong>Built for Real Candidates</strong></p>
            <p className="big-mock-description">We’ve worked closely with those who’ve recently sat the PLAB and UKMLA exams, so our resources reflect what you’ll actually face—no fluff, no filler.
                Whether you’re a final-year UK medical student or an international graduate aiming to practise in the NHS, <span className='fw-600'> Target UKMLA</span> is here to help you pass with confidence.
            </p>
        </div>
    )
}

export default AboutUs
