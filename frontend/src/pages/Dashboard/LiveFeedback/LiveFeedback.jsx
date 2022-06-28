import React from 'react'
import soon from '../Assets/Soon.png'
const LiveFeedback = ({ indexPage }) => {
    return (
        <main
            className={
                indexPage === 6 ? 'flex-1  pb-8  mt-14 ml-80 ' : 'hidden'
            }
        >
            <div className="flex flex-col w-[70%]  items-center justify-center glass min-h-[620px] fixed  pb-20 ">
                <div className="flex flex-col items-center  justify-center gap-4">
                <img
                            className=" m-auto"
                            src={soon}
                            alt="Coming Soon"
                        />
                    <p class="text-4xl  font-semibold leading-relaxed text-slate-100">
                        Coming soon...
                    </p>
                    
                </div>
               
            </div>
        </main>
    )
}

export default LiveFeedback
