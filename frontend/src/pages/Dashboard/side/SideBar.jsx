import React from 'react'
import Logo from '../../../img/Logo.png'
export default function SideBar({ showPage }) {
    return (
        <aside className="py-6 px-10 w-[19%] min-h-[620px] mr-3 mt-14 glass fixed ">
            <img className="w-16 object-cover m-auto " src={Logo} alt="Logo" />{' '}
            <ul className="flex flex-col gap-y-6 pt-7 cursor-pointer text-xl font-semibold leading-relaxed text-slate-100">
                <li className="m-auto">
                    <div
                        className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group"
                        onClick={() => showPage(1)}
                    >
                        <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />

                        <span>Overview</span>
                    </div>
                </li>
                <li className="m-auto">
                    <div
                        className="flex gap-x-4 items-center py-2  text-white hover:text-indigo-600 group"
                        onClick={() => showPage(2)}
                    >
                        <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />

                        <span>Task Tracker</span>
                    </div>
                </li>
                <li className="m-auto">
                    <div
                        className="flex gap-x-4 items-center  py-2  text-white hover:text-indigo-600 group"
                        onClick={() => showPage(3)}
                    >
                        <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />

                        <span> Smart Brief</span>
                    </div>
                </li>
                <li className="m-auto">
                    <div
                        className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group"
                        onClick={() => showPage(4)}
                    >
                        <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />

                        <span>Content</span>
                    </div>
                </li>
                <li className="m-auto">
                    <div
                        className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group"
                        onClick={() => showPage(5)}
                    >
                        <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />

                        <span>Invoice</span>
                    </div>
                </li>
                <li className="m-auto">
                    <div className="flex gap-x-4 items-center py-2 text-white hover:text-indigo-600 group"
                     onClick={() => showPage(6)}>
                        <span class="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />

                        <span>Live Feedback</span>
                    </div>
                </li>
            </ul>
        </aside>
    )
}
