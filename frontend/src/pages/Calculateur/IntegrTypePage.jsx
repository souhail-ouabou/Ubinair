import React from 'react'
import {motion}  from 'framer-motion'
import inteCon from '../../img/inteConc.png'
import inte from '../../img/integ.png'
import Devise from './Devise'
import Goback from './Goback'

export default function IntegrTypePage(props) {
  return (
    <div className={props.index===3?"text-white":"hidden"}>
       <div className="absolute top-[64rem] left-[31%] md:top-[88%] md:left-[4%]"
            >
                
                    <Goback previousTab={props.previousTab} />
              
            </div>
    <div>
    
    <Devise result={props.devis} />   

    <div  className="text-[2.8em] pb-6 text-center m-auto text-[#EEEEEF] font-semibold">
        <motion.h1 initial={{y:350}} animate={{y:0}} transition={{delay:1.0,duration:1.0}}>…et concernant le design  ?</motion.h1>
    </div>

    </div>

    
    <div className="grid  gap-x-6  gap-y-6 pt-2 grid-cols-1 sm:grid-cols-2 mb-12">
        
        <motion.div  
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true }}
       whileHover={{
           scale:1.05,
           boxShadow:"0px 0px 8px rgb(255,255,255)"
       }}
       transition={{duration:0.2}}
        className="glass border-0 rounded-md  pt-6 cursor-pointer 
        bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60"
        onClick={()=>props.onNext(4,'Conception et intégration')}
        >
            <div className="">
                <div className="text-center">
                    <div className="">
                        <img  src={inteCon} alt="e-commerce" className="object-contain mx-auto h-40 w-88"/>
                    </div>
                            <div className="">
                                <h5  className="text-center  p-6">Conception et Intégration </h5>
                            </div>
                </div>
            </div>
         </motion.div>


         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }} 
           whileHover={{
            scale:1.05,
            boxShadow:"0px 0px 8px rgb(255,255,255)"
        }}
           transition={{duration:0.2}}
           className="glass border-0 rounded-md  pt-6 cursor-pointer 
           bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 "
           onClick={()=>props.onNext(4,'Intégration')}>
            <div >
                <div >
                    <div >
                        <img alt='inte' src={inte} className="object-contain mx-auto h-40 w-88"/>
                    </div>
                            <div className="">
                                <h5  className="text-center p-6">Intégration</h5>
                            </div>
                </div>
            </div>
            </motion.div>

                                    
    </div>

</div>
  )
}
