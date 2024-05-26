import React from 'react'
import Navbar from '../Components/Navbar'
import { createContext, useContext } from "react";
import { UserContext } from '../App';
import Grid from '@mui/material/Grid';
import HospitalCard from '../Components/HospitalCard';
import photo from "../Assets/check.png"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Download from '../Components/Download';
import Footer from '../Components/Footer';


const BookingsPage = () => {
    const {states, setStates, cities, setCities, selectedHospitals, setSelectedHospitals} = useContext(UserContext);
    console.log(selectedHospitals);
    
  return (
    <>
    <div style={{backgroundImage:'linear-gradient(to right, rgba(231,240,255,1), rgba(232,241,255,0.47)', paddingBottom:'120px'}}>
    <Navbar isWhite/>
    <div style={{backgroundImage:'linear-gradient(to right, rgba(42,167,255,1), rgba(12,140,229,1)', height:"100px", width:'100vw', borderBottomLeftRadius:"16px", borderBottomRightRadius:"16px", display:'flex', justifyContent:"flex-start", alignItems:'flex-end'}}>
        <div style={{fontWeight:'700', fontSize:'40px', color:'white', marginLeft:'72px'}}>My Bookings</div>
        <div style={{width:'780px',height:'104px', backgroundColor:'white', borderRadius:'15px', position:'absolute', top:'150px', left:'521px', display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <TextField label="Search by Hospital" style={{width:'545px'}}></TextField>
            <Button variant='contained' startIcon={<SearchIcon/>} style={{backgroundColor:'#2AA7FF', width:'177px', height:'50px'}}>Search</Button>
        </div>
    </div>
    <Grid container spacing={2} style={{marginTop:'100px'}}>
  <Grid item xs={8}>
    <div>
    {selectedHospitals.map((hospital)=> <HospitalCard name={hospital.name} city={hospital.city} type={hospital.type} isBooked time={hospital.time} dateChosen={hospital.date}/>)}
    </div>
  </Grid>
  <Grid item xs={4}>
    <div style={{marginTop:'24px'}}><img src={photo} alt="" /></div>
  </Grid>
  </Grid>
  </div>
  <Download/>
  <Footer/>
    </>
  )
}

export default BookingsPage