// import React from 'react'
import { useState } from 'react';
import './DashboardHeader.css';
import otherLinksIcon from '../../../assets/icons/dashboard/other-links-icon.svg';
import notificationIcon from '../../../assets/icons/dashboard/noti-icon.svg';
import profileIcon from '../../../assets/icons/dashboard/profile-icon.svg';
import downArrow from '../../../assets/icons/dashboard/arrow-down-icon.svg';
import searchIcon from '../../../assets/icons/dashboard/search-icon.svg'
import { Link } from 'react-router-dom';
import NotificationList from './NotificationList';
function DashboardHeader() {
  const [navSearch, setNavSearch] = useState("");
  const handleChange = (e) => {
    setNavSearch(e.target.value)
  }

  return (
    <header className='dashboard-header-wrapper'>
      <div className='container'>
        <nav>
          <div className='col-xl-6 search-field-container'>
            <input type="text"
              defaultValue={navSearch}
              onChange={(e) => handleChange(e)}
              placeholder='Search by Keyword (e.g. Asthma) or Question Code (e.g. GY 2042)'
            />
            <img src={searchIcon} alt="search icon" />
          </div>

          <ul className='nav-body'>
            <li className='nav-resources-container'>
              <div className='dropdown'>
              <div className='item'> <span> Resources</span>
                  <img src={downArrow} alt='arrow icons' />
                </div>
                <ul className="menu-dropdown">
                  <li>
                    <Link className="nav-link" to="/">
                      <div className='dropmenu-item'><span>Revision Course </span></div>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/">
                      <div className='dropmenu-item'><span>Big Mock </span> </div>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/">
                      <span>Webinars</span>
                    </Link>
                  </li>

                </ul>

              </div>
            </li>

            <li className='nav-question-bank-container'>
              <div className='dropdown'>
                <div className='item'> <span> Question Bank</span>
                  <img src={downArrow} alt='arrow icons' />
                </div>
                <ul className="menu-dropdown">
                  <li>
                    <div className="nav-link" to="/">
                      <div className='dropmenu-item'><span>Questions</span><img src={downArrow} alt='other icons' /></div>
                      <ul className='dropdown-submenu'>
                        <li><Link to='/'> Flagged Questions</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="nav-link" to="/">
                      <div className='dropmenu-item'><span>Revision Guides</span> <img src={downArrow} alt='other icons' /></div>
                      <ul className='dropdown-submenu'>
                          <li><Link to='/'>All Guides</Link></li>
                          <li><Link to='/'>Gems</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link className="nav-link" to="/">
                      <span>Gems</span>
                    </Link>
                  </li>

                </ul>
              </div>
            </li>

            <li className='nav-notification-container'>
              <div className='nav-icon-container'>
                <img src={notificationIcon} alt='arrow icons' />
                <div className='notification-dropdown-wrapper'>
                  <NotificationList notifications={""}/>
                </div>
              </div>
            </li>

            <li className='nav-profile-container'>
              <div className='nav-icon-container'>
                <img src={profileIcon} alt='arrow icons' />
                <ul className="menu-dropdown">
                  <li>
                    <Link className="nav-link" href="/">
                      <span>Account</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" href="/">
                      <span>Change Password</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" href="/">
                      <span>Log out</span>
                    </Link>
                  </li>

                </ul>
              </div>
            </li>

            <li className='nav-otherlinksIcon-container'>
              <div className='nav-icon-container'>
                <img src={otherLinksIcon} alt='other icons' />
                <ul className="menu-dropdown">
                  <li>
                    <Link className="nav-link" href="/quotation">
                      <span>About us</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" href="/contracts">
                      <span>News</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" href="/contracts">
                      <span>FAQ</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" href="/contracts">
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </div>


            </li>
          </ul>

        </nav>

      </div>
    </header>
  )
}

export default DashboardHeader