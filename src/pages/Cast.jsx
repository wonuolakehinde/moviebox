import React from 'react'
import kean from '../assets/kean.jpg'
import ryan from '../assets/ryan.jpg'
import chal from '../assets/chal.jpg'
import chlo from '../assets/chlo.jpg'

const Cast  = () => {
    return(
        <div>
            <div className='d-lg-flex align-items-center justify-content-between mt-5  mx-5'>
           <h3 className=''>Featured Casts</h3>
           <h5 className='text-danger'>see more </h5>
           </div>
           <div className='d-lg-flex d-sm-block mt-4 mx-5 align-items-center '>
           <div className='pt-4 px-4'>
                <img src={kean} alt="" className='w-75' />
                <h5>Keanu Reeves</h5>
            </div>
            <div className='pt-4 px-4'>
                 <img src={ryan} alt="" className='w-75'/>
                 <h5>Ryan Reynolds</h5>
            </div>
            <div className='pt-4 px-4'>
                <img src={chal} alt="" className='w-75' />
                <h5>Timothee Chalamet</h5>
            </div>
            <div className='pt-4 px-4'>
               <img src={chlo} alt="" className='w-75' />
               <h5>Chloe Grace Moretz</h5>
            </div>
           </div>
        </div>

    )
}
 export default Cast
