import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-scroll'
const Goback = (props) => {
    return (
     
            <button
                type="button"
                className="text-white font-semibold flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80  text-sm px-5 py-2.5 text-center "
                onClick={props.previousTab}
            >
                <FaArrowAltCircleLeft />{' '}
                <span className="ml-2">Précédent </span>
            </button>
   
    )
}

export default Goback
