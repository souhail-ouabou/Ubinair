import React from 'react'
import { motion } from 'framer-motion'
import eco from '../../img/eco.png'
import vitrine from '../../img/vitrine.png'
import Goback from './Goback'


function SiteTypePage(props) {
    return (
        <div className={props.index === 1 ? 'text-white' : 'hidden'}>

           <div className="absolute top-[108%] left-[31%] md:top-[88%] md:left-[4%]"
            >
                
                    <Goback previousTab={props.previousTab} />
              
            </div>

            <div className="text-[2.5em] pb-4 mt-20 text-center m-auto text-[#EEEEEF] font-semibold md:text-[2.8em]">
                <motion.h1
                    initial={{ y: 350 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.0, duration: 1.0 }}
                >
                    Vous souhaitez un :
                </motion.h1>
            </div>
            <div className="grid  gap-x-6 gap-y-6 grid-cols-1 sm:grid-cols-2 mb-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0px 0px 8px rgb(255,255,255)',
                    }}
                    transition={{ duration: 0.2 }}
                    className="glass border-0 rounded-md  pt-6 cursor-pointer 
                    bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60"
                    onClick={() => props.onNext(2, 'e-commerce')}
                >
                    <div className="">
                        <div className="text-center">
                            <div className="">
                                <img
                                    src={eco}
                                    alt="e-commerce"
                                    className="object-contain mx-auto h-40 w-88"
                                />
                            </div>
                            <div className="">
                                <h5 className="text-center  p-6">
                                    Site e-commerce{' '}
                                </h5>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0px 0px 8px rgb(255,255,255)',
                    }}
                    transition={{ duration: 0.2 }}
                    className="glass border-0 rounded-md  pt-6 cursor-pointer 
                    bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60"
                    onClick={() => props.onNext(2, 'vitrine')}
                >
                    <div className="">
                        <div className="">
                            <div className="">
                                <img
                                    src={vitrine}
                                    className="object-contain mx-auto h-40 w-88"
                                    alt="vitrine"
                                />
                            </div>
                            <div className="">
                                <h5 className="text-center p-6">
                                    Site vitrine
                                </h5>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default SiteTypePage
