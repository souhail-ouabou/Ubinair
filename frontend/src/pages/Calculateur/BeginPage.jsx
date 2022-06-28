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
            <div
                className="flex flex-col mt-24 mb-6  items-center justify-center md:mb-12"
                data-aos="fade-up"
                data-aos-duration="4000"
            >
                <p className="text-[2.8em]  text-center m-auto text-[#EEEEEF] font-semibold">
                    Votre projet consiste en un :
                </p>
            </div>

            <div className="grid gap-x-6 gap-y-6 grid-cols-1 sm:grid-cols-2  md:grid-cols-3">
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
                    onClick={() => props.onNext(1, 'Site Web')}
                >
                    <div className="">
                        <div className="text-center">
                            <div className="">
                                <img
                                    alt="siteImg"
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
                    className="glass border-0 rounded-md  pt-6 cursor-pointer 
                    bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60"
                    onClick={() => props.onNext(1, 'Application mobile')}
                >
                    <div className="">
                        <div className="">
                            <div className="">
                                <img
                                    alt="mobileApp"
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
                    className="glass border-0 rounded-md  pt-6 cursor-pointer 
                    bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60"
                    onClick={() =>
                        props.onNext(1, 'Application mobile + Site web')
                    }
                >
                    <div className="">
                        <div className="text-center">
                            <div className="">
                                <img
                                    src={both}
                                    className="object-contain mx-auto h-40 w-88"
                                    alt="both"
                                />
                            </div>
                            <div className="">
                                <h5 className="text-center p-6">
                                    Site Web + Application mobile
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
