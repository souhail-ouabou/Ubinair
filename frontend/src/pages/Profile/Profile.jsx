import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './profile.css'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import ProjetBlock from './ProjetBlock'
import { listMyProjects } from '../../redux/actions/projectActions'
const Profile = () => {
    const dispatch = useDispatch()

    const initialState = {
        name: '',
        email: '',
        description: '',
        headline: '',
        password: '',
        cf_password: '',
    }
    const [data, setData] = useState(initialState)

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
    // const auth = useSelector((state) => state.auth)
    // const { user, isLogged, loading } = auth
    const getUserReducer = useSelector((state) => state.getUserReducer)
    const { loading, user, isAdmin } = getUserReducer

    const ListMyProjectsReducer = useSelector(
        (state) => state.ListMyProjectsReducer
    )
    const {
        loading: loadingMyProjects,
        projects,
        error: errorMyProjects,
    } = ListMyProjectsReducer

    const [toggletab, setToggletab] = useState(1)
    const Handletoggle = (index) => {
        setToggletab(index)
    }

    useEffect(() => {
        if (user.client) {
            dispatch(listMyProjects())
        }
    }, [dispatch, user.client])
    return (
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            {loading ? (
                'Loadding...'
            ) : (
                <div className="md:flex md:flex-row md:w-full md:gap-12  md:mt-10 flex-col w-60 ml-16 justify-center items-cente ">
                    <div className="glass text-white md:w-[500px] ">
                        {/* <h2>{isAdmin ? "Admin Profile": "User Profile"}</h2> */}
                        <h2 className="text-white text-center text-2xl m-[10px 0]">
                            Admin Profile
                        </h2>

                        <div className="avatar">
                            <img src={user.avatar} alt="" />
                            <span>
                                <i className="fas fa-camera"></i>
                                <p>Change</p>
                                <input type="file" name="file" id="file_up" />
                            </span>
                        </div>
                        <em style={{ color: 'crimson' }}>
                            *Chose your picture then click update to apply the
                            change
                        </em>

                        <div className="flex flex-col text-gray-300 py-2">
                            <label htmlFor="name">Name</label>
                            <input
                                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                                type="text"
                                //     onChange={handleChange}
                                name="name"
                                defaultValue={user.name}
                                placeholder="Enter votre nom"
                            />
                        </div>

                        <div className="flex flex-col text-gray-400 py-2">
                            <label htmlFor="email">Email</label>
                            <input
                                className="rounded-lg bg-gray-800 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                                type="email"
                                name="email"
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
                                value={cf_password}
                            />
                        </div>

                        <button
                            className="py-3 px-6 sm:w-[60%] m-auto my-4 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center 
                        md:w-auto  w-full 
                         hover:shadow-lg transition-all ease-in-out duration-100 font-bold
                        "
                        >
                            Update
                        </button>
                    </div>
                    <div>
                        {isAdmin ? (
                            <div class="tabs_wrap">
                                <ul>
                                    <li
                                        className={
                                            toggletab === 1
                                                ? 'active text-white'
                                                : 'text-white'
                                        }
                                        onClick={() => Handletoggle(1)}
                                    >
                                        xxxxx
                                    </li>
                                    <li
                                        className={
                                            toggletab === 2
                                                ? 'active text-white'
                                                : 'text-white'
                                        }
                                        onClick={() => Handletoggle(2)}
                                    >
                                        yyyyy
                                    </li>
                                    <li
                                        className={
                                            toggletab === 3
                                                ? 'active text-white'
                                                : 'text-white'
                                        }
                                        onClick={() => Handletoggle(3)}
                                    >
                                        zzzzzzzz
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <h1 className="text-center text-white text-xl font-bold tracking-widest uppercase mb-2">
                                My projects
                            </h1>
                        )}

                        {loadingMyProjects ? (
                          
                            <div className="col-right text-white"> Loaaading ...</div>
                        ) : errorMyProjects ? (
                            <div>errorMyProjects</div>
                        ) : projects.length === 0 ? (
                            <div className="col-right text-white">Emppt</div>
                        ) : (
                            <>
                                {projects.map((project) => (
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
