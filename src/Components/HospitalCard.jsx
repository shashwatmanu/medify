import React from 'react'
import HospitalPhoto from "../Assets/HospitalPhoto.png"
import { Button } from '@mui/material'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack'

const HospitalCard = ({ name, city, type, selectedHospitals, setSelectedHospitals, isBooked, time, dateChosen}) => {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const [showDates, setShowDates] = useState(false);

  const getDate= (n)=>{
    let ans = "";
    let day;
    let date = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "October", "December"]
    let today = date.getDate()+n;
    if(date.getDay()+n>6){
  day = days[date.getDay()+n-7];
    }
    else{
  day = days[date.getDay()+n];
    }
    

    let month = months[date.getMonth()];
   
    ans = day +", " + today +" "+ month;
    // console.log(ans)
    return ans;
  }



  const [value, setValue] = React.useState(getDate(0));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  useEffect(()=>{
// getDate();
  },[])

  const handleClick = (e) =>{
    setSelectedHospitals([...selectedHospitals, {"name": name, 'time':e.target.value, 'date':value, 'type':type, 'city':city}]);
    enqueueSnackbar('Appointment Booked Sucessfully', {variant:'success'})
    
    // console.log(e.target.value, value, name);
  }

  const handleButtonClick = () =>{
setShowDates(!showDates);
  }


  return (
    <>
    <div style={{backgroundColor:'white', width:"786px", height:'269px', borderRadius:"14px", padding:'24px', margin:'24px', marginBottom:'0px'}}>
        
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div><img src={HospitalPhoto} alt='HospitalPhoto'/></div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{color:"rgba(20,190,240,1)", fontWeight:'600', fontSize:'20px'}}>{name}</div>
                <div style={{color:"rgba(65,65,70,1)", fontWeight:'700', fontSize:'14px', marginTop:'24px'}}>{city}</div>
                <div style={{color:"rgba(65,65,70,1)", fontWeight:'400', fontSize:'14px'}}>{type}</div>
                {isBooked?"":(<div style={{color:'rgba(120,120,135,1)', fontWeight:'400', marginTop:'12px'}}><span style={{color:'rgba(2,164,1,1)', fontWeight:'700', fontSize:'14px'}}>FREE</span> ₹̶5̶0̶0̶ <span style={{color:'rgba(65,65,70,1)'}}>Consultation fee at clinic</span> </div>)}
            </div>
            {isBooked?(<><div style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}}>{time}</div><div style={{width:'128px', height:'32px', borderRadius:'3px', border:'1px solid rgba(0,165,0,1)', color: 'rgba(0,165,0,1)',textAlign:'center', lineHeight:'32px'}}>{dateChosen}</div></>):(
            <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', height:'269px'}}>
              <div style={{alignSelf:'center', color:'rgba(1,164,0,1)'}}>Available Today</div>
              <Button variant='contained' onClick={handleButtonClick} style={{backgroundColor:'rgba(42,167,255,1)', textTransform:'none'}}>Book FREE Center Visit</Button>
            </div>)}
        </div>
    </div>
   {showDates?( <div style={{marginLeft:'24px', backgroundColor:'white', width:"786px", padding:'24px', marginRight:'24px', height:'269px'}}>
    <TabContext value={value} variant="scrollable"
  scrollButtons="auto">
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable"
        scrollButtons="auto">
      <Tab label={<><div style={{fontWeight:'700',fontSize:'16px', color:'rgba(65,65,70,1)'}}>Today</div><div style={{color:'rgba(1,164,0,1)', fontSize:'12px'}}>11 slots available</div></>} value={getDate(0)} style={{width:'33%'}}/>
      <Tab label={<><div style={{fontWeight:'700',fontSize:'16px', color:'rgba(65,65,70,1)'}}>Tomorrow</div><div style={{color:'rgba(1,164,0,1)', fontSize:'12px'}}>11 slots available</div></>} value={getDate(1)}  style={{width:'33%'}}/>
      <Tab label={<><div style={{fontWeight:'700',fontSize:'16px', color:'rgba(65,65,70,1)'}}>{getDate(2)}</div><div style={{color:'rgba(1,164,0,1)', fontSize:'12px'}}>11 slots available</div></>} value={getDate(2)}  style={{width:'33%'}}/>
      <Tab label={<><div style={{fontWeight:'700',fontSize:'16px', color:'rgba(65,65,70,1)'}}>{getDate(3)}</div><div style={{color:'rgba(1,164,0,1)', fontSize:'12px'}}>11 slots available</div></>} value={getDate(3)}  style={{width:'23%'}}/>
      <Tab label={<><div style={{fontWeight:'700',fontSize:'16px', color:'rgba(65,65,70,1)'}}>{getDate(4)}</div><div style={{color:'rgba(1,164,0,1)', fontSize:'12px'}}>11 slots available</div></>} value={getDate(4)} style={{width:'23%'}} />
      <Tab label={<><div style={{fontWeight:'700',fontSize:'16px', color:'rgba(65,65,70,1)'}}>{getDate(5)}</div><div style={{color:'rgba(1,164,0,1)', fontSize:'12px'}}>11 slots available</div></>} value={getDate(5)}  style={{width:'23%'}}/>
      <Tab label={<><div style={{fontWeight:'700',fontSize:'16px', color:'rgba(65,65,70,1)'}}>{getDate(6)}</div><div style={{color:'rgba(1,164,0,1)', fontSize:'12px'}}>11 slots available</div></>} value={getDate(6)}  style={{width:'23%'}}/>
      
    </TabList>
  </Box>
  <TabPanel value={getDate(0)}>
    <div style={{display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Morning</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="11:30AM" onClick={handleClick}>11:30 AM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Afternoon</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="12:00PM" onClick={handleClick}>12:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="12:30PM" onClick={handleClick}>12:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="01:30PM" onClick={handleClick}>01:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:00PM" onClick={handleClick}>02:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:30PM" onClick={handleClick}>02:30 PM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Evening</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="06:00PM">06:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="06:30PM" onClick={handleClick}>06:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:00PM" onClick={handleClick}>07:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:30PM" onClick={handleClick}>07:30 PM</button>
        </div>
    </div>
  </TabPanel>
  <TabPanel value={getDate(1)}><div style={{display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Morning</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="11:30AM" onClick={handleClick}>11:30 AM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Afternoon</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="12:00PM" onClick={handleClick}>12:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="12:30PM" onClick={handleClick}>12:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="01:30PM" onClick={handleClick}>01:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:00PM" onClick={handleClick}>02:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:30PM" onClick={handleClick}>02:30 PM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Evening</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="06:00PM">06:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="06:30PM" onClick={handleClick}>06:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:00PM" onClick={handleClick}>07:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:30PM" onClick={handleClick}>07:30 PM</button>
        </div>
    </div></TabPanel>
  <TabPanel value={getDate(2)}><div style={{display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Morning</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="11:30AM" onClick={handleClick}>11:30 AM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Afternoon</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="12:00PM" onClick={handleClick}>12:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="12:30PM" onClick={handleClick}>12:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="01:30PM" onClick={handleClick}>01:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:00PM" onClick={handleClick}>02:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:30PM" onClick={handleClick}>02:30 PM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Evening</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="06:00PM">06:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="06:30PM" onClick={handleClick}>06:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:00PM" onClick={handleClick}>07:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:30PM" onClick={handleClick}>07:30 PM</button>
        </div>
    </div></TabPanel>
  <TabPanel value={getDate(3)}><div style={{display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Morning</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="11:30AM" onClick={handleClick}>11:30 AM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Afternoon</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="12:00PM" onClick={handleClick}>12:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="12:30PM" onClick={handleClick}>12:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="01:30PM" onClick={handleClick}>01:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:00PM" onClick={handleClick}>02:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:30PM" onClick={handleClick}>02:30 PM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Evening</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="06:00PM">06:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="06:30PM" onClick={handleClick}>06:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:00PM" onClick={handleClick}>07:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:30PM" onClick={handleClick}>07:30 PM</button>
        </div>
    </div></TabPanel>
  <TabPanel value={getDate(4)}><div style={{display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Morning</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="11:30AM" onClick={handleClick}>11:30 AM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Afternoon</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="12:00PM" onClick={handleClick}>12:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="12:30PM" onClick={handleClick}>12:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="01:30PM" onClick={handleClick}>01:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:00PM" onClick={handleClick}>02:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:30PM" onClick={handleClick}>02:30 PM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Evening</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="06:00PM">06:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="06:30PM" onClick={handleClick}>06:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:00PM" onClick={handleClick}>07:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:30PM" onClick={handleClick}>07:30 PM</button>
        </div>
    </div></TabPanel>
  <TabPanel value={getDate(5)}><div style={{display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Morning</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="11:30AM" onClick={handleClick}>11:30 AM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Afternoon</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="12:00PM" onClick={handleClick}>12:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="12:30PM" onClick={handleClick}>12:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="01:30PM" onClick={handleClick}>01:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:00PM" onClick={handleClick}>02:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:30PM" onClick={handleClick}>02:30 PM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Evening</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="06:00PM">06:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="06:30PM" onClick={handleClick}>06:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:00PM" onClick={handleClick}>07:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:30PM" onClick={handleClick}>07:30 PM</button>
        </div>
    </div></TabPanel>
  <TabPanel value={getDate(6)}><div style={{display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Morning</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="11:30AM" onClick={handleClick}>11:30 AM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Afternoon</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="12:00PM" onClick={handleClick}>12:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="12:30PM" onClick={handleClick}>12:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="01:30PM" onClick={handleClick}>01:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:00PM" onClick={handleClick}>02:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="02:30PM" onClick={handleClick}>02:30 PM</button>
        </div>
        <hr style={{width:'100%', border:'0.1px solid rgba(1,1,1,0.1)'}}/>
        <div style={{display:'flex', marginTop:'12px'}}>
        <div style={{height:'48px', width:'180px', textAlign:'center'}}>Evening</div>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', backgroundColor:'white'}} value="06:00PM">06:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="06:30PM" onClick={handleClick}>06:30 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:00PM" onClick={handleClick}>07:00 PM</button>
        <button style={{border:'1px solid rgba(42,167,255,1)', width:'84px', height:'31.59px', fontSize:'14px',textAlign:'center', color:'rgba(42,167,255,1)', borderRadius:'3px', lineHeight:'31.59px', marginLeft:'24px', backgroundColor:'white'}} value="07:30PM" onClick={handleClick}>07:30 PM</button>
        </div>
    </div></TabPanel>
</TabContext>
    </div>):""}
    </>
  )
}

export default HospitalCard