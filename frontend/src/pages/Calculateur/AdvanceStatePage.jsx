import React from 'react'
import {motion}  from 'framer-motion'
import idea from '../../img/idea.png'
import tools from '../../img/tools.png'
import note from '../../img/note.png'
import verified from '../../img/verified.png'
import Devise from './Devise'
import Goback from './Goback'

 function AdvanceStatePage(props) {
  return (
     
    <div className={props.index===4?"text-white":"hidden"}>
          <div className="absolute top-[98rem] left-[31%] md:top-[88%] md:left-[4%]"
            >
                    <Goback previousTab={props.previousTab} />
              
            </div>
    <div>
    
    <Devise result={props.devis} />   

    <div  className="text-[2.8em] text-center pb-6 text-[#EEEEEF] font-semibold">
        <motion.h1 initial={{y:350}} animate={{y:0}} transition={{delay:1.0,duration:1.0}}>À quel stade êtes-vous ?​</motion.h1>
    </div>

    </div>

    <div className="grid  gap-x-6  pt-2 grid-cols-1 sm:grid-cols-2  md:grid-cols-4 mb-12">
        
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
        onClick={()=>props.onNext(5,'juste une idée')}
        >
            <div className="">
                <div className="text-center">
                    <div className="">
                        <img  src={idea} alt="e-commerce" className="object-contain mx-auto h-40 w-88"/>
                    </div>
                            <div className="">
                                <h5  className="text-center  p-6">C'est juste une idée</h5>
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
              className="border-0 glass rounded-md border-gray-200 pt-6 cursor-pointer mt-5 sm:mt-0 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-60"
              onClick={()=>props.onNext(5,'Brouillon déjà prêt')}
        >
            <div className="">
                <div className="text-center">
                    <div className="">
                        <img  src={note} alt="e-commerce" className="object-contain mx-auto md:ml-2 h-40 w-88"/>
                    </div>
                            <div className="">
                                <h5  className="text-center  p-6"> Brouillon déjà prêt</h5>
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
               className="border-0 rounded-md glass  cursor-pointer mt-5  bg-clip-padding backdrop-filter backdrop-blue bg-opacity-60 md:mt-0"
               onClick={()=>props.onNext(5,'Projet en cours de développement')}
        >
            <div className="">
                <div className="text-center">
                    <div className="">
                        <img  src={tools} alt="e-commerce" className="object-contain mx-auto h-40 w-88"/>
                    </div>
                            <div className="">
                                <h5  className="text-center pt-7">Projet en cours de développement</h5>
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
                className="border-0 rounded-md pt-6 cursor-pointer   mt-5   md:mt-0  bg-clip-padding backdrop-filter backdrop-blur glass bg-opacity-60 "
                 onClick={()=>props.onNext(5,'Projet déjà développé')}>
            <div className="">
                <div className="">
                    <div className="">
                        <img  src={verified} className="object-contain mx-auto  h-40 w-88"/>
                    </div>
                            <div className="">
                                <h5  className="text-center p-6">Projet déjà développé</h5>
                            </div>
                </div>
            </div>
            </motion.div>

                                    
    </div>

</div>
  )
}export default AdvanceStatePage;
