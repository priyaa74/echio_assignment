import React from 'react'
import {MdNotifications} from 'react-icons/md'
import {HiUserCircle} from 'react-icons/hi'

function Navbar() {
  return (

    <div style={{ width:"80%", margin:"auto", display:'flex',flexDirection:'row', justifyContent:"space-between",alignItems:"center",borderRadius:"30px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <div>
        <img src="https://echio.in/assets/images/logo.png" alt="logo" width="80px" height="30px" style={{marginLeft:"15px"}} />
        </div>
        <div style={{display:'flex',flexDirection:'row',gap:'20px'}} >
          <p>Home</p>
          <p>My campaign</p>
        </div>
        <div>
        <MdNotifications style={{width:"20px",height:"20px",color:"rgb(74,70,70)",marginRight:"15px"}} />
        <HiUserCircle style={{width:"30px",height:"30px",marginRight:"15px",color:"gray"}} />
        </div>
    </div>
  )
}

export default Navbar;