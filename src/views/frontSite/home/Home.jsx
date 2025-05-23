import './home.css'
// import videoSrcOne from './assets/videos/video_one.mp4'
// import aim_one from './assets/images/aim_one.png'
// import aim_two from './assets/images/aim_two.png'
// import aim_three from './assets/images/aim_three.png'
// import video_img from './assets/images/video_img.jpeg'
import questionBank from './assets/images/question-bank.jpeg'
import practiceMocks from './assets/images/practice-mocks.webp'
import webinars from './assets/images/webinars.webp'
import bigMocks from './assets/images/big-mocks.webp'
import gems from './assets/images/gems.webp'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <main>
        <section className="banner_container">
                <div className="banner_wrapper flex_center">
                    <div className="banner_video">
                        {/* <video src={videoSrcOne} muted autoPlay playsInline loop></video> */}
                        <div className="video_overlay"></div>
                    </div>
                    <div className="container flex_center">
                        <div className="banner_text_box flex_center">
                            <h1>
                            Planning to take the UKMLA or looking to kickstart your medical career in the UK?
                            </h1>
                            <p>
                            Join a growing community of medical students and international doctors using Target UKMLA to master the Medical Licensing Assessment (MLA) Applied Knowledge Test (AKT). Our extensive question bank is crafted by UK-based doctors, educators, and recent test-takers to reflect the real exam and the MLA content map. Whether you’re preparing for the UKMLA AKT or the PLAB 1, our high-yield, exam-focused resources are designed to help you succeed—confidently and efficiently.
                                 {/* Find out more here: */}
                            </p>
                            {/* <div className="banner_buttons">
                                <button>PLAB</button>
                                <button>MLA</button>
                            </div> */}
                        </div>
                    </div>
                </div>
        </section>

        <section className="motive_section_container">
                <div className="container">
                    <div className="motive_content">
                        <h2 className="text-center flex-center">
                        We make studying more connected—and a lot less lonely
                        </h2>
                        {/* <div className="row mt-4">
                            <div
                                className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center align-items-md-start align-items-sm-center"
                            >
                                <div className="motive_img">
                                    <img src={aim_one} alt="aim_image" />
                                </div>
                                <div className="custom-card">
                                        <h2>Collaborate through comments</h2>
                                    <p className="text-center text-sm-center my-3 my-md-0">
                                    Every question has a discussion space where you can exchange insights, clarify doubts, and learn from others preparing for the UKMLA or PLAB.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center align-items-md-start align-items-sm-center"
                            >
                                <div className="motive_img">
                                    <img src={aim_two} alt="aim_image" />
                                </div>
                              <div className="custom-card">
                                  <h2>Join focused WhatsApp groups</h2>
                                  <p className="text-center text-sm-center my-3 my-md-0">
                                      Connect with fellow candidates sitting the exam at the same time and in the same region. Share resources, tips, and support each other right up to exam day.
                                  </p>
                              </div>
                            </div>
                            <div
                                className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center align-items-md-start align-items-sm-center"
                            >
                                <div className="motive_img">
                                    <img src={aim_three} alt="aim_image" />
                                </div>
                                <div className="custom-card">
                                    <h2>Smart revision guides that actually make sense</h2>
                                    <p className="text-center text-sm-center my-3 my-md-0">
                                    Our topic-based revision notes break down key concepts by clinical category—concise, high-yield, and designed to feel like the textbook you wish you had.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                      <div className="row mt-4">
                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center align-items-md-start align-items-sm-center">
                            <div className="flip-card first-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className='overlay'></div>
                                        <p className="title">Collaborate through comments</p>
                                        {/* <p>Hover Me</p> */}
                                    </div>
                                    <div className="flip-card-back">
                                        <div className='overlay'></div>
                                        {/* <p className="title">Collaborate through comments</p> */}
                                        <p>Every question has a discussion space where you can exchange insights, clarify doubts, and learn from others preparing for the UKMLA or PLAB.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center align-items-md-start align-items-sm-center">
                            <div className="flip-card second-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <div className='overlay'></div>
                                        <p className="title">Join focused WhatsApp groups</p>
                                        {/* <p>Hover Me</p> */}
                                    </div>
                                    <div className="flip-card-back">
                                        <div className='overlay'></div>
                                        {/* <p className="title">Collaborate through comments</p> */}
                                        <p>
                                            Connect with fellow candidates sitting the exam at the same time and in the same region. Share resources, tips, and support each other right up to exam day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center align-items-md-start align-items-sm-center">
                            <div className="flip-card third-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                    <div className='overlay'></div>
                                        <p className="title">Smart revision guides that actually make sense</p>
                                        {/* <p>Hover Me</p> */}
                                    </div>
                                    <div className="flip-card-back">
                                        <div className='overlay'></div>
                                        {/* <p className="title">Smart revision guides that actually make sense</p> */}
                                        <p>
                                        Our topic-based revision notes break down key concepts by clinical category—concise, high-yield, and designed to feel like the textbook you wish you had.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
        </section>

          <section className='resources-wrapper py-5'>
              <div className="container">
              <h2 className="my-3 resources-title">Helpful Resources</h2>
                <div className='services-card-grid'>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className="services-card">
                            <div className="card-content">
                                <div className="card-image">
                                    <img src={questionBank} alt=""/>
                                    <div className="glow"></div>
                                    {/* <i className="fas fa-shield-alt fa-2x"></i> */}
                                </div>
                                <h2><i className="fas fa-check-circle"></i> Question Bank</h2>
                                <p>With Question Bank you will be able to see your results and performance, and go through the explanations.</p>
                                <Link to='/question-bank'><i className="fas fa-arrow-right"></i> View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className="services-card">
                            <div className="card-content">
                                <div className="card-image">
                                <img src={practiceMocks} alt=""/>
                                    <div className="glow"></div>
                                    {/* <i className="fas fa-shield-alt fa-2x"></i> */}
                                </div>
                                <h2><i className="fas fa-check-circle"></i> Practice Mocks</h2>
                                <p>With your Question Bank subscription, you can create Unlimited Practice Mocks.After finishing, you will be able to see your results and performance, and go through the explanations</p>
                                <Link to='/question-bank'><i className="fas fa-arrow-right"></i> View More</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className="services-card">
                            <div className="card-content">
                                <div className="card-image">
                                <img src={webinars} alt=""/>
                                    <div className="glow"></div>
                                    <i className="fas fa-shield-alt fa-2x"></i>
                                </div>
                                <h2><i className="fas fa-check-circle"></i> Webinars</h2>
                                <p>We’re currently preparing more high-yield sessions to support your UKMLA and PLAB 1 prep.</p>
                                <Link to={'/webinar'}><i className="fas fa-arrow-right"></i> View More</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className="services-card">
                            <div className="card-content">
                                <div className="card-image">
                                <img src={bigMocks} alt=""/>
                                    <div className="glow"></div>
                                    {/* <i className="fas fa-shield-alt fa-2x"></i> */}
                                </div>
                                <h2><i className="fas fa-check-circle"></i> Big Mocks</h2>
                                <p>180 brand-new high-yield questions—not found in the main Question Bank—designed to truly test your readiness for PLAB 1 and the UKMLA AKT.</p>
                                <Link to='/mocks'><i className="fas fa-arrow-right"></i> View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4'>
                        <div className="services-card">
                            <div className="card-content">
                                <div className="card-image">
                                <img src={gems} alt=""/>
                                    <div className="glow"></div>
                                    {/* <i className="fas fa-shield-alt fa-2x"></i> */}
                                </div>
                                <h2><i className="fas fa-check-circle"></i> Gems</h2>
                                <p>Think of them as textbooks—only better. Structured by topic and packed with KEY points tailored to what the exam really tests.</p>
                                <Link to='/gem'><i className="fas fa-arrow-right"></i> View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </section>

        <section className="whyus_section flex_center">
                <div className="container">
                    <div className="whyus_part row align-items-center">
                        {/* <div className="why_video col-12 col-lg-5">
                            <div className="video">
                                <video controls="controls" poster={video_img}>
                                    <source src={videoSrcOne} type="video/mp4" />
                                </video>
                            </div>
                        </div> */}
                        <div className="why_content col-12 col-lg-7">
                            <h2>Why choose Target UKMLA?</h2>
                            <p>
                                We’ve created thousands of <span className='fw-600'>high-yield MCQs</span> designed to mirror the real level and style of the <span className='fw-600'>PLAB 1</span> and the <span className='fw-600'>UKMLA Applied Knowledge Test (AKT)</span>. Each question comes with clear, focused explanations that highlight key clinical concepts—helping you learn faster and retain more. Our goal? To give you the best possible chance of passing first time.
                            </p>
                            <div className="why_action">
                                {/* <button type="button" className="el-button el-button--primary is-plain">
                                    <span>Start FREE Trial</span>
                                </button> */}
                                <Link to='/signup' className="el-button el-button--primary my-2 w-100">
                                    <span>Sign Up</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </section>


        <section
                className="signup_section flex_center"
            >
                <div className="signup_overlay"></div>
                <div className="container">
                    <div className="signup_section_bg flex_center">
                        <div className="signup_section_content">
                            <h2>Sign up with Target UKMLA today</h2>
                            <span>
                            Start your journey to UK medical registration with the support of a growing community of future doctors. Thousands of candidates trust <span className='fw-600'>Target UKMLA</span> to help them succeed in the <span className='fw-600'>PLAB 1</span> and <span className='fw-600'>UKMLA AKT</span>. Join them—and take the next step with confidence.</span>
                            <div>
                                <Link to={'/signup'} className="el-button el-button--primary is-plain">
                                    <span>Sign Up</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </main>
  )
}

export default Home