import React from 'react'
import { motion } from 'framer-motion'
import siteImg from '../../img/web-site.png'
import mobileApp from '../../img/mobile-app.png'
import both from '../../img/both.png'
import Goback from './Goback'
import { Link } from 'react-router-dom'
function BeginPage(props) {
    return (
        <div className={props.index === 0 ? 'text-white' : 'hidden'}>
            <div className="text-4xl sm:text-5xl pt-16 md:text-6xl text-center pb-6">
                <motion.h1
                    initial={{ y: 350 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.0, duration: 1.0 }}
                >
                    Votre projet consiste en un :
                </motion.h1>
            </div>
            <div className="grid  gap-x-6  grid-cols-1 sm:grid-cols-2  md:grid-cols-3">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0px 0px 8px rgb(255,255,255)',
                    }}
                    transition={{ duration: 0.2 }}
                    className="border rounded-md border-gray-200 pt-6 cursor-pointer 
                             bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60"
                    onClick={() => props.onNext(1)}
                >
                    <div className="">
                        <div className="text-center">
                            <div className="">
                                <img
                                    src={siteImg}
                                    className="object-contain mx-auto h-40 w-88"
                                />
                            </div>
                            <div className="">
                                <h5 className="text-center  p-6">Site Web </h5>
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
                    className="border rounded-md border-gray-200 pt-6 cursor-pointer 
                            mt-5  sm:mt-0 md:mt-0  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 "
                >
                    <div className="">
                        <div className="">
                            <div className="">
                                <img
                                    src={mobileApp}
                                    className="object-contain mx-auto h-40 w-88"
                                />
                            </div>
                            <div className="">
                                <h5 className="text-center p-6">
                                    Application mobile
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
                    className="border rounded-md  border-gray-200 pt-6 cursor-pointer  mt-5
                            md:mt-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60"
                >
                    <div className="">
                        <div className="text-center">
                            <div className="">
                                <img
                                    src={both}
                                    className="object-contain mx-auto h-40 w-88"
                                />
                            </div>
                            <div className="">
                                <h5 className="text-center p-6">
                                    Site Web + application mobile
                                </h5>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default BeginPage
