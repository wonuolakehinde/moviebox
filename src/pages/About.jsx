import React from 'react'
import '../styles/About.css'
import things from '../assets/things.jpg'
import imb from '../assets/imbd.jpg'
import apple from '../assets/apple.jpg'
import bat from '../assets/batman.jpg'
import spider from '../assets/spider.jpg'
import dunk from '../assets/dunk.jpg'
const About = () => {
    return(
        <div className=''>
            <div className='d-lg-flex align-items-center justify-content-between mt-5 mx-5 '>
           <h3 className='mx-5'>Featured Movie</h3>
           <h5 className='text-danger mx-5'>see more </h5>
           </div>
          <div className='d-lg-flex d-sm-block mx-5'>
          <div className='pt-4 px-4 mt-4'>
         <img src={things} alt="" />
            <h5 className='opacity-25'>usa 2008</h5>
            <h5>Stranger things</h5>
            <div className=' d-flex gap-3'>
                <img src={imb} alt="" />
                <h5 className='opacity-25 '>860/100</h5>
                <img src={apple} alt="" />
                <h5 className='opacity-25'>97%</h5>
            </div>
            <h5 className='opacity-25'>Action,Adventure,Horror</h5>
           </div>
           <div className='pt-4 px-4 mt-4'>
            <img src={bat} alt="" className=' ' />
            <h5 className='opacity-25'>usa 2005</h5>
            <h5>Batman Begins</h5>
            <div className=' d-flex gap-3'>
                <img src={imb} alt="" />
                <h5 className='opacity-25 '>820/100</h5>
                <img src={apple} alt="" />
                <h5 className='opacity-25'>70%</h5>
            </div>
            <h5 className='opacity-25'>Action,Adventure</h5>
           </div>
           <div className='pt-4 px-4 mt-4'>
            <img src={spider} alt="" />
            <h5 className='opacity-25'>usa 2008</h5>
            <h5>Spider man : into the <br/>spider-verse</h5>
            <div className=' d-flex gap-3'>
                <img src={imb} alt="" />
                <h5 className='opacity-25 '>840/100</h5>
                <img src={apple} alt="" />
                <h5 className='opacity-25'>87%</h5>
            </div>
            <h5 className='opacity-25'>Animation,Action,Adventure</h5>
           </div> 
           <div className='pt-4 px-4 mt-4 '>
            <img src={dunk} alt="" />
            <h5 className='opacity-25'>usa 2007</h5>
            <h5>Dunkirk</h5>
            <div className=' d-flex gap-3'>
                <img src={imb} alt="" />
                <h5 className='opacity-25 '>780/100</h5>
                <img src={apple} alt="" />
                <h5 className='opacity-25'>94%</h5>
            </div>
            <h5 className='opacity-25'>Action , Drama, Horror</h5>
           </div>
          </div>
        </div>

    )
}
 export default About