import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
import './profile.css'
import { useSelector, useDispatch } from 'react-redux'
const Profile = () => {
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
      } = data;
    const auth = useSelector((state) => state.auth)
    const { user, isLogged, loading } = auth
    return (
        <>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className="grid grid-cols-1 profile_page sm:grid-cols-2 pt-24 gap-16">
                <div className="glass">
                    {/* <h2>{isAdmin ? "Admin Profile": "User Profile"}</h2> */}

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
                <div className="col-right ">
                    {/* <h2>{isAdmin ? "Users" : "My Orders"}</h2> */}

                    <div style={{ overflowX: 'auto' }}>
                        <table className="customers">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Admin</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>name</td>
                                    <td>email</td>
                                    <td>
                                        <i
                                            className="fas fa-check"
                                            title="Admin"
                                        ></i>
                                        <i
                                            className="fas fa-times"
                                            title="User"
                                        ></i>
                                    </td>
                                    <td>
                                        {/* <Link to={`/edit_user/${user._id}`}>
                                                <i className="fas fa-edit" title="Edit"></i>
                                            </Link> */}
                                        {/* <i className="fas fa-trash-alt" title="Remove"
                                            onClick={() => handleDelete(user._id)} ></i> */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
