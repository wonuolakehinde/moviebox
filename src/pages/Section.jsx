import React from 'react'
import imb from '../assets/imbd.jpg'
import apple from '../assets/apple.jpg'
import dune from '../assets/dune.jpg'
import time from '../assets/time.jpg' 
import chi from '../assets/chi.jpg'
import bre from '../assets/bre.jpg'
const Section  = () => {
    return(
        <div className=' px-5 '>
           <div className='d-lg-flex align-items-center justify-content-between mt-5  mx-5'>
           <h3 className=''>New Arrival</h3>
           <h5 className='text-danger'>see more </h5>
           </div>
          <div className='d-lg-flex d-sm-block mx-4 '>
          <div className='pt-4 px-4 mt-4 w-75'>
          <img src={dune} alt="" />
            <h5 className='opacity-25'>usa 2021</h5>
            <h5>Dune</h5>
            <div className=' d-flex gap-3'>
                <img src={imb} alt="" />
                <h5 className='opacity-25 '>840/100</h5>
                <img src={apple} alt="" />
                <h5 className='opacity-25'>75%</h5>
            </div>
            <h5 className='opacity-25'>Action,Adventure,Drama</h5>
           </div>
           <div className='pt-4 px-4 mt-4 w-75'>
            <img src={time} alt="" className='w-15 ' />
            <h5 className='opacity-25'>usa 2021</h5>
            <h5>No time to die</h5>
            <div className=' d-flex gap-3 '>
                <img src={imb} alt="" />
                <h5 className='opacity-25 '>760/100</h5>
                <img src={apple} alt="" />
                <h5 className='opacity-25'>68%</h5>
            </div>
            <h5 className='opacity-25'>Action,Adventure,Thriller</h5>
           </div>
           <div className='pt-4 px-4 mt-4 w-75'>
            <img src={chi} alt="" />
            <h5 className='opacity-25'>usa 2021</h5>
            <h5> Shang-chi and the legends <br/> of the ten rings</h5>
            <div className=' d-flex gap-3'>
                <img src={imb} alt="" />
                <h5 className='opacity-25 '>790/100</h5>
                <img src={apple} alt="" />
                <h5 className='opacity-25'>71%</h5>
            </div>
            <h5 className='opacity-25'>Action,Adventure,Fantasy</h5>
           </div>
           <div className='pt-4 px-4 mt-4 w-75'>
            <img src={bre} alt="" />
            <h5 className='opacity-25'>usa 2021</h5>
            <h5>Don't Breathe 2</h5>
            <div className=' d-flex gap-3'>
                <img src={imb} alt="" />
                <h5 className='opacity-25 '>610/100</h5>
                <img src={apple} alt="" />
                <h5 className='opacity-25'>48%</h5>
            </div>
            <h5 className='opacity-25'>Action , Drama, Horror</h5>
           </div>
          </div>
        </div>

    )
}
 export default Section