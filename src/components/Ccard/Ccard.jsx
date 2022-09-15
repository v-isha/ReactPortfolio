import React from 'react'
import '../Ccard/Ccard.css'

const Ccard = ({mm,head,info,ink}) => {
  return (
    <div className='cardplay'> 
      <div className='cimg'>
        <a href={ink} target="_blank" rel="noreferrer">
          <img src={mm} alt="" className='img'/>
          </a>
      </div>
      <div className="cardbody">
          <h3 className='cb1'>{head}</h3>
          <h3 className='cb2'>{info}</h3>
      </div>
    </div>
    
  )
}

export default Ccard