import { Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { createContext, useContext } from "react";
import { UserContext } from '../App';
import "./SearchBox.css"
import { FaUserDoctor } from "react-icons/fa6";
import { RiTestTubeFill } from "react-icons/ri";
import { FaHospital } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";

const SearchBox = () => {
    const {states, setStates, cities, setCities} = useContext(UserContext);

    
    
    const [selectedState, setSelectedState] = useState("");
    
    const [selectedCity, setSelectedCity] = useState("");
    const navigate = useNavigate();



    

    const handleStateChange = (e, value) => {
        setSelectedState(value);
    }

    const fetchCities = async()  =>{
        try{
        let res = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`);
        setCities(res.data)
        }
        catch(e){
            console.log(e);
        }
    }  

    useEffect(()=>{
        fetchCities();
            },[selectedState])

     const handleCityChange = (e, value) => {
                setSelectedCity(value);
            }

    
  return (
    <>
    <div style={{top:'540px', width:'1090px', height:'349px', left:'7%', position:'absolute', backgroundColor:'white', borderRadius:'15px', padding:'40px', boxShadow:'6px 6px 35px rgba(16,40,81,0.11)', marginBottom:'24px'}}>
        <div style={{display:'flex', justifyContent:'space-around'}}>

        <Autocomplete
        freeSolo
        options={states}
        renderInput={(params) => <TextField {...params} label="State" style={{width:'285px', backgroundColor:'#F0F0F0' }} />}
        onChange={handleStateChange}
      />

<Autocomplete
        freeSolo
        options={cities}
        renderInput={(params) => <TextField {...params} label="City" style={{width:'285px', backgroundColor:'#F0F0F0'}} InputLabelProps={{style: {fontSize: '14px'}}}/>}
        onChange={handleCityChange}
      />
    <Button variant='contained' startIcon={<SearchIcon/>} style={{backgroundColor:'#2AA7FF', width:'121px', height:'50px'}} onClick={()=>navigate("/search", {state:{state:selectedState, city:selectedCity}})}>Search</Button>
        </div>

        <div style={{display:'flex', justifyContent:'center', marginTop:'63px', fontWeight:'500', fontSize:'20px'}}>
<p style={{color:'#102851'}}>You may be looking for</p>
        </div>

        <div style={{display:'flex'}}>
          <div className='section'><FaUserDoctor style={{color:'rgba(42,168,255,1)', width:'60px', height:'60px'}}/> Doctors </div>
          <div className='section'><RiTestTubeFill style={{color:'rgba(42,168,255,1)', width:'60px', height:'60px'}}/>Labs</div>
          <div className='section main'><FaHospital  style={{color:'rgba(42,167,255,1)', width:'60px', height:'60px'}}/>Hospitals</div>
          <div className='section'><MdLocalPharmacy   style={{color:'rgba(42,167,255,1)', width:'60px', height:'60px'}}/>Medical Store</div>
          <div className='section'><FaAmbulance style={{color:'rgba(42,167,255,1)', width:'60px', height:'60px'}}/>Ambulance</div>

        </div>


    </div>
    </>
  )
}

export default SearchBox