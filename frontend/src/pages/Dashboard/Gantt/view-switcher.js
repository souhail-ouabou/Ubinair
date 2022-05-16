import React, { useState } from 'react'
import 'gantt-task-react/dist/index.css'
import { ViewMode } from 'gantt-task-react'
import {
    FaPhone,
    FaQuestion,
    FaCalendarWeek,
    FaPollH,
    FaRegLifeRing,
    FaCalculator,
} from 'react-icons/fa'
import {
    BsFillCalendarMonthFill,
    BsFillCalendarDayFill,
    BsFillCalendar3EventFill,
    BsFillCalendar2DateFill,
} from 'react-icons/bs'

import { FcCalendar, FcClock } from 'react-icons/fc'

export const ViewSwitcher = ({
    onViewModeChange,
    onViewListChange,
    isChecked,
}) => {
    const [dateState, useDateState] = useState(new Date())
    return (
        <div className='mt-8'>
            <hr className='m-auto w-[50%]'></hr>
            <div className="flex items-center justify-center gap-52 text-stone-200 mt-2">
                <h1 class="text-2xl font-semibold leading-relaxed text-slate-100">
                    Gantt chart
                </h1>
                <p className="flex items-center justify-center ">
                    <FcCalendar />{' '}
                    {dateState.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                    ,
                    <FcClock />
                    {dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                </p>
            </div>
            <div className="ViewContainer flex items-center justify-center mt-2 text-slate-50">
                <button
                    className="py-3 px-4 sm:w-[60%] my-4 text-[#663993] flex items-center justify-between uppercase rounded-full bg-[#EEEEEF]    dark:shadow-purple-800/80   text-xs  text-center mr-2
         md:w-auto  w-full  font-bold
          hover:shadow-lg transition-all ease-in-out duration-100
         "
                    onClick={() => onViewModeChange(ViewMode.QuarterDay)}
                >
                    <BsFillCalendar3EventFill className="mr-3 " />
                    Quarter of day
                </button>
                <button
                    className="py-3 px-4 sm:w-[60%] my-4 text-[#663993] flex items-center justify-between uppercase rounded-full bg-[#EEEEEF]    dark:shadow-purple-800/80   text-xs  text-center mr-2
         md:w-auto  w-full  font-bold
          hover:shadow-lg transition-all ease-in-out duration-100
         "
                    onClick={() => onViewModeChange(ViewMode.HalfDay)}
                >
                    <BsFillCalendar2DateFill className="mr-3 " />
                    Half of Day
                </button>
                <button
                    className="py-3 px-4 sm:w-[60%] my-4 text-[#663993] flex items-center justify-between uppercase rounded-full bg-[#EEEEEF]    dark:shadow-purple-800/80   text-xs  text-center mr-2
         md:w-auto  w-full  font-bold
          hover:shadow-lg transition-all ease-in-out duration-100
         "
                    onClick={() => onViewModeChange(ViewMode.Day)}
                >
                    <BsFillCalendarDayFill className="mr-3 " />
                    Day
                </button>
                <button
                    className="py-3 px-4 xs:w-[60%] my-4 text-[#663993] flex items-center justify-between uppercase rounded-full bg-[#EEEEEF]    dark:shadow-purple-800/80   text-xs  text-center mr-2
         md:w-auto  w-full  font-bold
          hover:shadow-lg transition-all ease-in-out duration-100
         "
                    onClick={() => onViewModeChange(ViewMode.Week)}
                >
                    <FaCalendarWeek className="mr-3 " />
                    Week
                </button>
                <button
                    className="py-3 px-4 xs:w-[60%] my-4 text-[#663993] flex items-center justify-between uppercase rounded-full bg-[#EEEEEF]    dark:shadow-purple-800/80   text-xs  text-center mr-2
         md:w-auto  w-full  font-bold
          hover:shadow-lg transition-all ease-in-out duration-100
         "
                    onClick={() => onViewModeChange(ViewMode.Month)}
                >
                    <BsFillCalendarMonthFill className="mr-3 " />
                    Month
                </button>

                {/* <div className="Switch">
                <label className="Switch_Toggle">
                    <input
                        type="checkbox"
                        defaultChecked={isChecked}
                        onClick={() => onViewListChange(!isChecked)}
                    />
                    <span className="Slider" />
                </label>
                Show Task List
            </div> */}
            </div>
        </div>
    )
}
