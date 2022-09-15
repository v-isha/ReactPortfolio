import React from 'react'
import Product from '../Product/Product'
import './Productlist.css'
import moon from '../../img/secondpro.png'
import rpic from '../../img/prosec.png'
import gitlink from '../../img/dj.png'
import come from '../../img/comingsoon.png'

const Productlist = () => {
  return (
    <div className="pl">
    <div className="pl-texts">
      <h1 className="pl-title">Create & Inspire. It's ISHA</h1>
      <p className="pl-desc">
        Isha is a creative portfolio that your work has been waiting for.
        Beautiful,stunning styles & a whole lot more Projects awaits
        inside.
      </p>
    </div>
    <div className="pl-list">
      <Product title="React Project"  pic={rpic} img="https://myvishalkumarcv.herokuapp.com/"/ >
      <Product title="Django Project"  pic={gitlink} img="https://github.com/v-isha/Monkeykeen"/ >
      <Product title="Python Project"  pic={moon} img="https://myvishalkumarcv.herokuapp.com/"/ >
      <Product title="MERN Stack" pic={come}/>
      <Product title="GYM Stack" pic={come}/>
      <Product title="MonkeyFood Stack" pic={come}/>
      
            
      
      
    </div>
  </div>
  )
}

export default Productlist