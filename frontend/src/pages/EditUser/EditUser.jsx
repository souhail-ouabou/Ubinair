import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import '../Profile/profile.css'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import ProjetBlock from '../Profile/ProjetBlock'
import { listMyProjects } from '../../redux/actions/projectActions'
import {
    GetAllUsers,
    getUserDetails,
    updateUserStatus,
} from '../../redux/actions/usersAction'
import ACTIONS, {
    UPDATE_USERSTATUS_RESET,
} from '../../redux/actions/constants/userConstants'
import PropagateLoader from 'react-spinners/PropagateLoader'

const EditUser = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const userDetailsReducer = useSelector((state) => state.userDetailsReducer)
    const { loading, error, user } = userDetailsReducer
    const updateUserStatusReducer = useSelector(
        (state) => state.updateUserStatus
    )
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = updateUserStatusReducer
    const [checkAdmin, setCheckAdmin] = useState(false)
    const [client, setClient] = useState(false)

    const [data, setData] = useState([])
    const token = useSelector((state) => state.token)

    const { name, email } = data
    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: UPDATE_USERSTATUS_RESET })
            dispatch(getUserDetails(id, token))
        } else {
            if (token) {
                //    dispatch(dispatchLogin()); //WE GOT  logged change to false so we transfer it to true
                //Get user information cuz after get token useeffecr re compile and get error mn dispatchLogin
                if (!user.name || user._id !== id) {
                    dispatch(getUserDetails(id, token))
                } else {
                    setData(user)
                    setCheckAdmin(user.role === 1 ? true : false)
                    setClient(user.client)
                }
            }
        }
    }, [dispatch, id, successUpdate, token, user])

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUserStatus(id, checkAdmin, client))
    }

    const handleCheck = () => {
        setCheckAdmin(!checkAdmin)
    }
    const handleCheckClient = () => {
        setClient(!client)
    }

    return (
        <>
            <Helmet>
                <title>Update user</title>
            </Helmet>
            {loading ? (
                <div className="flex flex-col items-center justify-center mt-8">
                    <PropagateLoader color="#ffffff" />
                </div>
            ) : (
                <div className="md:flex md:flex-row md:w-full md:gap-12  md:mt-12 flex-col w-60 ml-16 justify-center overflow-hidden md:max-h-[760px] ">
                    <div className="glass text-white md:w-[500px] md:h-[500px] mt-9 ">
                        <div className="avatar">
                            <img src={user.avatar} alt="" />
                        </div>

                        <div className="flex flex-col text-gray-400 py-2">
                            <label htmlFor="name">Name</label>
                            <input
                                className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none cursor-not-allowed	"
                                type="text"
                                //     onChange={handleChange}
                                name="name"
                                defaultValue={name}
                                placeholder="Enter votre nom"
                                disabled
                            />
                        </div>

                        <div className="flex flex-col text-gray-400 py-2">
                            <label htmlFor="email">Email</label>
                            <input
                                className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none cursor-not-allowed	"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your email address"
                                disabled
                                value={email}
                            />
                        </div>
                        <div className="flex justify-center items-center  gap-20">
                            <div className="flex  gap-6 justify-center items-center">
                                <label htmlFor="toggle-switch">
                                    is Client{' '}
                                </label>
                                <input
                                    type="checkbox"
                                    // value={props.chosedValue}
                                    onChange={handleCheckClient}
                                    checked={client}
                                    id="toggle-switch"
                                    className="cursor-pointer h-5 w-10 rounded-full appearance-none bg-white bg-opacity-5  border-2 border-white checked:bg-gray-600 transition duration-200 relative"
                                />
                            </div>
                            <div className="flex  gap-6 justify-center items-center">
                                <label htmlFor="toggle-switch">is Admin</label>
                                <input
                                    type="checkbox"
                                    // value={user.isAdmin}
                                    onChange={handleCheck}
                                    checked={checkAdmin}
                                    id="toggle-switch"
                                    className="cursor-pointer h-5 w-10 rounded-full appearance-none bg-white bg-opacity-5  border-2 border-white checked:bg-gray-600 transition duration-200 relative"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row justify-center gap-4">
                            <button
                                className="py-3 px-6 sm:w-[60%]  my-4 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center 
                        md:w-auto  w-full 
                         hover:shadow-lg transition-all ease-in-out duration-100 font-bold
                        "
                                onClick={handleUpdate}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                    {user.projets && (
                        <div className="col-right z-10 overflow-y-scroll ">
                            <h1 className="text-center text-white text-xl font-bold tracking-widest uppercase mb-2">
                                projects of : {user.name}
                            </h1>

                            {user.projets.length === 0 ? (
                                <div className="text-white text-xl flex flex-col items-center justify-center mt-8">
                                    No Projects to show
                                </div>
                            ) : (
                                <>
                                    {user.projets.map((project) => (
                                        <ProjetBlock
                                            key={project._id}
                                            project={project}
                                            toggletab={1}
                                        />
                                    ))}
                                </>
                            )}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default EditUser
