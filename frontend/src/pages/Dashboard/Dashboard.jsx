import React, { useEffect, useState } from 'react'

import SideBar from './side/SideBar'
import Overview from './Overview'
import Content from './ContentSharing'
import Tracker from './Tracker'
import SmartBrief from './SmartBrief/SmartBrief'
import { useDispatch, useSelector } from 'react-redux'
import {
    ADD_ABOUT_BRAND_RESET,
    ADD_COL_MOODBOARDE_RESET,
    DELETE_BRIEF_FILE_RESET,
    DELETE_MOODB_IMG_RESET,
    PROJET_UPDATE_RESET,
} from '../../redux/actions/constants/projetconstants'
import { Getprojectdetails } from '../../redux/actions/projectActions'
import { useParams } from 'react-router-dom'
import QuotesInv from './QuotesInvoices/QuotesInv'
import LiveFeedback from './LiveFeedback/LiveFeedback'

const Dashboard = () => {
    // const [OverviewPage, setOverPage] = useState('')
    // const [trackerPage, setTrackPage] = useState('hidden')
    const [indexPage, setIndexPage] = useState(1)
    const dispatch = useDispatch()
    const { id } = useParams()

    const AddAboutBrandReducer = useSelector(
        (state) => state.AddAboutBrandReducer
    )
    const { success: successAddAboutBrand, loading: loadingAddAboutBrand } =
        AddAboutBrandReducer

    const AddColMoodBoardReducer = useSelector(
        (state) => state.AddColMoodBoardReducer
    )
    const { success: successAddColMoodBoard, loading: loadingAddColMoodBoard } =
        AddColMoodBoardReducer

    const DeleteBriefFileReducer = useSelector(
        (state) => state.DeleteBriefFileReducer
    )
    const { success: successDeleteBriefFile, loading: loadingDeleteBriefFile } =
        DeleteBriefFileReducer

    const DeleteMoodBoardImgReducer = useSelector(
        (state) => state.DeleteMoodBoardImgReducer
    )
    const {
        success: successDeleteMoodBoardImg,
        loading: loadingDeleteMoodBoardImg,
    } = DeleteMoodBoardImgReducer

    const projectUpdateReducer = useSelector(
        (state) => state.projectUpdateReducer
    )
    const { success: successUpdate, loading: loadingProjectUpdate } =
        projectUpdateReducer

    const getUserReducer = useSelector((state) => state.getUserReducer)
    const { loading, user, isAdmin } = getUserReducer

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PROJET_UPDATE_RESET })
        }
        if (successAddAboutBrand) {
            dispatch({ type: ADD_ABOUT_BRAND_RESET })
        }
        if (successDeleteBriefFile) {
            dispatch({ type: DELETE_BRIEF_FILE_RESET })
        }
        if (successAddColMoodBoard) {
            dispatch({ type: ADD_COL_MOODBOARDE_RESET })
        }
        if (successDeleteMoodBoardImg) {
            dispatch({ type: DELETE_MOODB_IMG_RESET })
        } else {
            if (user.client || isAdmin) {
                dispatch(Getprojectdetails(id))
            }
        }
    }, [
        dispatch,
        id,
        isAdmin,
        successAddAboutBrand,
        successAddColMoodBoard,
        successDeleteBriefFile,
        successDeleteMoodBoardImg,

        user?.client,
    ])

    const showPage = (i) => {
        switch (i) {
            case 1:
                setIndexPage(i)
                break
            case 2:
                setIndexPage(i)
                break
            case 3:
                setIndexPage(i)
                break
            case 4:
                setIndexPage(i)
                break
            case 5:
                setIndexPage(i)
                break
            case 6:
                setIndexPage(i)
                break
            default:
                break
        }
    }

    return (
        <>
            <div className="md:hidden z-10 text-base text-white text-center flex flex-col justify-center items-center gap-12">
                <div>
                    <h1>For Now The Dashboard relased just on the Desktop</h1>
                    <h1 className="text-white text-center text-lg font-medium my-6">
                        You can open it on Desktop without any problem
                    </h1>
                </div>
                <div className='absolute bottom-0 right-0 left-0' >
                    <h1>The mobile view will be relased soon </h1>
                    <p>Thank you !</p>
                </div>
            </div>
            <div className="md:w-full md:min-h-screen md:flex md:flex-row md:gap-3 hidden z-10 ">
                <SideBar showPage={(x) => showPage(x)} />
                <Overview indexPage={indexPage} />
                <Tracker indexPage={indexPage} />
                <SmartBrief indexPage={indexPage} />
                <Content indexPage={indexPage} />
                <QuotesInv indexPage={indexPage} />
                <LiveFeedback indexPage={indexPage} />
            </div>
        </>
    )
}

export default Dashboard
