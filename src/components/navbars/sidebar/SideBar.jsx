import './SideBar.css'
import logo from '../../../assets/logo/TARGET-UKMLA.png'
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
                <img src={logo} width={'100%'}/>
            </div>
            <ul className='sidebar-menu'>
                <li>
                    <NavLink to='/dashboard'>
                        <img src={homeIcon} alt='home icon' />
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/question-bank'>
                        <img src={questionBankIcon} alt='question bank icon' />
                        Question Bank
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/big-mock'>
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
                    <NavLink to='/contact-us'>
                        <img src={contactUsIcon} alt='contact us icon' />
                        Contact Us
                    </NavLink>
                </li>
            </ul>
            <ul className='sidebar-social-links'>
                <li>
                    <Link to='/'>
                        <img src={facebookIcon} alt='facebook icon' />
                        FaceBook
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <img src={youtubeIcon} alt='youtube icon' />
                        Youtube
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <img src={instaIcon} alt='instagram icon' />
                        Instagram
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar