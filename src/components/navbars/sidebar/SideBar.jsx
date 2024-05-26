import './SideBar.css'
import logo from '../../../assets/icons/dashboard/TARGET-UKMLA.svg'
import homeIcon from '../../../assets/icons/home-icon.svg';
import questionBankIcon from '../../../assets/icons/question-bank.svg';
import bigMockIcon from '../../../assets/icons/big-mock.svg';
import webinarIcon from '../../../assets/icons/webinar-icon.svg';
import contactUsIcon from '../../../assets/icons/contact-us-icon.svg';
import facebookIcon from '../../../assets/icons/facebook-icon.svg';
import youtubeIcon from '../../../assets/icons/youtube-icon.svg';
import instaIcon from '../../../assets/icons/insta-icon.svg';


import { Link, NavLink } from 'react-router-dom'
function SideBar() {
    return (
        <aside className="sidebar">
            <div className='logo-wrapper'>
            <NavLink to='/dashboard'>
                <img src={logo} width={'100%'}/>
                </NavLink>
            </div>
            <div className='sidebar-body'>
                <ul className='sidebar-menu'>
                    <li>
                        <NavLink to='/dashboard'>
                            <img src={homeIcon} alt='home icon' />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/questions-bank'>
                            <img src={questionBankIcon} alt='question bank icon' />
                            Question Bank
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/big-mocks'>
                            <img src={bigMockIcon} alt='big mock icon' />
                            Big Mock
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/webinars'>
                            <img src={webinarIcon} alt='webinar icon' />
                            Webinars
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus'>
                            <img src={contactUsIcon} alt='contact us icon' />
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <ul className='sidebar-social-links'>
                    <li>
                        <Link to='/'>
                            <div className='social-icon'>
                                <img src={facebookIcon} alt='facebook icon' />
                            </div>
                            <span> FaceBook</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='social-icon'>
                                <img src={youtubeIcon} alt='youtube icon' />
                            </div>
                            <span> Youtube</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='social-icon'>
                                <img src={instaIcon} alt='instagram icon' />
                            </div>
                            <span> Instagram</span>
                        </Link>
                    </li>
                </ul>

            </div>
        </aside>
    )
}

export default SideBar