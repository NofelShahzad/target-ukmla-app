// import React from 'react'
import { useState } from 'react';
import  './DashboardHeader.css'
import otherLinks from '../../../assets/icons/dashboard/other-links-icon.svg'
function DashboardHeader() {
  const [navSearch,setNavSearch] = useState("");
  const handleChange = (e) => {
    setNavSearch(e.target.value)
  }
  
  return (
    <header className='dashboard-header-wrapper'>
      <div className='container'>
        <nav>
          <input type="text" 
            defaultValue={navSearch} 
            onChange={(e)=>handleChange(e)} 
            placeholder='Search by Keyword (e.g. Asthma) or Question Code (e.g. GY 2042)'
          />

          <div className='nav-body'>
              <div className='nav-resources-container'>
                      
              </div>

              <div className='nav-question-bank-container'>

              </div>

              <div className='nav-notification-container'>

              </div>
              
              <div className='nav-profile-container'>
                
              </div>

              <div className='nav-otherlinks-container'>
                    <div className='nav-icon-container'>
                      <img src={otherLinks} alt='other icons'/>
                    </div>

              </div>
          </div>

        </nav>

      </div>
    </header>
  )
}

export default DashboardHeader