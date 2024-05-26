import React from 'react'
import image from "../Assets/download.png"
import { Button } from '@mui/material'

const Download = () => {
  return (
    <>
     <div style={{backgroundImage:'linear-gradient(to right, rgba(231,240,255,1), rgba(232,241,255,0.47)', width:'100vw', height:'542px', display:'flex', paddingTop:'64px', justifyContent:'space-around'}}>
        <div style={{alignSelf:'flex-end'}}><img src={image} alt=''/></div>
        <div style={{display:'flex', flexDirection:'column', margin:'48px', width:"40vw"}}>
            
            <div style={{fontWeight:'600', fontSize:'48px', color:'rgba(27,60,116,1)'}}>Download the</div>
            <div style={{fontWeight:'600', fontSize:'48px', color:'rgba(27,60,116,1)'}}><span style={{color:'rgba(42,167,255,1)'}}>Medify</span> App</div>
            
            <div style={{fontFamily:'Lato', fontWeight:'700', fontSize:'16px', color:'rgba(65,65,70,1)', marginTop:'48px', marginBottom:'12px'}}>Get the link to download the app</div>
            <div style={{display:'flex'}}>
                <div style={{width:'55.38px', height:'47px', backgroundColor:'white', textAlign:'center', lineHeight:'47px', fontWeight:'700', fontSize:'14px', color:'rgba(0,0,0,1)'}}>+91</div>
                <div><input style={{border:'none', height:'45px', width:'340px', marginRight:'24px'}} placeholder='Enter Phone Number'/></div>
                <div><Button variant='contained' style={{backgroundColor:'rgba(42,167,255,1)', height:'45px'}}>Send SMS</Button></div>
            </div>
            

        </div>
    </div>
    </>
  )
}

export default Download