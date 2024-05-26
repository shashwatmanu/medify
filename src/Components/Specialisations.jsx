import React from 'react'
import "./SearchBox.css"
import { FaTeethOpen } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { TbHeartRateMonitor } from "react-icons/tb";
import { SiGnometerminal } from "react-icons/si";
import { PiEyedropperSampleFill } from "react-icons/pi";
import { MdOutlinePsychology } from "react-icons/md";
import { PiHospitalLight } from "react-icons/pi";
import { FaXRay } from "react-icons/fa6";


const Specialisations = () => {
  return (
    <>
    <div style={{width:'100vw', height:'729px', backgroundImage:'linear-gradient(to right, rgba(231,240,255,1), rgba(232,241,255,0.47)'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{width:'532px', height:'67px', fontWeight:'600', fontSize:'48px', lineHeight:'67px', textAlign:'center', fontFamily:'inherit', overflow:'hidden', whiteSpace:'nowrap', color:'rgba(27,60,116,1)', marginTop:'56px'}}>Find by Specialisation</div>
            <div style={{display:'flex', flexWrap:'wrap', marginLeft:'100px'}}>
            <div className='item'><FaTeethOpen className='icon'/><div className='text'>Dentistry</div></div>
            <div className="item"><FaStethoscope className='icon'/><div className='text'>Primary Care</div></div>
            <div className="item"><TbHeartRateMonitor className='icon'/><div className='text'>Cardiology</div></div>
            <div className="item"><SiGnometerminal className='icon'/><div className='text'>MRI Resonance</div></div>
            <div className="item"><PiEyedropperSampleFill className='icon'/><div className='text'>Blood Test</div></div>
            <div className="item"><MdOutlinePsychology className='icon'/><div className='text'>Piscologist</div></div>
            <div className="item"><PiHospitalLight className='icon'/><div className='text'>Labaratory</div></div>
            <div className="item"><FaXRay className='icon'/><div className='text'>X-Ray</div></div>
            </div>
        </div>
        
        

    </div>
    </>
  )
}

export default Specialisations