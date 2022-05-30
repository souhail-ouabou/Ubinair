import React from 'react'
import bgImg1 from '../img/vitirine.svg'
import bgImg2 from '../img/commerce.svg'
import {
    FaPhone,
    FaShoppingCart,
    FaStopwatch,
    FaMobileAlt,
    FaRegWindowMaximize,
    FaWordpressSimple,
} from 'react-icons/fa'
const OffersCards = () => {
    return (
        <div className="w-full py-[2rem] md:px-4  z-10" id='offres' >
            <div
                className="flex flex-col items-center justify-center mt-7 " 
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <p className="text-base  text-[#EEEEEF] font-semibold uppercase ">
                    Nos Offres
                </p>
                <p className="text-[2.8em]  text-center m-auto text-[#EEEEEF] font-semibold   ">
                    Choisi l’offre qui te convient !
                </p>
            </div>
            <div className="max-w-[1070px]  py-[2rem] mx-auto grid md:grid-cols-2 md:gap-32 items-center justify-center">
                <div data-aos-duration="2000" data-aos="fade-up">
                    <div className="w-full shadow-xl bg-[#ffffffff]/20 flex flex-col p-6 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                        <img
                            className="w-[12rem] mx-auto "
                            src={bgImg1}
                            alt="/"
                        />
                        <p className="text-center text-slate-200 text-4xl font-bold  py-8">
                        1000€
                        </p>
                        <h2 className="text-slate-200 text-2xl font-bold text-center">
                            SITE VITRINE
                        </h2>
                        <div className="text-center font-medium text-white flex flex-col justify-start ">
                            <p className="py-2 border-b mx-8 mt-8 flex items-center justify-center">
                                <FaRegWindowMaximize className="mr-3 " />
                                Monopage
                            </p>
                            <p className="py-2 border-b mx-8 flex items-center justify-center">
                                {' '}
                                <FaWordpressSimple className="mr-3 " /> Sous
                                WordPress
                            </p>
                            <p className="py-2 border-b mx-8 flex items-center justify-center">
                                {' '}
                                <FaMobileAlt className="mr-3 " />
                                Mobile First Design
                            </p>
                            <p className="py-2 border-b mx-8 flex items-center justify-center">
                                {' '}
                                <FaStopwatch className="mr-3 " /> En 14 Jours
                            </p>
                        </div>
                        <button className="bg-[#EEEEEF] w-[268px] flex items-center justify-between   hover:shadow-lg transition-all ease-in-out duration-100  font-bold text-[#663993]  dark:shadow-purple-800/80  text-sm  rounded-md my-6 mx-auto px-6 py-3">
                            JE RÉSERVE UN CALL !<FaPhone className="ml-3 " />
                        </button>
                    </div>
                </div>
                <div data-aos-duration="2000" data-aos="fade-up">
                    <div className="w-full shadow-xl bg-[#ffffffff]/20 flex flex-col p-6 md:my-0 my-8 rounded-lg hover:scale-105 duration-100">
                        <img
                            className="w-[12rem] mx-auto "
                            src={bgImg2}
                            alt="/"
                        />
                        <p className="text-center text-slate-200 text-4xl font-bold  py-8">
                        3000€
                        </p>
                        <h2 className="text-slate-200 text-2xl font-bold text-center uppercase">
                            SITE E-commerce
                        </h2>
                        <div className="text-center font-medium text-white flex flex-col justify-start ">
                            <p className="py-2 border-b mx-8 mt-8 flex items-center justify-center">
                                <FaShoppingCart className="mr-3 " />
                                Boutique En Ligne
                            </p>
                            <p className="py-2 border-b mx-8 flex items-center justify-center">
                                {' '}
                                <FaWordpressSimple className="mr-3 " /> Sous
                                WordPress
                            </p>
                            <p className="py-2 border-b mx-8 flex items-center justify-center">
                                {' '}
                                <FaMobileAlt className="mr-3 " />
                                Mobile First Design
                            </p>
                            <p className="py-2 border-b mx-8 flex items-center justify-center">
                                {' '}
                                <FaStopwatch className="mr-3 " /> En 14 Jours
                            </p>
                        </div>
                        <button className="bg-[#EEEEEF] w-[268px] flex items-center justify-between   hover:shadow-lg transition-all ease-in-out duration-100  font-bold text-[#663993]  dark:shadow-purple-800/80  text-sm  rounded-md my-6 mx-auto px-6 py-3">
                            JE RÉSERVE UN CALL !<FaPhone className="ml-3 " />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffersCards
