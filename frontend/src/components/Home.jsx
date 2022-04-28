import React from 'react'
import bgImg from '../img/undraw_website_builder_re_ii6e (2).svg'
import {
    FaPhone,
    FaQuestion,
    FaHandsHelping,
    FaPollH,
    FaRegLifeRing,
} from 'react-icons/fa'


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    }
    return (
        <section
            name="home"
            className=" w-full bg-transparent flex flex-col justify-between"
        >
            <div className="background  bg-transparent ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="grid md:grid-cols-2 w-full max-w-[1240px] z-10 md:ml-28  ">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-12">
                    <h1 className="py-3 text-5xl md:text-7xl font-bold text-[#EEEEEF] tracking-wide md:m-0 m-9">
                        Tu veux créer un site internet pour ta boîte ?
                    </h1>
                    <p className="text-2xl text-[#EEEEEF] ">
                        Et si on le créait ensemble avec la méthode Ubinair !
                    </p>
                    <div className="flex gap-4">
                        <button
                            className="py-3 px-6 sm:w-[60%] my-4 text-[#663993] flex items-center justify-between uppercase rounded-full bg-[#EEEEEF]    dark:shadow-purple-800/80   text-sm  text-center mr-2
                        md:w-auto  w-full  font-bold
                         hover:shadow-lg transition-all ease-in-out duration-100
                        "
                        >
                            C'est quoi <FaQuestion className="ml-3 " />
                        </button>
                        <button
                            className="py-3 px-6 sm:w-[60%] my-4 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center mr-2
                        md:w-auto  w-full 
                         hover:shadow-lg transition-all ease-in-out duration-100 font-bold
                        "
                        >
                            Je Reserver un call <FaPhone className="ml-3" />
                        </button>
                    </div>
                </div>
                <div className="md:py-9 flex-1 flex items-center">
                    <img
                        className="ml-12 mt-12 w-full lg:w-auto"
                        src={bgImg}
                        alt="/"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-7 z-10">
                <p className="text-base  text-[#EEEEEF] font-semibold uppercase ">
                    COMMENT ÇA MARCHE ?
                </p>
                <p className="text-[2.8em]  text-center m-auto text-[#EEEEEF] font-semibold uppercase  ">
                    La Méthode Ubinair
                </p>
            </div>

        </section>
    )
}

export default Home
