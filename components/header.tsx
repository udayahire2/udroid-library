import React from 'react'
import '../components/components.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="logo">UDROID</div>
       <div className="nav">
        <span>Doc</span>
        <span>Component</span>
        <span>Roadmap</span>
        <div className="right">
        <button>Explore Now</button>
       </div>
       </div>
       
    </div>
  )
}

export default Header