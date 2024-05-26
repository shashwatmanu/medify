import React from 'react'
import Logo from './Logo'
import Button from '@mui/material/Button';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = ({isWhite}) => {
  const navigate = useNavigate();
  return (
    <>
    <div style={{display:'flex', justifyContent:'center', height:'40px', backgroundColor:'#2AA7FF', color:'white', alignContent:'center'}}>
        <p style={{alignSelf:'center', fontSize:'14px'}}>The health and well-being of our patients and their health care team will always be our priority, so we can follow the best practices for cleanliness.</p>
    </div>
    <div style={{display:'flex', justifyContent:'space-around', padding:'0 135px 0 135px'}} className={isWhite?"isWhite":"isBlue"}>
        <Logo />
        <Button variant="text" style={{textTransform:'none', fontWeight:'14px', color:'#102851'}} onClick={()=>navigate("/search")}>Find Doctors</Button>
        <Button variant="text" style={{textTransform:'none', fontWeight:'14px', color:'#102851'}}>Hospitals</Button>
        <Button variant="text" style={{textTransform:'none', fontWeight:'14px', color:'#102851'}}>Medicines</Button>
        <Button variant="text" style={{textTransform:'none', fontWeight:'14px', color:'#102851'}}>Surgeries</Button>
        <Button variant="text" style={{textTransform:'none', fontWeight:'14px', color:'#102851'}}>Software for Provider</Button>
        <Button variant="text" style={{textTransform:'none', fontWeight:'14px', color:'#102851'}}>Facilities</Button>
        <Button variant="contained" style={{height:'40px', alignSelf:'center', backgroundColor:'#2AA8FF', borderRadius:'8px', boxShadow:'none', fontWeight:'14px', textTransform:'none' }} onClick={()=>navigate("/bookings")}>My Bookings</Button>
    </div>
    </>
  )
}

export default Navbar