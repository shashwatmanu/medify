import React from 'react'
import caringImage from "../Assets/caring.png"
import tick from "../Assets/tick.png"

const Caring = () => {
  return (
    <>
    <div style={{backgroundImage:'linear-gradient(to right, rgba(231,240,255,1), rgba(232,241,255,0.47)', width:'100vw', height:'598px', display:'flex', paddingTop:'64px', justifyContent:'space-around'}}>
        <div><img src={caringImage} alt=''/></div>
        <div style={{display:'flex', flexDirection:'column', margin:'48px', width:"40vw"}}>
            <div style={{fontWeight:'600',fontSize:'16px', color:'rgba(42,167,255,1)', lineHeight:'27px'}}>HELPING PATIENTS FROM AROUND THE GLOBE!!</div>
            <div style={{fontWeight:'600', fontSize:'48px', color:'rgba(27,60,116,1)'}}>Patient <span style={{color:'rgba(42,167,255,1)'}}>Caring</span></div>
            <div style={{fontFamily:'Inter', fontWeight:'500', fontSize:'17px', color:'rgba(119,130,157,1)'}}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</div>
            <div style={{marginTop:'48px', fontWeight:'500', fontSize:'18px', color:'rgba(27,60,116,1)'}}><img src={tick} alt=''/> Stay Updated About Your Health</div>
            <div style={{marginTop:'48px', fontWeight:'500', fontSize:'18px', color:'rgba(27,60,116,1)'}}><img src={tick} alt=''/> Check Your Results Online</div>
            <div style={{marginTop:'48px', fontWeight:'500', fontSize:'18px', color:'rgba(27,60,116,1)'}}><img src={tick} alt=''/> Manage Your Appointments</div>

        </div>
    </div>
    </>
  )
}

export default Caring