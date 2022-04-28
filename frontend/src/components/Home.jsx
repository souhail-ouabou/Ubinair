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
            <div className="flex flex-col gap-5 justify-center items-center z-10 relative px-4 pt-4 md:pt-5 text-black">
                <div className="glass rounded-xl shadow-2xl">
                    <div className="-p-12">
                        <h3 className="text-white font-bold text-4xl my-6">
                            Co-création
                        </h3>
                        <div className="md:flex items-center justify-center gap-x-6">
                            <FaHandsHelping className="w-[9rem] h-full text-white px-6 py-2" />
                            <dive className="md:max-w-[49rem]">
                                <p className="text-whit text-xl text-white ">
                                    Ton site internet est la concrétisation de
                                    ta vision, créons le ensemble. Tu pourras
                                    être fier d’avoir apporté ta pierre à
                                    l’édifice en participant de façon proactive
                                    à sa création. Met la casquette de directeur
                                    artistique et partage avec nous tes
                                    préférences visuelles
                                </p>
                            </dive>
                        </div>
                    </div>
                </div>
                <div className="glass rounded-xl shadow-2xl">
                    <div className="-p-12">
                        <h3 className="text-white font-bold text-4xl my-6">
                            Max de Visibilité
                        </h3>
                        <div className="md:flex items-center justify-center gap-x-6">
                            <FaPollH className="w-[9rem] h-full text-white  px-6 py-2" />
                            <dive className="md:max-w-[49rem]">
                                <p className="text-whit text-xl text-white ">
                                    Maintenant que tu sais à quoi ressemblera
                                    ton site internet, place à l’intégration. Ne
                                    t’en fais pas, on s’occupe de toute la
                                    partie technique, que tu pourras suivre en
                                    temps réel sur ton espace client. Aucune
                                    mauvaise surprise, tu sais déjà tout !
                                </p>
                            </dive>
                        </div>
                    </div>
                </div>
                <div className="glass rounded-xl shadow-2xl">
                    <div className="-p-12">
                        <h3 className="text-white font-bold text-4xl my-6">
                            Autonomie
                        </h3>
                        <div className="md:flex items-center justify-center gap-x-6">
                            <FaRegLifeRing className="w-[9rem] h-full text-white  px-6 py-2" />
                            <dive className="md:max-w-[49rem]">
                                <p className="text-whit text-xl text-white ">
                                    Changer une photo ou un texte sur ton site
                                    internet ce n’est pas compliqué ! Oui, tu as
                                    bien lu ! Grâce à des outils no-code et une
                                    bibliothèque de tutoriels personnalisés, tu
                                    pourras prendre en main ton site internet
                                    dès sa mise en ligne.
                                </p>
                            </dive>
                        </div>
                    </div>
                </div>

                {/* <VerticalSccroll /> */}
                <div className="flex gap-12 items-center justify-center">
                    <div className="glass py-[8px] px-[46px]  md:w-[46rem] w-[20rem]  rounded-xl shadow-2xl">
                        <div className="-p-12">
                            <h3 className="text-white font-semibold text-sm my-6">
                                MISSIONS RÉUSSIES
                            </h3>
                            <div className="md:flex- items-center justify-center gap-x-6">
                                <p className="text-3xl text-white font-semibold tracking-wide mb-7 ">
                                    Fais comme eux et réserve ta place pour
                                    propulser ton site internet avec la méthode
                                    Ubinair !
                                </p>
                            </div>
                        </div>
                                {/* <Sliderks /> */}
                    </div>
                    <div>
                        <img
                            className='w-[30rem] object-cover m-auto '
                            src={bgImg}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
