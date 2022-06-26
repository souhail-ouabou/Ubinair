import React, { useState } from 'react'
import './ProgressBar.css'

const ProgressBar = ({ done }) => {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
        }
        setStyle(newStyle)
    }, 1000)

    return (
        <div className="bg-[#d8d8d8] rounded-3xl relative my-[15px] mx-0 h-[70px] md:w-[300px] w-[200px]">
            <div className="progress-done" style={style}>
                {done == 0 ? <div className="flex ml-72 text-black">0%</div> :  (<>{done}%</>)}
            </div>
        </div>
    )
}

export default ProgressBar
