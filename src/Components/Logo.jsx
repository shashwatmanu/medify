import React from 'react'
import LogoImg from "../../src/Assets/Logo.png"
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <>
    <div style={{display:'flex', marginRight:'160px', cursor:'pointer'}} onClick={()=>navigate("/")}>
    <img src={LogoImg} alt='Logo' style={{width:'23px', height:'23px', alignSelf:'center', marginRight:'2px'}}/>
    <p style={{fontWeight:'700', fontSize:'18px', color:'#2AA8FF'}}>Medify</p>
    </div>
    </>
  )
}

export default Logo