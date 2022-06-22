import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './profile.css'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import ProjetBlock from './ProjetBlock'
import {
    listAllProjects,
    listMyProjects,
} from '../../redux/actions/projectActions'
import {
    GetAllUsers,
    getUserDetails,
    updateUserProfile,
} from '../../redux/actions/usersAction'
import UserBlock from './UserBlock'
import { FaPhone } from 'react-icons/fa'
import { isLength, isMatch } from '../../utils/validation/Validation'
import { checkImage } from '../../utils/ImageUploade'
import { toast } from 'react-toastify'
import { USER_UPDATE_PROFILE_RESET } from '../../redux/actions/constants/userConstants'
import { MdCameraswitch } from 'react-icons/md'
import { CgAdd } from 'react-icons/cg'
import { dispatchGetUser } from '../../redux/actions/authAction'
import Search from './Search'
import { PopupButton } from 'react-calendly'
const Profile = () => {
    const dispatch = useDispatch()
    const keyword = window.location.pathname.split('/')[2]
    const initialState = {
        id: '',
        name: '',
        email: '',
        password: '',
        cf_password: '',
    }
    let navigate = useNavigate()
    const [data, setData] = useState(initialState)
    const [msg, setMsg] = useState(null)
    const [avatar, setAvatar] = useState('')
    const [change, setChange] = useState(true)
    const token = useSelector((state) => state.token)

    const { name, email, password, cf_password } = data
    const getAllUsersReducer = useSelector((state) => state.getAllUsersReducer)
    const {
        users,
        loading: loadingGetAllUsers,
        error: errgetAllUsers,
    } = useSelector((state) => state.getAllUsersReducer)

    const getUserReducer = useSelector((state) => state.getUserReducer)
    const { loading, user, isAdmin } = getUserReducer

    const userDeleteReducer = useSelector((state) => state.userDeleteReducer)
    const {
        success: successDelete,
        loading: loadingDelete,
        error,
    } = userDeleteReducer

    const ListMyProjectsReducer = useSelector(
        (state) => state.ListMyProjectsReducer
    )
    const {
        loading: loadingMyProjects,
        projects: myProjects,
        error: errorMyProjects,
    } = ListMyProjectsReducer

    const userUpdateProfileReducer = useSelector(
        (state) => state.userUpdateProfileReducer
    )
    const {
        loading: loadinguserUpdateProfile,
        success: successuserUpdateProfile,
    } = userUpdateProfileReducer

    const ListAllProjects = useSelector((state) => state.ListAllProjects)
    const {
        loading: loadingAllProjects,
        projects: AllProjects,
        error: errorAllProjects,
    } = ListAllProjects

    const projectDelete = useSelector((state) => state.projectDelete)
    const {
        loading: loadingProjectDelete,
        error: errorProjectDelete,
        success: SuccessProjectDelete,
    } = projectDelete

    const [toggletab, setToggletab] = useState(1)
    const Handletoggle = (index) => {
        setToggletab(index)
        switch (index) {
            case 1:
                navigate(`/profile`)
                dispatch(listAllProjects(keyword))
                break
            case 2:
                dispatch(GetAllUsers(token))
                break

            default:
                break
        }
    }
    const handleChange = (e) => {
        //place of do that -> onChange={(e) => setEmail(e.target.value) for each field (input) we do that
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value,
        })
        console.log('data : ', data)
        console.log('avatar : ', avatar)
    }

    const changeAvatar = (e) => {
        const file = e.target.files[0]

        const err = checkImage(file)
        if (err) {
            dispatch({
                type: 'Err',
                payload: { error: err },
            })

            toast.error(err, {
                position: toast.POSITION.TOP_CENTER,
            })
        }

        setAvatar(file)
        console.log('avatar : ', avatar)
    }

    const handleSubmit = (e) => {
        if (isLength(password)) setMsg('Length should be 6 char or more')
        if (!isMatch(password, cf_password)) setMsg('Password do not match')
        else {
            dispatch(updateUserProfile({ data, avatar, user }))
            setMsg(null)
        }
    }

    useEffect(() => {
        if (successuserUpdateProfile) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET })
            dispatch(dispatchGetUser(token))
        } else {
            // if (user.client) {
            dispatch(listMyProjects(keyword))
            // }
            if (isAdmin || SuccessProjectDelete) {
                dispatch(listAllProjects(keyword))
            }
            if (successDelete) {
                dispatch(GetAllUsers(token))
            }
        }
    }, [
        dispatch,
        successDelete,
        token,
        isAdmin,
        SuccessProjectDelete,
        successuserUpdateProfile,
        user.client,
        keyword,
    ])

    return (
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            {loading ? (
                'Loadding...'
            ) : (
                <div className="md:flex md:flex-row md:w-full md:h-full md:gap-12  md:mt-12 flex-col mt-24  justify-center z-10 overflow-hidden md:max-h-[760px] ">
                    <div className="glass text-white md:w-[500px] md:h-[760px] ">
                        <h2 className="text-white text-center text-2xl m-[10px 0]">
                            {isAdmin
                                ? 'Admin Profile'
                                : user.client
                                ? 'Client Profile'
                                : 'User Profile'}
                        </h2>

                        <div className="avatar ">
                            <img
                                src={
                                    avatar
                                        ? URL.createObjectURL(avatar)
                                        : user.avatar
                                }
                                alt=""
                            />
                            (
                            <span className="absolute left-0 w-full h-[33%]   -bottom-[15%]  md:h-[40%]  md:-bottom-[100%]  text-center uppercase font-normal text-white  bg-gradient-to-bl from-[#562885de] to-[#936cbe] transition ease-in-out delay-75">
                                <div className="flex flex-col items-center justify-center m-1 ">
                                    <MdCameraswitch />
                                    {/* <p className='hidden md:block'>Change</p> */}
                                    <input
                                        type="file"
                                        name="file"
                                        id="file_up"
                                        accept="image/*"
                                        onChange={changeAvatar}
                                    />
                                </div>
                            </span>
                            )
                        </div>
                        <em style={{ color: 'crimson' }}>
                            *Chose your picture then click update to apply the
                            change
                        </em>
                        {msg}
                        <div className="flex flex-col text-gray-300 py-2">
                            <label htmlFor="name">Name</label>
                            <input
                                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                                type="text"
                                onChange={handleChange}
                                name="name"
                                defaultValue={user.name}
                                placeholder="Enter votre nom"
                            />
                        </div>

                        <div className="flex flex-col text-gray-400 py-2">
                            <label htmlFor="email">Email</label>
                            <input
                                className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none cursor-not-allowed"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                id="email"
                                placeholder="Your email address"
                                disabled
                                value={user.email}
                            />
                        </div>

                        <div className="flex flex-col text-gray-300 py-2">
                            <label htmlFor="password">New Password</label>
                            <input
                                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                                type="password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                placeholder="Your password"
                                value={password}
                            />
                        </div>

                        <div className="flex flex-col text-gray-300 py-2">
                            <label htmlFor="cf_password">
                                Confirm New Password
                            </label>
                            <input
                                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                                type="password"
                                name="cf_password"
                                id="cf_password"
                                placeholder="Confirm password"
                                onChange={handleChange}
                                value={cf_password}
                            />
                        </div>

                        <button
                            className="py-3 px-6 sm:w-[60%] m-auto my-4 text-white flex items-center justify-center uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center 
                        md:w-auto  w-full 
                         hover:shadow-lg transition-all ease-in-out duration-100 font-bold
                        "
                            onClick={handleSubmit}
                        >
                            Update
                        </button>
                    </div>
                    <div className="col-right overflow-y-scroll  ">
                        {isAdmin ? (
                            <>
                                <div className="tabs_wrap">
                                    <ul className="flex  md:items-center md:justify-center ">
                                        <li
                                            className={
                                                toggletab === 1
                                                    ? 'active text-white'
                                                    : 'text-white'
                                            }
                                            onClick={() => Handletoggle(1)}
                                        >
                                            All Projects
                                        </li>
                                        <li
                                            className={
                                                toggletab === 2
                                                    ? 'active text-white'
                                                    : 'text-white'
                                            }
                                            onClick={() => Handletoggle(2)}
                                        >
                                            Users
                                        </li>
                                        {/* <li
                                        className={
                                            toggletab === 3
                                                ? 'active text-white'
                                                : 'text-white'
                                        }
                                        onClick={() => Handletoggle(3)}
                                    >
                                        Clients
                                    </li> */}
                                    </ul>
                                </div>
                                <Search toggletab={toggletab} />
                            </>
                        ) : !user.client ? (
                            <></>
                        ) : (
                            <>
                                <h1 className="text-center text-white text-xl font-bold tracking-widest uppercase mb-2">
                                    My projects
                                </h1>
                                <Search toggletab={1} />
                            </>
                        )}

                        {/* dispatched after check admin  */}
                        {loadingGetAllUsers ? (
                            <div className=" text-white"> Loaaading ...</div>
                        ) : errgetAllUsers && errgetAllUsers ? (
                            <div>errgetAllUsers</div>
                        ) : users && users.length === 0 ? (
                            <div className=" text-white">
                                {' '}
                                Users Empptyyyyyyyyy
                            </div>
                        ) : (
                            <>
                                {users &&
                                    users.map((user) => (
                                        <UserBlock
                                            key={user._id}
                                            user={user}
                                            toggletab={toggletab}
                                        />
                                    ))}
                            </>
                        )}

                        {loadingMyProjects || loadingAllProjects ? (
                            <div className=" text-white"> Loaaading ...</div>
                        ) : errorMyProjects || errorAllProjects ? (
                            <div>errorMyProjects</div>
                        ) : user.client &&
                          !isAdmin &&
                          myProjects.length === 0 ? (
                            <>My projects Emppt </>
                        ) : isAdmin && AllProjects.length === 0 ? (
                            <div className="text-white">All projects Emppt</div>
                        ) : !user.client && !isAdmin ? (
                            <div className="flex flex-col items-center justify-center mt-8">
                                <div className="text-center text-white text-xl font-bold tracking-widest uppercase ">
                                    Here you can see your estimates <br />
                                    Wait our call to becomes real projects and
                                    give you the access to dasboard ...
                                </div>

                                <div
                                    className="py-3 px-6 sm:w-[60%] my-4 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center mr-2
                        md:w-auto  w-full 
                         hover:shadow-lg transition-all ease-in-out duration-100 font-bold
                        "
                                >
                                    <PopupButton
                                        className="text-white  text-sm  text-center m
                                font-bold
                               "
                                        url="https://calendly.com/souhail_ouabou/tu-es-a-un-call-de-ton-site-internet"
                                        rootElement={document.getElementById(
                                            'root'
                                        )}
                                        text="Je Reserver un call! "
                                    ></PopupButton>
                                    <FaPhone className="ml-3" />
                                </div>
                                <Link
                                    to="/calculator"
                                    className="fixed bottom-0 right-0 "
                                >
                                    <button
                                        className="py-3 px-3  m-2 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center 
                        md:w-auto  w-full  hover:shadow-lg transition-all ease-in-out duration-100 font-bold
                        "
                                    >
                                        <CgAdd />
                                    </button>
                                </Link>
                                <div className="w-full">
                                    {myProjects.map((project) => (
                                        <ProjetBlock
                                            key={project._id}
                                            project={project}
                                            toggletab={toggletab}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (user.client && isAdmin) || isAdmin ? (
                            <>
                                <Link
                                    to="/calculator"
                                    className="fixed bottom-0 right-0 "
                                >
                                    <button
                                        className="py-3 px-3  m-2 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center 
                        md:w-auto  w-full  hover:shadow-lg transition-all ease-in-out duration-100 font-bold
                        "
                                    >
                                        <CgAdd />
                                    </button>
                                </Link>
                                {AllProjects.map((project) => (
                                    <ProjetBlock
                                        key={project._id}
                                        project={project}
                                        toggletab={toggletab}
                                        isAdmin={isAdmin}
                                    />
                                ))}
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/calculator"
                                    className="fixed bottom-0 right-0 "
                                >
                                    <button
                                        className="py-3 px-3  m-2 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center 
                        md:w-auto  w-full  hover:shadow-lg transition-all ease-in-out duration-100 font-bold
                        "
                                    >
                                        <CgAdd />
                                    </button>
                                </Link>
                                {myProjects.map((project) => (
                                    <ProjetBlock
                                        key={project._id}
                                        project={project}
                                        toggletab={toggletab}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Profile
