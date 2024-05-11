// import React from 'react'
import { useState } from 'react';
import  './DashboardHeader.css'
function DashboardHeader() {
  const [navSearch,setNavSearch] = useState("");
  const handleChange = (e) => {
    setNavSearch(e.target.value)
  }
  
  return (
    <header className='dash-header-wrapper'>
      <div className='container'>
        <nav>
          <input type="text" 
            defaultValue={navSearch} 
            onChange={(e)=>handleChange(e)} 
            placeholder='Search by Keyword (e.g. Asthma) or Question Code (e.g. GY 2042)'
          />

          <div className=''>
            
          </div>

        </nav>

      </div>
    </header>
  )
}

export default DashboardHeader