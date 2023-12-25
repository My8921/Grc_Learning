import HeaderImage from './hero.avif'
import './CSS/Header.css'
import { useNavigate } from 'react-router-dom';
import Typed from 'typed.js';
import { useEffect } from 'react';
export const Header = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        let type = new Typed('.ebook', {
            strings: ["Professionals.", "Business.", "Technical Gru.", "Students.", "Learners."],
            typeSpeed: 150,
            backSpeed: 100,
            loop: true
        })
    })

    const handleReadMoreClick = () => {
        navigate('/about-us'); // Navigate to the About Us page when clicked
    };
    return (
        <header data-aos="fade-up " className='mb-30'>
            {/* Text div */}
            <div className="upper-part lg:mt-11  lg:w-[1400px]  flex flex-col items-start " data-aos="fade-right"> 
                <h1 className='font-extrabold  text-black dark:text-white  ' data-aos="fade-down">  <span className='text-amber-600   '>GRC  Learning </span>is Ready for <br/> <span className=' ebook text-blue-700  dark:text-green-500 font-["Sofia"]'>Store</span></h1>
                <p className='paraoi text-black dark:text-white  font-["Hedvig Letters Serif"] leading-loose'>
 <span className='text-amber-600 font-["Sofia"] '>GRC Learning</span>  is the pioneer training institute providing cutting-edge courses in Asia & the MENA region. We offer a vast range of professional courses that meet the demands of this era and beyond. Our institute boasts top-quality instructors with industry experience cultivated throughout their professional careers, who will share best practices with trainees  <span className='underline text-blue-400 cursor-pointer' onClick={handleReadMoreClick}>Read more...</span>  </p>
<div className='w-full lg:flex-col lg:items-start lg:mt-[50px]'>
<button onClick={()=>{navigate('/products')}} className='button  text-black dark:text-white shadow-2xl mt-14'>Explore Courses</button>
</div>
               
            </div>
            {/* Image div */}
            <div className="lower lg:mb-8 block">
            <img data-aos="zoom-in-up" className="hero-img" src={HeaderImage}  alt="" />
            </div>
        </header>
    );
}