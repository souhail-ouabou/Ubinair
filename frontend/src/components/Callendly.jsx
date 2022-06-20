import React from 'react'
import { Link } from 'react-router-dom'
import { InlineWidget,PopupWidget } from 'react-calendly'
const Callendly = () => {
    return (
        <div className="z-10" id="callendly">
            <div
                className="flex flex-col items-center justify-center mt-1 "
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <p className="text-base  text-[#EEEEEF] font-semibold uppercase ">
                    UNE OFFRE T'INTÉRESSE ?
                </p>
                <p className="text-[2.8em]  text-center m-auto text-[#EEEEEF] font-semibold   ">
                    Réserve un Call !
                </p>
            </div>
            <div>
                <InlineWidget
                    styles={{
                        height: '700px',
                        
                    }}
                    url="https://calendly.com/souhail_ouabou/tu-es-a-un-call-de-ton-site-internet"
                />
            </div>

        </div>
    )
}

export default Callendly




