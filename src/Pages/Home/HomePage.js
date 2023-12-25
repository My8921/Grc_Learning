import { Header } from "./Header";
import { FeatureBook } from "./FeatureBook";
import {Review} from './Review'
import { Faq } from "./Faq";
import { DynamicTitile } from "../../DynamicPageTitle";
import { Learning_Curve } from "../../Static_Pages/Learning_Curve";
import BouncingBalls from "./animations/bouncing2";
import { useEffect, useState } from "react";
import Loader from "../../Components/PreLoader/preloader";
import { Navbar } from "../../Components/Layouts/Navbar";
import { Footer } from "../../Components/Layouts/Footer";

export const HomePage = () => {



  DynamicTitile('')
  return (
    <>




      <Header/>
      <hr className="mt-[30px] mb-[30px] dark:bg-black" />
{/* <Learning_Curve></Learning_Curve>
      <FeatureBook/> */}
  <BouncingBalls></BouncingBalls>
      <Review/>
      <Faq/>
    </>
  );
}
