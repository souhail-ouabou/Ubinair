import React from 'react'
import { Link } from 'react-router-dom'
import { InlineWidget, PopupWidget, PopupButton } from 'react-calendly'
import { FaPhone } from 'react-icons/fa'

const Callendly = () => {
    return (
        <>
        <div className="z-10" id="callendly">
            <div
                className="flex flex-col items-center justify-center mt-1 "
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <p className="text-base  text-[#EEEEEF] font-semibold uppercase ">
                    UNE OFFRE T'INTÉRESSE ?
                </p>
                <p className="text-[2.8em]  text-center m-auto text-[#EEEEEF] font-semibold   ">
                    Réserve un Call !
                </p>
            </div>
            </div>

            <div
                className="fixed bottom-0 right-0 py-3 px-6  my-4 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center mr-2
                          
                         hover:shadow-lg transition-all ease-in-out duration-100 font-bold
                         z-30
                        "
            >
                <PopupButton
                    className="text-white  text-sm  text-center m
                                font-bold
                               "
                    url="https://calendly.com/souhail_ouabou/tu-es-a-un-call-de-ton-site-internet"
                    rootElement={document.getElementById('root')}
                    text="Tape to Call! "
                ></PopupButton>
                <FaPhone className="ml-3" />
            </div>
        </>
    )
}

export default Callendly
