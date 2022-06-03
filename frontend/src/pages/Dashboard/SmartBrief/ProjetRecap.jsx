import React from 'react'

const SmartBrief = ({indexPage}) => {
    return (
        <>
            <main
                className={indexPage === 3 ? ' flex-1  pb-8  mt-14 ' : 'hidden'}
            >
                <top className="flex  items-center justify-center gap-7 h-[272px]">
                    <div className="glass flex flex-row gap-4 h-full">
           
                                <>
                                    <h1 class="text-2xl font-semibold leading-relaxed text-slate-100">
                                       Title
                                    </h1>
                                </>
                                <div style={{ width: 200, height: 200 }}>

                                </div>
                            </div>
                        
               
                    <div className="flex flex-col gap-4 justify-center items-center glass   px-6  w-2/6 h-full">
                        <div>
                            <h1 class="text-3xl text-slate-100 font-semibold leading-relaxed ">
                                Total
                            </h1>
                        </div>
                    </div>
                </top>

         
                    <bottom className="flex items-start justify-start gap-12">
                      
     
                    </bottom>
                
            </main>
        </>
    )
}

export default SmartBrief
