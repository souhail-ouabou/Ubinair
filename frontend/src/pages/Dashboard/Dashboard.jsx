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
    const { success: successDeleteMoodBoardImg, loading: loadingDeleteMoodBoardImg } =
    DeleteMoodBoardImgReducer

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
    }, [dispatch, id, isAdmin, successAddAboutBrand, successAddColMoodBoard, successDeleteBriefFile,
    successDeleteMoodBoardImg, successUpdate, user?.client])

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
            default:
                break
        }
    }

    return (
        <>
        
            <div className="w-full min-h-screen flex flex-row gap-3 z-10 ">
                <SideBar showPage={(x) => showPage(x)} />
                <Overview /*state={OverviewPage} */ indexPage={indexPage} />
                <Tracker /*state={trackerPage}*/ indexPage={indexPage} />
                <SmartBrief /*state={trackerPage}*/ indexPage={indexPage} />
                <Content indexPage={indexPage} />
                <QuotesInv /*state={trackerPage}*/ indexPage={indexPage} />
            </div>
        </>
    )
}

export default Dashboard
