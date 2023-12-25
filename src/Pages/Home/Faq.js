import { useEffect, useState } from "react";
import './CSS/Faq.css'
export const Faq = () => {
    let [show, setshow] = useState([false, false, false, false]);
    let handleqns = (i) => {
        setshow([i==0?show[i]?false:true:false, i==1?show[i]?false:true:false, i==2?show[i]?false:true:false, i==3?show[i]?false:true:false])
    }
    const FaqList = [
        {
            id:1,
            question: "Why should I use Grc Learning?",
            answer: "Grc Learning is the go-to website for Learning lovers, offering a vast selection, user-friendly interface, and competitive prices. With a diverse collection, easy navigation, and discounts, Grc Learning ensures a seamless Course-buying experience. Discover your next literary gem, read reliable reviews, and join a vibrant community of Learners all in one place.",
        },
        {
            id:2,
            question: "Can I access my Grc Learning Website on mobile?",
            answer: "Yes, you can access your Grc Learning on mobile devices.",
        },
        {
            id:3,
            question: "Do you offer refunds?",
            answer: "Yes, Grc Learning offers a 30-day refund policy for their Courses purchased directly from their website. If you are not satisfied with your purchase, you can request a refund within 30 days of the purchase date. Please refer to Grc Learning's website for more information on their refund policy.",
        },
        {
            id:4,
            question: "Do you support Internation payments?",
            answer: "Yes, Grc Learning supports international payments for their Courses purchased directly from their website. They accept various payment methods, including credit/debit cards and PayPal, which can be used for international transactions. However, it is recommended to check with your bank or payment provider regarding any possible international transaction fees or restrictions that may apply.",
        }
    ];
    return (
        <div className="mb-10">
        <div className='main-faq  dark:bg-slate-800'>
            <h1 data-aos="fade-down" className='text-2xl text-center font-semibold dark:text-slate-100 mb-20 mt-10 underline underline-offset-8'>Question in mind?</h1>
            <div className="main-Faq-div">
                {
                    FaqList.map((arr)=>(
                        <div key={arr.id} className="data " data-aos="fade-up">
                            <div className="qns" onClick={()=>{handleqns(arr.id-1)}}>
                                <h2 className="question text-gray-600 mb-5 dark:text-white">{arr.question}</h2>
                                {show[arr.id-1]?<i className="fa-solid fa-chevron-up fa-beat mb-5 dark:text-white"></i>:<i className="fa-solid fa-chevron-down fa-beat mb-5 dark:text-white"></i>}
                            </div>
                            {show[arr.id-1] && <p data-aos="fade-up" className="ans mb-6 ml-5 text-justify leading-loose dark:text-gray-100 tracking-wide">{arr.answer}</p>}
                        </div>
                    ))
                }
            </div>
        </div>
                </div>
    )
}
