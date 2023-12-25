import './App.css';
import { Navbar } from './Components/Layouts/Navbar';
import { Footer } from './Components/Layouts/Footer';
import AllRoutes from './Routes/AllRoutes';
import Loader from './Components/PreLoader/preloader';
import { useEffect, useState } from 'react';
function App() {
  const [isLoading, SetIsLoading]=useState(true);

  useEffect(() => {
  const Fake=()=>{
    setTimeout(() => {
      SetIsLoading(false);
    }, 4000);
   
  }
  Fake();  
}, [])
  return isLoading?(<Loader></Loader>):(
    
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
    );
}

export default App;
