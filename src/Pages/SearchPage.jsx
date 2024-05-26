import React from 'react'
import Navbar from '../Components/Navbar'
import {useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import HospitalCard from '../Components/HospitalCard';
import { Button } from '@mui/material';
import { createContext, useContext } from "react";
import { UserContext } from '../App';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import photo from "../Assets/check.png"
import SearchIcon from '@mui/icons-material/Search';
import FAQ from '../Components/FAQ';
import Download from '../Components/Download';
import Footer from '../Components/Footer';

const SearchPage = () => {
    const location = useLocation();
    const [hospitals, setHospitals] = useState([]);
    const {states, setStates, cities, setCities, selectedHospitals, setSelectedHospitals} = useContext(UserContext);
    const [selectedState, setSelectedState] = useState("");
    
    const [selectedCity, setSelectedCity] = useState("");

    const handleStateChange = (e, value) => {
        setSelectedState(value);
    }
    const handleCityChange = (e, value) => {
        setSelectedCity(value);
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

    const fetchHospitals = async() =>{
        if(location.state){
        let res = await axios.get(`https://meddata-backend.onrender.com/data?state=${location.state.state}&city=${location.state.city}`);
        setHospitals(res.data);
        }
        else{

        }
    }

    useEffect(()=>{
fetchHospitals()
    },[])

    const fetchSearchedHospitals= async()=>{
        if(selectedCity){
            let res = await axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`);
        setHospitals(res.data);
        }
        else{
            let res = await axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=`);
            setHospitals(res.data);
        }
    }

    const handleSearch = () =>{
        fetchSearchedHospitals();
    }

  return (
    <>
    <div style={{backgroundImage:'linear-gradient(to right, rgba(231,240,255,1), rgba(232,241,255,0.47)'}}>
    <Navbar isWhite/>
    <div style={{backgroundImage:'linear-gradient(to right, rgba(42,167,255,1), rgba(12,140,229,1)', height:"100px", width:'100vw', borderBottomLeftRadius:"16px", borderBottomRightRadius:"16px"}}></div>
    <div style={{position:'absolute', top:'150px', left:'100px'}}>
    <div style={{display:'flex', justifyContent:'center'}}>
    <div style={{display:'flex', backgroundColor:'white', width:'1166px', height:'111px',justifyContent:'space-around', borderRadius:'15px', boxShadow:'6 6 35 0 rgba(16,40,81,0.11)', alignItems:'center'}}>
        <div> <Autocomplete
        freeSolo
        options={states}
        renderInput={(params) => <TextField {...params} label="State" style={{width:'285px', backgroundColor:'#F0F0F0' }} />}
        onChange={handleStateChange}
      />
</div>
        <div><Autocomplete
        freeSolo
        options={cities}
        renderInput={(params) => <TextField {...params} label="City" style={{width:'522px', backgroundColor:'#F0F0F0'}} InputLabelProps={{style: {fontSize: '14px'}}}/>}
        onChange={handleCityChange}
      /></div>
        <Button variant='contained' onClick={handleSearch} startIcon={<SearchIcon/>} style={{backgroundColor:'#2AA7FF', width:'231px', height:'50px'}}>Search</Button>
    </div>
    </div>
    </div>
    {hospitals.length>0?(<div style={{marginTop:'165px', marginLeft:'36px'}}>{hospitals.length} medical centers available in {selectedState?selectedState:""} {location.state?location.state.state:""}</div>):(<div style={{marginTop:'165px', marginLeft:'36px'}}> No results to show</div>)}
    <Grid container spacing={2}>
  <Grid item xs={8}>
    <div>
    {hospitals.map((hospital)=> <HospitalCard name={hospital["Hospital Name"]} city={hospital.City} type={hospital["Hospital Type"]} selectedHospitals={selectedHospitals} setSelectedHospitals={setSelectedHospitals}/>)}
    </div>
  </Grid>
  <Grid item xs={4}>
    <div style={{marginTop:'24px'}}><img src={photo} alt="" /></div>
  </Grid>
  </Grid>
    
   

    </div>
    <FAQ/>
    <Download/>
    <Footer/>
    </>
  )
}

export default SearchPage