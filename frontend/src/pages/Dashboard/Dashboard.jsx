import React, { useEffect, useState } from 'react'

import SideBar from './side/SideBar'
import Overview from './Overview'
import Tracker from './Tracker'
import SmartBrief from './SmartBrief/SmartBrief'
import { useDispatch, useSelector } from 'react-redux'
import {
    ADD_ABOUT_BRAND_RESET,
    DELETE_BRIEF_FILE_RESET,
    PROJET_UPDATE_RESET,
} from '../../redux/actions/constants/projetconstants'
import { Getprojectdetails } from '../../redux/actions/projectActions'
import { useParams } from 'react-router-dom'

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

    const DeleteBriefFileReducer = useSelector(
        (state) => state.DeleteBriefFileReducer
    )
    const { success: successDeleteBriefFile, loading: loadingDeleteBriefFile } =
    DeleteBriefFileReducer

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

            // dispatch({ type: PROJECT_DETAILS_RESET })
            // console.log('successUpdate')
        } 
        if(successDeleteBriefFile){
            dispatch({ type: DELETE_BRIEF_FILE_RESET })
        }
        else {
            if (user.client || isAdmin) {
                dispatch(Getprojectdetails(id))
            }
        }
    }, [dispatch, id, isAdmin, successAddAboutBrand, successDeleteBriefFile, successUpdate, user.client])
    const showPage = (i) => {
        // if (i == 1) {
        //     // setOverPage('')
        //     // setTrackPage('hidden')

        //     setIndexPage(i)

        //     // setTasks(tasksDesign)
        // } else if (i == 2) {
        //     setIndexPage(i)
        //     // setOverPage('hidden')
        //     // setTrackPage('')

        //     // setTasks(tasksContent)
        // }

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
            </div>
        </>
    )
}

export default Dashboard
