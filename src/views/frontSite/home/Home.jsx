import './home.css'
import videoSrcOne from './assets/videos/video_one.mp4'
import aim_one from './assets/images/aim_one.png'
import aim_two from './assets/images/aim_two.png'
import aim_three from './assets/images/aim_three.png'
import video_img from './assets/images/video_img.jpeg'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <main>
        <section className="banner_container">
                <div className="banner_wrapper flex_center">
                    <div className="banner_video">
                        <video src={videoSrcOne} muted autoPlay playsInline loop></video>
                        <div className="video_overlay"></div>
                    </div>
                    <div className="container flex_center">
                        <div className="banner_text_box flex_center">
                            <h1>
                                Are you a medical student or international doctor planning to work
                                in the UK?
                            </h1>
                            <p>
                                Join thousands of others using Plabable to ace the Professional and
                                Linguistic Assessment Board (PLAB) part 1 and Medical Licensing
                                Assessment (MLA) Applied Knowledge Test (AKT). We offer thousands of
                                high-yield questions written and reviewed by ourselves, our NHS
                                colleagues and those who have passed the exams. Our resources are
                                specifically designed to cater to the needs of two major exams: The
                                PLAB exam (for international medical graduates) and the UK MLA AKT
                                (for UK medical students). They both are set at similar levels and
                                share the same MLA content map.
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
                        <h2 className="text-center text-md-start text-sm-center flex-center">
                            We aim to make studying more sociable
                        </h2>
                        <div className="row mt-4">
                            <div
                                className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center align-items-md-start align-items-sm-center"
                            >
                                <div className="motive_img">
                                    <img src={aim_one} alt="aim_image" />
                                </div>
                                <p className="text-center text-md-start text-sm-center my-3 my-md-0">
                                    Exchange opinions with other candidates via each questionʼs
                                    comments section.
                                </p>
                            </div>
                            <div
                                className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center align-items-md-start align-items-sm-center"
                            >
                                <div className="motive_img">
                                    <img src={aim_two} alt="aim_image" />
                                </div>
                                <p className="text-center text-md-start text-sm-center my-3 my-md-0">
                                    Dedicated Whatsapp groups for members sitting for the exam based
                                    on location and date of the exam.
                                </p>
                            </div>
                            <div
                                className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column flex-md-row align-items-center align-items-md-start align-items-sm-center"
                            >
                                <div className="motive_img">
                                    <img src={aim_three} alt="aim_image" />
                                </div>
                                <p className="text-center text-md-start text-sm-center my-3 my-md-0">
                                    Revision guides that take you through topics and clinical
                                    categories highlighting the most important KEYS for the exam,
                                    pretty much like a textbook (but better).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        <section className="whyus_section flex_center">
                <div className="container">
                    <div className="whyus_part row align-items-center">
                        <div className="why_video col-12 col-lg-5">
                            <div className="video">
                                <video controls="controls" poster={video_img}>
                                    <source src={videoSrcOne} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="why_content col-12 col-lg-5">
                            <h2>Why choose Plabable?</h2>
                            <p
                                >We have written more than 4300 high-yield questions that mimic the
                                level of the PLAB part 1 exam and the United Kingdom Medical
                                Licensing Assessment (UKMLA) or the Medical Licensing Assessment
                                (MLA). Our explanations aim to deliver concise learning points,
                                giving you the best opportunity to pass on the first attempt.
                            </p>
                            <div className="why_action">
                                <button type="button" className="el-button el-button--primary is-plain">
                                    <span>Start FREE Trial</span>
                                </button>
                                <button type="button" className="el-button el-button--primary my-2">
                                    <span>Sign Up</span>
                                </button>
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
                            <h2>Sign up with Plabable today</h2>
                            <span
                                >Embark on your journey to success by joining the thriving community
                                of Plabable users worldwide. Join thousands of individuals who rely
                                on Plabable to conquer the PLAB exam or diligently prepare for the
                                United Kingdom Medical Licensing Assessment (UKMLA).</span>
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