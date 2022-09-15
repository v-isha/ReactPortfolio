import React from 'react'
import './Intro.css'
import Myimg from '../../img/newintro.jpg'

const Intro = () => {
  return (
            <div className='container'>
                    <div className='leftc'>
                        <div className="i-left-wrapper">
                            <h2 className="i-intro">Hello, My name is</h2>
                            <h1 className="i-name">V<span className='isha'>isha</span>l Kumar</h1>
                            <div className="i-title">
                                    <div className="i-title-wrapper">
                                        <div className="i-title-item">Web Developer</div>
                                        <div className="i-title-item">Educator</div>
                                        <div className="i-title-item">Data Analyst</div>
                                        <div className="i-title-item">Youtuber</div>
                                        <div className="i-title-item">Content Creator</div>
                                    </div>
                            </div>
                            <p className="i-desc">
                                I design and develop services for customers of all sizes,
                                specializing in creating stylish, modern websites, web services and
                                online stores.
                            </p>
                        </div>

                    </div>
                    <div className='rightc'>
                            
                            <img src={Myimg} alt="" className="i-img" />
                    </div>
            </div>
  )
}

export default Intro