import React from 'react' 
import '../styles/Home.css'
import poster from '../assets/Poster .jpg'
import tv from '../assets/tv.jpg'
import menu from '../assets/Menu.jpg'

const Home = () => {
    return(
        <div className='pos'>
            <div className='  '>
                <img src={poster} alt="" className='container mt-5 ' />
                <div className=' pain d-flex align-items-center pt-5  justify-content-between text-light mt-4 '>
                    <div className='d-flex align-items-center'>
                    <img src={tv} alt="" />
                    <h5>MovieBox</h5>
                    </div>
                    <div className=''>
                    <h5>What do you want to watch?</h5>
                    {/* <img src={} alt="" /> */}
                    </div>
                    <div className='d-flex'>
                        <h5>Sign In</h5>
                        <img src={menu} alt="" />
                    </div>
                </div>

                <div className='top'>
                    <h1 className='text-light'>John Wick 3 :<br/> Parrabellium</h1>
                </div>

            </div>

        </div>
     
    )
              



    
}
/* <div className='home-container  px-5  '>
<div className=' cont   '>
<img src={tv} alt="" />
<h3 className='pt-2 px-3'>MovieBox</h3>
</div>
</div> */

 export default Home