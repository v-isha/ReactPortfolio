import React from 'react'
import '../Product/Product.css'

const Product = ({img ,pic,title}) => {
  return (
    
    <div className="p">
      <div className='ti'><h4>{title}</h4></div>
    <div className="p-browser">
      <div className="p-circle"></div>
      <div className="p-circle"></div>
      <div className="p-circle"></div>
    </div>
      <a href={img} target="_blank" rel="noreferrer">
      <img src={pic} alt="" className="p-img" />
    </a>
    
      
  </div>
  )
}

export default Product