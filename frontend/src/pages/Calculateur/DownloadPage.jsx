import React, { useState } from 'react'
import Devise from './Devise'
import { motion } from 'framer-motion'
import { BsDownload } from 'react-icons/bs'
import Goback from './Goback'
export default function DownloadPage(props) {
    const [inputValue, setValue] = useState('')
    return (
        <div className={props.index === 5 ? 'text-white' : 'hidden'}>
            <div className="absolute top-[84%] left-[31%] md:top-[88%] md:left-[4%]">
                <Goback previousTab={props.previousTab} />
            </div>
            <div className="text-sm pt-5 md:text-2xl text-center pb-6  mt-20">
                <motion.h1
                    initial={{ y: 350 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.0, duration: 1.0 }}
                >
                    Très bien! Nous avons terminé.
                </motion.h1>
            </div>

            <div className="text-4xl sm:text-5xl  md:text-6xl text-center md:mb-10">
                <motion.h1
                    initial={{ y: 350 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.0, duration: 1.0 }}
                >
                    Nous avons estimé votre PROJET à :
                </motion.h1>
            </div>

            <Devise result={props.devis} />

            <div className="text-sm pt-5 md:text-2xl text-center pb-2  m">
                <motion.h1
                    initial={{ y: 350 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1.0, duration: 1.0 }}
                >
                    Ajouter le nom de projet avant de télécharger votre facture.
                </motion.h1>
            </div>
            <div className="text-center mb-20">
                <input
                    className="rounded-lg bg-white mt-2  p-2 w-[380px] text-gray-900 text-center  focus:border-blue-500  focus:outline-none "
                    type="name"
                    name="name"
                    value={props.name}
                    id="name"
                    placeholder="add your project name"
                    onChange={(e) => props.onChangeName(e.target.value)}
                />
            </div>
            <div className="absolute top-[92%] left-[34%] md:top-[88%]  md:left-[88%]">
                <button
                    type="button"
                    className="text-white  flex items-center justify-between  font-semibold  uppercase rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  text-sm px-5 py-2.5 text-center mr-2 disabled:cursor-not-allowed "
                    onClick={props.onDownload}
                    disabled={props.name == '' ? true : false}
                >
                    <BsDownload />
                    <span className="ml-2"> facture </span>
                </button>
            </div>
        </div>
    )
}
