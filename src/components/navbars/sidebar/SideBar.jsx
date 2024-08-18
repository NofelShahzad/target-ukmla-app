import './SideBar.css'
import logo from '../../../assets/logo/logo-svg-svg.png'
// import homeIcon from '../../../assets/icons/home-icon.svg';
// import questionBankIcon from '../../../assets/icons/question-bank.svg';
// import bigMockIcon from '../../../assets/icons/big-mock.svg';
// import webinarIcon from '../../../assets/icons/webinar-icon.svg';
// import contactUsIcon from '../../../assets/icons/contact-us-icon.svg';
// import facebookIcon from '../../../assets/icons/facebook-icon.svg';
// import youtubeIcon from '../../../assets/icons/youtube-icon.svg';
// import instaIcon from '../../../assets/icons/insta-icon.svg';


import { Link, NavLink } from 'react-router-dom'
function SideBar({toogleSideBar, sidebar}) {
    return (
        <aside className={`sidebar-wrapper ${sidebar ? ' close' : ''}`}>
            <div className='logo-wrapper' onClick={toogleSideBar}>
                {/* <NavLink to='/'> */}
                <div className='logo-container'>
                    <img src={logo} width={'100%'} />
                </div>
                    <span className='text-danger pe-1'>Target</span> <span className='text-primary'> Ukmla</span>
                {/* </NavLink> */}
            </div>
            <div className='sidebar-body'>
                <ul className='sidebar-menu'>
                    <li>
                        <NavLink to='/'>
                            {/* <img src={homeIcon} alt='home icon' /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="17.585" height="18.51" viewBox="0 0 17.585 18.51">
                                <g id="Iconly_Bold_Home" data-name="Iconly/Bold/Home" transform="translate(-2.5 -2)">
                                    <g id="Home" transform="translate(2.5 2)">
                                        <path id="Path_12" data-name="Path 12" d="M6.141,17.375v-2.83a1.313,1.313,0,0,1,1.318-1.308h2.66a1.322,1.322,0,0,1,.932.383,1.3,1.3,0,0,1,.386.925v2.83a1.123,1.123,0,0,0,.33.8,1.139,1.139,0,0,0,.806.333h1.815a3.2,3.2,0,0,0,2.261-.925,3.156,3.156,0,0,0,.937-2.243V7.281a2.288,2.288,0,0,0-.829-1.76L10.582.626A2.867,2.867,0,0,0,6.928.691L.895,5.52A2.29,2.29,0,0,0,0,7.281v8.054A3.187,3.187,0,0,0,3.2,18.51H4.972a1.14,1.14,0,0,0,1.144-1.127Z" transform="translate(0 0)" />
                                    </g>
                                </g>
                            </svg>

                           <span> Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/questions-bank'>
                            {/* <img src={questionBankIcon} alt='question bank icon' /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.5" height="18.5" viewBox="0 0 18.5 18.5">
                                <g id="Group_42" data-name="Group 42" transform="translate(-41 -180)">
                                    <path id="Path_11" data-name="Path 11" d="M3.362-11.28a2.863,2.863,0,0,1,2,.687,2.41,2.41,0,0,1,.754,1.876,2.24,2.24,0,0,1-.785,1.864,3.248,3.248,0,0,1-2.084.625L3.2-5.26H1.989L1.927-7.185h.4A4.143,4.143,0,0,0,4.153-7.5a1.23,1.23,0,0,0,.631-1.214A1.362,1.362,0,0,0,4.41-9.735,1.414,1.414,0,0,0,3.374-10.1a1.465,1.465,0,0,0-1.042.356,1.293,1.293,0,0,0-.38.993H.64a2.586,2.586,0,0,1,.331-1.312,2.261,2.261,0,0,1,.95-.9A3.105,3.105,0,0,1,3.362-11.28ZM2.577-2.55a.866.866,0,0,1-.638-.257.866.866,0,0,1-.257-.638.866.866,0,0,1,.257-.638.866.866,0,0,1,.638-.257.851.851,0,0,1,.625.257.866.866,0,0,1,.257.638.866.866,0,0,1-.257.638A.851.851,0,0,1,2.577-2.55Z" transform="translate(46.77 196.419)" />
                                    <g id="Iconly_Light-Outline_Close-Square" data-name="Iconly/Light-Outline/Close-Square" transform="translate(41 180)">
                                        <g id="Close-Square">
                                            <path id="Combined-Shape" d="M13.259,0C16.394,0,18.5,2.2,18.5,5.472v7.555c0,3.273-2.106,5.472-5.242,5.472H5.24C2.105,18.5,0,16.3,0,13.028V5.472C0,2.2,2.105,0,5.24,0Zm0,1.388H5.24c-2.34,0-3.853,1.6-3.853,4.085v7.555c0,2.482,1.512,4.085,3.853,4.085h8.018c2.341,0,3.854-1.6,3.854-4.085V5.472C17.112,2.991,15.6,1.388,13.259,1.388Z" fillRule="evenodd" />
                                        </g>
                                    </g>
                                </g>
                            </svg>

                           <span> Question Bank</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/big-mocks'>
                            {/* <img src={bigMockIcon} alt='big mock icon' /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.5" height="18.5" viewBox="0 0 18.5 18.5">
                                <g id="Iconly_Light-Outline_Chart" data-name="Iconly/Light-Outline/Chart" transform="translate(19.5 -1) rotate(90)">
                                    <g id="Chart" transform="translate(1 1)">
                                        <path id="Combined-Shape" d="M13.282,0C16.4,0,18.5,2.191,18.5,5.451v7.6c0,3.26-2.1,5.451-5.218,5.451H5.218C2.1,18.5,0,16.309,0,13.049v-7.6C0,2.191,2.1,0,5.218,0Zm0,1.291H5.218c-2.385,0-3.927,1.632-3.927,4.16v7.6c0,2.528,1.542,4.16,3.927,4.16h8.064c2.386,0,3.927-1.632,3.927-4.16v-7.6C17.209,2.923,15.668,1.291,13.282,1.291ZM5.267,7.058a.646.646,0,0,1,.645.645v5.9a.645.645,0,0,1-1.291,0V7.7A.646.646,0,0,1,5.267,7.058ZM9.283,4.232a.646.646,0,0,1,.645.645v8.728a.645.645,0,1,1-1.291,0V4.878A.646.646,0,0,1,9.283,4.232Zm3.95,5.945a.646.646,0,0,1,.645.645v2.783a.645.645,0,0,1-1.291,0V10.823A.646.646,0,0,1,13.233,10.177Z" fillRule="evenodd" />
                                    </g>
                                </g>
                            </svg>

                            <span> Big Mock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/webinars'>
                            {/* <img src={webinarIcon} alt='webinar icon' /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.5" height="18.5" viewBox="0 0 18.5 18.5">
                                <g id="Iconly_Light-Outline_Play" data-name="Iconly/Light-Outline/Play" transform="translate(-2 -2)">
                                    <g id="Play" transform="translate(2 2)">
                                        <path id="Combined-Shape" d="M9.25,0A9.25,9.25,0,1,1,0,9.25,9.26,9.26,0,0,1,9.25,0Zm0,1.354a7.9,7.9,0,1,0,7.9,7.9A7.905,7.905,0,0,0,9.25,1.354ZM8.872,6.1c.469.2,3.762,1.882,3.762,3.144,0,1.182-2.964,2.835-3.721,3.151a2.587,2.587,0,0,1-.947.238.9.9,0,0,1-.663-.257c-.145-.143-.533-.527-.535-3.053,0-2.682.4-3.081.535-3.214C7.775,5.644,8.544,5.965,8.872,6.1ZM8.243,7.3a16.081,16.081,0,0,0,0,3.918,10.27,10.27,0,0,0,2.971-1.966A10.787,10.787,0,0,0,8.243,7.3Z" fillRule="evenodd" />
                                    </g>
                                </g>
                            </svg>

                           <span>  Webinars</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus'>
                            {/* <img src={contactUsIcon} alt='contact us icon' /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="17.889" height="17.553" viewBox="0 0 17.889 17.553">
                                <g id="Iconly_Light-Outline_Calling" data-name="Iconly/Light-Outline/Calling" transform="translate(-2 -2)">
                                    <g id="Calling" transform="translate(2 2)">
                                        <path id="Combined-Shape" d="M3.988,0c.956.013,1.638.73,2.5,1.636.213.223.444.468.7.724A2.532,2.532,0,0,1,7.8,5.449c-.312.893-.581,1.664,1.033,3.279s2.385,1.345,3.277,1.031a2.532,2.532,0,0,1,3.088.606c.254.254.494.482.717.694.91.867,1.629,1.551,1.642,2.51.009.817-.487,1.651-1.713,2.877l-.543-.368.46.448a3.188,3.188,0,0,1-2.407,1.028h-.026c-2.134,0-4.916-1.7-8.269-5.051S-.012,6.346,0,4.208A3.189,3.189,0,0,1,1.027,1.8l.024-.026h0l.058-.058h0C2.337.488,3.181-.018,3.988,0ZM3.972,1.285H3.965c-.385,0-.968.385-1.783,1.176l-.164.161h0a.523.523,0,0,1-.038.04l-.057.057h0a1.927,1.927,0,0,0-.641,1.5c-.007,1.225.8,3.5,4.679,7.379,3.861,3.86,6.132,4.675,7.361,4.675h.018a1.93,1.93,0,0,0,1.495-.64,1.814,1.814,0,0,1,.146-.138c.854-.859,1.29-1.5,1.286-1.907s-.525-.911-1.243-1.6c-.229-.217-.477-.454-.739-.716-.68-.677-1.015-.562-1.755-.3-1.023.359-2.425.85-4.609-1.336s-1.7-3.586-1.338-4.61c.259-.74.377-1.076-.3-1.756-.265-.265-.5-.517-.724-.748C4.878,1.807,4.387,1.291,3.972,1.285Zm7.371,1.762a4.412,4.412,0,0,1,3.5,3.5.642.642,0,0,1-.507.753.685.685,0,0,1-.124.012.642.642,0,0,1-.629-.519A3.134,3.134,0,0,0,11.1,4.307a.642.642,0,1,1,.245-1.26ZM11.291.005a7.424,7.424,0,0,1,6.595,6.587.642.642,0,0,1-.566.71.691.691,0,0,1-.073,0,.642.642,0,0,1-.637-.57,6.149,6.149,0,0,0-5.461-5.455.642.642,0,0,1-.567-.709A.636.636,0,0,1,11.291.005Z" transform="translate(0 0)" fillRule="evenodd" />
                                    </g>
                                </g>
                            </svg>

                           <span> Contact Us</span>
                        </NavLink>
                    </li>
                </ul>
                <ul className='sidebar-social-links'>
                    <li>
                        <Link to='/'>
                            <div className='social-icon'>
                                {/* <img src={facebookIcon} alt='facebook icon' /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="9.849" height="18.39" viewBox="0 0 9.849 18.39">
                                    <path id="svg4" d="M32.094,10.344,32.6,7.016H29.411V4.856a1.664,1.664,0,0,1,1.876-1.8h1.452V.225A17.7,17.7,0,0,0,30.162,0c-2.63,0-4.349,1.594-4.349,4.48V7.016H22.89v3.328h2.923V18.39h3.6V10.344Z" transform="translate(-22.89)" />
                                </svg>

                            </div>
                            <span> FaceBook</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='social-icon'>
                                {/* <img src={youtubeIcon} alt='youtube icon' /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.229" height="12.818" viewBox="0 0 18.229 12.818">
                                    <path id="svg7" d="M32.782,66.006a2.291,2.291,0,0,0-1.612-1.622A54.131,54.131,0,0,0,24.048,64a54.131,54.131,0,0,0-7.122.383,2.291,2.291,0,0,0-1.612,1.622,25.79,25.79,0,0,0,0,8.832,2.256,2.256,0,0,0,1.612,1.6,54.131,54.131,0,0,0,7.122.383,54.131,54.131,0,0,0,7.122-.383,2.256,2.256,0,0,0,1.612-1.6,25.79,25.79,0,0,0,0-8.832Zm-10.6,7.127V67.711l4.765,2.711Z" transform="translate(-14.933 -64)" />
                                </svg>

                            </div>
                            <span> Youtube</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <div className='social-icon'>
                                {/* <img src={instaIcon} alt='instagram icon' /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.962" height="14.959" viewBox="0 0 14.962 14.959">
                                    <path id="svg5" d="M7.408,35.469A3.835,3.835,0,1,0,11.243,39.3,3.829,3.829,0,0,0,7.408,35.469Zm0,6.329A2.493,2.493,0,1,1,9.9,39.3,2.5,2.5,0,0,1,7.408,41.8Zm4.887-6.486a.895.895,0,1,1-.895-.895A.892.892,0,0,1,12.294,35.312Zm2.54.908a4.427,4.427,0,0,0-1.208-3.134,4.456,4.456,0,0,0-3.134-1.208c-1.235-.07-4.937-.07-6.172,0a4.45,4.45,0,0,0-3.134,1.2A4.441,4.441,0,0,0-.022,36.217c-.07,1.235-.07,4.937,0,6.172a4.427,4.427,0,0,0,1.208,3.134A4.462,4.462,0,0,0,4.32,46.731c1.235.07,4.937.07,6.172,0a4.427,4.427,0,0,0,3.134-1.208,4.456,4.456,0,0,0,1.208-3.134C14.9,41.154,14.9,37.455,14.835,36.22Zm-1.6,7.494a2.524,2.524,0,0,1-1.422,1.422,16.486,16.486,0,0,1-4.409.3A16.614,16.614,0,0,1,3,45.136a2.524,2.524,0,0,1-1.422-1.422,16.486,16.486,0,0,1-.3-4.409,16.615,16.615,0,0,1,.3-4.409A2.524,2.524,0,0,1,3,33.473a16.486,16.486,0,0,1,4.409-.3,16.614,16.614,0,0,1,4.409.3A2.524,2.524,0,0,1,13.239,34.9a16.486,16.486,0,0,1,.3,4.409A16.476,16.476,0,0,1,13.239,43.714Z" transform="translate(0.075 -31.825)" />
                                </svg>

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