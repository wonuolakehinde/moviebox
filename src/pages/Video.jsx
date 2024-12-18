import React from 'react'
import lamb from '../assets/Thumbnails.jpg'
import john from '../assets/john.jpg'
import box from '../assets/Box.jpg'

const Video = () => {
    return(
        <div>
            <div className='d-lg-flex align-items-center justify-content-between mt-5  mx-5'>
           <h3 className=''>Exclusive video</h3>
           <h5 className='text-danger'>see more </h5>
            </div>
            <div className='d-lg-flex d-sm-block mt-4 mx-5 '>
               <div className=' pt-4 px-4'>
               <img src={lamb}alt="" className='w-75' />
               <h5>Lamb (2021) Trailer</h5>
               </div>
               <div className=' pt-4 '>
                <img src={john} alt="" className='w-75' />
                <h5>The suicide squad :John cena interview</h5>
               </div>
               <div>
                <img src={box} alt="" clas />
                <h5>Will there be a new era of ho</h5>
               </div>
            </div>
        </div>

    )
}
 export default Video