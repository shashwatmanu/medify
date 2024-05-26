import React from 'react'
import image from "../Assets/faq.png"
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FaPlus } from "react-icons/fa";

const FAQ = () => {
  return (
    <>
   <div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{color:'rgba(42,167,255,1)',fontWeight:'600',fontSize:'16px', marginTop:'48px'}}>Get Your Answer</div>
            <div style={{width:'720px', height:'67px', fontWeight:'600', fontSize:'48px', lineHeight:'67px', textAlign:'center', fontFamily:'inherit', overflow:'hidden', whiteSpace:'nowrap', color:'rgba(27,60,116,1)', marginTop:'12px'}}>Frequently Asked Questions</div>
            <div style={{display:'flex'}}>
                <div><img src={image} alt=''/></div>
                <div style={{width:'40vw', marginTop:'48px'}}>
                <Accordion disableGutters style={{boxShadow:'none', marginTop:'24px', marginBottom:'24px'}}>
        <AccordionSummary
          expandIcon={<FaPlus style={{color:'rgba(42,167,255,1)'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{color:'rgba(27,60,116,1)', fontSize:'18px', fontWeight:'600'}}
        >
          Why choose our medical for your family?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{boxShadow:'none', marginTop:'24px', marginBottom:'24px'}}>
        <AccordionSummary
          expandIcon={<FaPlus style={{color:'rgba(42,167,255,1)'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{color:'rgba(27,60,116,1)', fontSize:'18px', fontWeight:'600'}}
        >
          Why we are different from others?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{boxShadow:'none', marginTop:'24px', marginBottom:'24px'}}>
        <AccordionSummary
          expandIcon={<FaPlus style={{color:'rgba(42,167,255,1)'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{color:'rgba(27,60,116,1)', fontSize:'18px', fontWeight:'600'}}
        >
          Trusted & experience senior care & love
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>     
      <Accordion  style={{boxShadow:'none', marginTop:'24px', marginBottom:'24px'}}>
        <AccordionSummary
          expandIcon={<FaPlus style={{color:'rgba(42,167,255,1)'}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{color:'rgba(27,60,116,1)', fontSize:'18px', fontWeight:'600'}}
        >
         How to get appointment for emergency
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default FAQ