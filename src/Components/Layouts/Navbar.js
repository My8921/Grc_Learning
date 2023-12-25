import Logo from '../../assets/logo.png'
import { Search } from '../Search'
import {useEffect, useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'; 
import './Navbar.css'
import { useSelector } from 'react-redux';
import { DropDownNotLogin, DropDownLogined } from '../../Pages/index';
export const Navbar = () => {
    let length = useSelector(state => state.cartState.length);
    let islogin = useSelector(state=>state.loginState.islogin);
    let navigate = useNavigate();
    let [dropdownshow, setdropdownshow] = useState(false);
    let [searchshow, setsearchshow] = useState(false); 
    let [mode, setmode] = useState(false)
    let location = useLocation();
    function handlemovehome(){
        if(location.pathname!=='/'){
            navigate('/');
        }
    }
    function handlemode () {
        setmode(!mode);
        if (mode) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.remove('bg-slate-700');
            document.documentElement.classList.add('bg-white');
            const rotation = document.querySelector('.fa-sun');
            rotation.classList.remove('fa-spin-reverse');
        }
        else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.add('bg-slate-700');
            document.documentElement.classList.remove('bg-white');
            const rotation = document.querySelector('.fa-sun');
            rotation.classList.add('fa-spin-reverse');
        }
    }
    return (
        <>
            <nav className='shadow-md px-3 bg-white dark:bg-slate-800'>
                <div onClick={handlemovehome} className="codebook cursor-pointer">
                    <img src="https://grclearning.com/images/updatedlogo.png" alt="" />
                  

                </div>
                <div class="navbar dark:bg-slate-800  bg-white  text-slate-800 dark:text-white">
  <a href="#home">Home</a>
  <div class="subnav">
    <button class="subnavbtn">About Us <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#company">Blog</a>
      <a href="#team">Meet Our Team</a>
      <a href="#careers">Meet & Vision Statement</a>
      <a href="#careers">Contact Us</a>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#bring">Link 1</a>
      <a href="#deliver">Link 2</a>
      <a href="#package">Link 3</a>
      <a href="#express">Link 4</a>
    </div>
  </div>
  <div class="subnav">
    <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 4</a>
    </div>
  </div>
  <a href="#contact">Contact</a>
</div>


                <div className="info text-slate-800 dark:text-white">
                    <i onClick={handlemode} className="fa-sharp fa-regular fa-sun fa-spin"></i>
                    <i onClick={()=>setsearchshow(!searchshow)} className="fa-brands fa-searchengin fa-fade"></i>
                    <i onClick={()=>navigate('/cart')} className="fa-solid fa-cart-shopping relat"><p className='para'>{length}</p></i>
                    <i onClick={()=>setdropdownshow(!dropdownshow)} className="fa-solid fa-circle-user"></i>
                    {dropdownshow && ( !islogin ? <DropDownNotLogin setdropdownshow={setdropdownshow}/>:<DropDownLogined setdropdownshow={setdropdownshow}/>)}

                </div>
            </nav>
            <hr className='bg-teal-700	h-px'/>
            {
                searchshow && (<Search setsearchshow={setsearchshow}/>)
            }
        </>
    )
}