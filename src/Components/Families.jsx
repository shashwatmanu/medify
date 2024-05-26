import React from 'react'
import image from "../Assets/families.png"

const Families = () => {
  return (
    <>
     <div style={{backgroundImage:'linear-gradient(to right, rgba(231,240,255,1), rgba(232,241,255,0.47)', width:'100vw', height:'789px', display:'flex', paddingTop:'64px', justifyContent:'space-around'}}>
        
        <div style={{display:'flex', flexDirection:'column', margin:'48px', width:"40vw", marginTop:'120px'}}>
            <div style={{fontWeight:'600',fontSize:'16px', color:'rgba(42,167,255,1)', lineHeight:'27px'}}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</div>
            <div style={{fontWeight:'600', fontSize:'48px', color:'rgba(27,60,116,1)'}}>Our Families</div>
            <div style={{fontFamily:'Inter', fontWeight:'500', fontSize:'17px', color:'rgba(119,130,157,1)'}}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</div>
            

        </div>
        <div><img src={image} alt=''/></div>
    </div>
    </>
  )
}

export default Families