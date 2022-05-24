import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import '../Profile/profile.css'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import ProjetBlock from '../Profile/ProjetBlock'
import { listMyProjects } from '../../redux/actions/projectActions'
import { GetAllUsers, getUserDetails } from '../../redux/actions/usersAction'

const EditUser = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const userDetailsReducer = useSelector((state) => state.userDetailsReducer)

    const { loading, error, user,isAdmin } = userDetailsReducer
    const initialState = {
        name: '',
        email: '',
        description: '',
        headline: '',
        password: '',
        cf_password: '',
    }
    const [data, setData] = useState(initialState)
    const [showProjects, setShowProjects] = useState(false)
    const token = useSelector((state) => state.token)

    const {
        name,
        email,
        password,
        cf_password,
        err,
        success,
        description,
        headline,
    } = data

    const [toggletab, setToggletab] = useState(1)

    useEffect(() => {
        if (token) {
            //    dispatch(dispatchLogin()); //WE GOT  logged change to false so we transfer it to true
            //Get user information cuz after get token useeffecr re compile and get error mn dispatchLogin
            if (!user.name || user._id !== id) {
                dispatch(getUserDetails(id, token))
            }
        }
    }, [dispatch, id, token, user._id, user.client, user.name])
    const toggleShowProjects = () => {
        setShowProjects(!showProjects)
    }

    return (
        <>
            <Helmet>
                <title>Update user</title>
            </Helmet>
            {loading ? (
                'Loadding...'
            ) : (
                <div className="md:flex md:flex-row md:w-full md:gap-12  md:mt-12 flex-col w-60 ml-16 justify-center  ">
                    <div className="glass text-white md:w-[500px] ">
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
                                defaultValue={user.name}
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
                                value={user.email}
                            />
                        </div>
                        <div className="flex justify-center items-center  gap-20">
                            <div className='flex  gap-6 justify-center items-center'>
                                <label htmlFor="toggle-switch">
                                    is Client{' '}
                                </label>
                                <input
                                    type="checkbox"
                                    // value={props.chosedValue}
                                    // onChange={props.onmakeChange}
                                    checked={user.client}
                                    id="toggle-switch"
                                    className="cursor-pointer h-5 w-10 rounded-full appearance-none bg-white bg-opacity-5  border-2 border-white checked:bg-gray-600 transition duration-200 relative"
                                />
                            </div>
                            <div className='flex  gap-6 justify-center items-center'>
                                <label htmlFor="toggle-switch">is Admin</label>
                                <input
                                    type="checkbox"
                                    // value={user.isAdmin}
                                    // onChange={props.onmakeChange}
                                    checked={isAdmin}
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
                            >
                                Update
                            </button>
                            <button
                                className="py-3 px-6 sm:w-[60%]    my-4 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center 
                        md:w-auto  w-full 
                         hover:shadow-lg transition-all ease-in-out duration-100 font-bold 
                        "
                                onClick={toggleShowProjects}
                            >
                                {showProjects ? (
                                    <>Hide Projects</>
                                ) : (
                                    <>Show Projects</>
                                )}
                            </button>
                        </div>
                    </div>
                    {showProjects && (
                        <div className="col-right z-10">
                            <h1 className="text-center text-white text-xl font-bold tracking-widest uppercase mb-2">
                                projects of : {user.name}
                            </h1>

                            {user.projets.length === 0 ? (
                                <div className="text-white">Emppt</div>
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
