import React from 'react'
import Ccard from '../Ccard/Ccard'
import '../Contact/Contact.css'
import em from '../../img/email.png'
import am from '../../img/address.png'
import pm from '../../img/phone.png'
import lm from '../../img/lmm.png'
const Contact = () => {
  return (
    <div className='ct'>
        <div className="cthead">Contact</div>
        <div className='ctline'></div>
        <div className='ctcard'>
                <Ccard mm={em} head="Email:" info="vshlkmr81@gmail.com" ink="https://www.linkedin.com/in/vshlkmr81/"/>
                <Ccard mm={pm} head="WhatsApp:" info="999-06-11334" ink="https://www.linkedin.com/in/vshlkmr81/"/>
                <Ccard mm={lm} head="Linkdin:" info="vishalkumar" ink="https://www.linkedin.com/in/vshlkmr81/"/>
                <Ccard mm={am} head="Address:" info="NewDelhi,INDIA" ink="https://www.instagram.com/ich.vishalkumar/"/>
                
                
        </div>
        
    </div>
  )
}

export default Contact
