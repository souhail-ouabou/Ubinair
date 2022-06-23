import React from 'react'
import Toggle from './toggle/Toggle'
import Devise from './Devise'
import { motion } from 'framer-motion'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Goback from './Goback'

function TogglesPage(props) {
    // console.log("Clculateur",props.allState);
    return (
        <div className={props.allState.index === 2 ? 'text-white ' : 'hidden'}>
            <div className={props.allState.subtype==="Site e-commerce"?
            "absolute top-[108%] md:top-[88%] md:left-[4%]":
            "absolute top-[103%] md:top-[88%] md:left-[4%]"}
            >
                <Goback previousTab={props.previousTab} />
            </div>
            <div>
                <Devise result={props.allState.devis} />

                <div className="text-4xl sm:text-5xl mt-4   md:text-6xl text-center pb-10 ">
                    <h1>Quelles fonctionnalités envisagez vous ?</h1>
                </div>
            </div>

            <div className="grid  gap-x-6  grid-cols-1 sm:pl-20   sm:grid-cols-2 mb-20 ">
                {props.allState.features?.map((togglerow) => (
                    <Toggle
                        key={togglerow.id}
                        chosedValue={togglerow.id}
                        title={togglerow.title}
                        onmakeChange={props.onHandleCheck}
                        chekedValue={togglerow.case}
                    />
                ))}
            </div>
         
            <div 
            className={props.allState.subtype==="Site e-commerce"?
            "absolute top-[108%] left-[53%] md:top-[88%] md:right-[4%]":
            "absolute top-[103%] left-[53%] md:top-[88%] md:right-[4rem]"}
            // animate={{x:250,y:70}}
            >
                <button
                    type="button"
                    className="text-white mx-auto font-semibold flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  text-sm px-5 py-2.5 text-center mr-2 "
                    onClick={() => props.onNext(3)}
                >
                    <span className="mr-2"> Continue </span>
                    <FaArrowAltCircleRight />
                </button>
            </div>
        </div>
    )
}
export default TogglesPage
