import React from 'react'
import image from "../Assets/div.row.png"

const News = () => {
  return (
    <>
    <div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{color:'rgba(42,167,255,1)',fontWeight:'600',fontSize:'16px', marginTop:'48px'}}>Blogs & News</div>
            <div style={{width:'540px', height:'67px', fontWeight:'600', fontSize:'48px', lineHeight:'67px', textAlign:'center', fontFamily:'inherit', overflow:'hidden', whiteSpace:'nowrap', color:'rgba(27,60,116,1)', marginTop:'12px'}}>Read Our Latest News</div>
            <div style={{marginTop:'48px', marginBottom:'48px'}}><img src={image} alt=''/></div>
        </div>
    </div>
    </>
  )
}

export default News