// import React from 'react'
import { useState } from 'react';
import './DashboardHeader.css';
import otherLinksIcon from '../../../assets/icons/dashboard/other-links-icon.svg';
import notificationIcon from '../../../assets/icons/dashboard/noti-icon.svg';
import profileIcon from '../../../assets/icons/dashboard/profile-icon.svg';
// import downArrow from '../../../assets/icons/dashboard/arrow-down-icon.svg';
import searchIcon from '../../../assets/icons/dashboard/search-icon.svg'
import { Link } from 'react-router-dom';
import NotificationList from './NotificationList';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/features/auth/authSlice';
import { useLogoutMutation } from '../../../redux/features/auth/authApi';
function DashboardHeader() {
  const dispatch = useDispatch();
  const [navSearch, setNavSearch] = useState("");
  const [logout] =  useLogoutMutation();
  const handleChange = (e) => {
    setNavSearch(e.target.value);
  }

  const handleLogout = async() => {
    dispatch(logoutUser());
    try {
      const { data, error} = await logout();
      if (data) {
        // console.log("data::",data);
        if (data?.status) {
          // console.log(data?.status)
          
        }
        if (!data?.status) {
          // console.log(data?.status)
        }
      }
      if (error) {
        console.log("error::",error);
      }
      
    } catch (err) {
      console.log("err::",err);
    }
  }


  return (
    <header className='dashboard-header-wrapper'>
      <div className='container-fluid'>
        <nav>
          <div className='col-xl-5 search-field-container'>
            {/* <input type="text"
              defaultValue={navSearch}
              onChange={(e) => handleChange(e)}
              placeholder='Search by Keyword (e.g. Asthma) or Question Code (e.g. GY 2042)'
            />
            <img src={searchIcon} alt="search icon" /> */}
          </div>

          <ul className='nav-body'>
            <li className='nav-resources-container'>
              <div className='dropdown'>
                <div className='item'> <span>Additional Resources</span>
                  {/* <img src={downArrow} alt='arrow icons' /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="6.855" viewBox="0 0 12.5 6.855">
                    <g id="Iconly_Light-Outline_Arrow---Down-2" data-name="Iconly/Light-Outline/Arrow---Down-2" transform="translate(-4.25 -7.75)">
                      <g id="Arrow---Down-2" transform="translate(4.25 7.75)">
                        <path id="Stroke-1" d="M.427.427A.6.6,0,0,1,1.215.369l.068.059L6.5,5.644,11.718.427a.6.6,0,0,1,.788-.059l.068.059a.6.6,0,0,1,.059.788l-.059.068L6.928,6.928a.6.6,0,0,1-.788.059l-.068-.059L.427,1.283A.6.6,0,0,1,.427.427Z" transform="translate(-0.25 -0.25)" />
                      </g>
                    </g>
                  </svg>

                </div>
                <ul className="menu-dropdown">
                  {/* <li>
                    <Link className="nav-link" to="/">
                      <div className='dropmenu-item'><span>Revision Course </span></div>
                    </Link>
                  </li> */}
                  <li>
                    <Link className="nav-link" to="/big-mocks">
                      <div className='dropmenu-item'><span>Big Mock </span> </div>
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="nav-link" to="/webinars">
                      <span>Webinars</span>
                    </Link>
                  </li> */}

                </ul>

              </div>
            </li>

            <li className='nav-question-bank-container'>
              <div className='dropdown'>
                <div className='item'> <span> Question Bank</span>
                  {/* <img src={downArrow} alt='arrow icons' /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="6.855" viewBox="0 0 12.5 6.855">
                    <g id="Iconly_Light-Outline_Arrow---Down-2" data-name="Iconly/Light-Outline/Arrow---Down-2" transform="translate(-4.25 -7.75)">
                      <g id="Arrow---Down-2" transform="translate(4.25 7.75)">
                        <path id="Stroke-1" d="M.427.427A.6.6,0,0,1,1.215.369l.068.059L6.5,5.644,11.718.427a.6.6,0,0,1,.788-.059l.068.059a.6.6,0,0,1,.059.788l-.059.068L6.928,6.928a.6.6,0,0,1-.788.059l-.068-.059L.427,1.283A.6.6,0,0,1,.427.427Z" transform="translate(-0.25 -0.25)" />
                      </g>
                    </g>
                  </svg>

                </div>
                <ul className="menu-dropdown">
                  <li>
                    <Link className="nav-link" to="/gems">
                      <span>Gems</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/dashboard">
                      <span>Question Bank</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/questions-bank/flagged-questions">
                      <span>Flagged Questions</span>
                    </Link>
                    {/* <li><Link to='/questions-bank/flagged-questions'> </Link></li> */}
                  </li>
                  <li>
                    <Link className="nav-link" to="/practice-mocks">
                      <div className='dropmenu-item'><span>Practice Mock </span> </div>
                    </Link>
                  </li>

                  {/* <li>
                    <div className="nav-link" to="/">
                      <div className='dropmenu-item'>
                        <span>Questions</span>
                        <img src={downArrow} alt='other icons' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="6.855" viewBox="0 0 12.5 6.855">
                          <g id="Iconly_Light-Outline_Arrow---Down-2" data-name="Iconly/Light-Outline/Arrow---Down-2" transform="translate(-4.25 -7.75)">
                            <g id="Arrow---Down-2" transform="translate(4.25 7.75)">
                              <path id="Stroke-1" d="M.427.427A.6.6,0,0,1,1.215.369l.068.059L6.5,5.644,11.718.427a.6.6,0,0,1,.788-.059l.068.059a.6.6,0,0,1,.059.788l-.059.068L6.928,6.928a.6.6,0,0,1-.788.059l-.068-.059L.427,1.283A.6.6,0,0,1,.427.427Z" transform="translate(-0.25 -0.25)" />
                            </g>
                          </g>
                        </svg>

                      </div>
                      <ul className='dropdown-submenu'>
                        <li><Link to='/questions-bank/flagged-questions'> Flagged Questions</Link></li>
                      </ul>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="nav-link" to="/">
                      <div className='dropmenu-item'>
                        <span>Revision Guides</span>
                        <img src={downArrow} alt='other icons' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="6.855" viewBox="0 0 12.5 6.855">
                          <g id="Iconly_Light-Outline_Arrow---Down-2" data-name="Iconly/Light-Outline/Arrow---Down-2" transform="translate(-4.25 -7.75)">
                            <g id="Arrow---Down-2" transform="translate(4.25 7.75)">
                              <path id="Stroke-1" d="M.427.427A.6.6,0,0,1,1.215.369l.068.059L6.5,5.644,11.718.427a.6.6,0,0,1,.788-.059l.068.059a.6.6,0,0,1,.059.788l-.059.068L6.928,6.928a.6.6,0,0,1-.788.059l-.068-.059L.427,1.283A.6.6,0,0,1,.427.427Z" transform="translate(-0.25 -0.25)" />
                            </g>
                          </g>
                        </svg>

                      </div>
                      <ul className='dropdown-submenu'>
                        <li><Link to='/'>All Guides</Link></li>
                        <li><Link to='/'>Flagged Guides</Link></li>
                      </ul>
                    </div>
                  </li> */}


                </ul>
              </div>
            </li>

            <li className='nav-notification-container'>
              <div className='nav-icon-container'>
                <img src={notificationIcon} alt='arrow icons' />
                <div className='notification-dropdown-wrapper'>
                  <NotificationList notifications={""} />
                </div>
              </div>
            </li>

            <li className='nav-profile-container'>
              <div className='nav-icon-container'>
                <img src={profileIcon} alt='arrow icons' />
                <ul className="menu-dropdown">
                  <li>
                    <Link className="nav-link" to='/account'>
                      <span>Account</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="nav-link" to='/change-password'>
                      <span>Change Password</span>
                    </Link>
                  </li> */}
                  <li>
                    <div className="nav-link" onClick={handleLogout}>
                      <span>Log out</span>
                    </div>
                  </li>

                </ul>
              </div>
            </li>

            <li className='nav-otherlinksIcon-container'>
              <div className='nav-icon-container'>
                <img src={otherLinksIcon} alt='other icons' />
                <ul className="menu-dropdown">
                  <li>
                    <Link className="nav-link" to="/about-us">
                      <span>About us</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="nav-link" href="/contracts">
                      <span>News</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" href="/contracts">
                      <span>FAQ</span>
                    </Link>
                  </li> */}
                  <li>
                    <Link className="nav-link" to={`/contactus`}>
                      <span>Contact Us</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="nav-link" to={`/terms-and-conditions`}>
                      <span>Terms & conditions</span>
                    </Link>
                  </li> */}
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