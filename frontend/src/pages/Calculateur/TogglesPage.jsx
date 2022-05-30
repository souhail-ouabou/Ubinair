import React from 'react'
import Toggle from './toggle/Toggle'
import Devise from './Devise'

function TogglesPage(props) {
 // console.log("Clculateur",props.allState);
    return (
        <div className={props.allState.index === 2 ? 'text-white' : 'hidden'}>
            <div>
                <Devise result={props.allState.devis} />

                <div className="text-4xl sm:text-5xl mt-4  md:text-6xl text-center pb-6 ">
                    <h1>Quelles fonctionnalités envisagez vous ?</h1>
                </div>
            </div>

            <div className="grid  gap-x-6  grid-cols-1 sm:grid-cols-2 md:ml-32 lg:ml-48">
                {props.allState.features?.map(togglerow => (
                    <Toggle
                        key={togglerow.id}
                        chosedValue={togglerow.id}
                        title={togglerow.title}
                        onmakeChange={props.onHandleCheck}
                        chekedValue={togglerow.case}
                    />
                ))}
            </div>
           
            <div className="mt-4">
                <button
                    type="button"
                    className="text-white mx-auto font-semibold flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80  text-sm px-5 py-2.5 text-center mr-2 "
                    onClick={() => props.onNext(3)}
                >
                    <span className=""> Continue </span>
                </button>
            </div>
        </div>
    )
}
export default TogglesPage
