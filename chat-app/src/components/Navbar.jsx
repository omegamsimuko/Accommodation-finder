import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Ifinder</span>
      <div className="user">
        <img src="https://fps.cdnpk.net/images/ai/image-generator/gallery/65446.webp" alt=""/>
        <span>Lucy</span>
        <button>Logout</button>
      </div>
      
    </div>
  )
}

export default Navbar