import React, { useState } from 'react'
import login from '../../img/login.svg'
import Avatar from '../../img/Avatar.svg'
import { useNavigate } from 'react-router-dom'
import { dispatchRegister } from '../../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import {
    isEmpty,
    isEmail,
    isLength,
    isMatch,
} from '../../utils/validation/Validation'
import axios from 'axios'
const initialState = {
    name: '',
    phone: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: '',
}

const Login = () => {
    const [creds, setCreds] = useState(initialState)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const { name, email, phone, password, cf_password, err, success } = creds
    const userRegister = useSelector((state) => state.userRegister)

    const { error, msg } = userRegister
    const handleChange = (e) => {
        //place of do that -> onChange={(e) => setEmail(e.target.value) for each field (input) we do that
        const { name, value } = e.target
        setCreds({
            ...creds,
            [name]: value,
            err: '',
            success: '',
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!isMatch(password, cf_password))
            return setCreds({
                ...creds,
                err: 'Password did not match.',
                success: '',
            })
        else {
            dispatch(dispatchRegister(creds))
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full pt-24">
            <div className="background  bg-transparent ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="hidden sm:block  ml-24 mr-24 mt-28 z-10 ">
                <img src={login} alt="" className="w-[520px]  mt-16 " />
            </div>
            <div className="flex flex-col justify-center items-center ">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-[400px] w-full mx-auto glass p-8 px-8 rounded-lg"
                >
                    <img
                        src={Avatar}
                        alt=""
                        className="m-auto block max-w-[30%] justify-center "
                    />
                    <h2 className="dark:text-white text-4xl font-bold text-center">
                        Register
                    </h2>
                    <h1 className="text-red-600 text-center mt-4">
                        {err ? err : error}
                    </h1>
                    <h1 className="text-green-600 text-center mt-4">{msg}</h1>

                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Nom Complet</label>
                        <input
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="text"
                            onChange={handleChange}
                            name="name"
                            value={name}
                            placeholder="Enter votre nom"
                        />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Phone</label>
                        <input
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="text"
                            onChange={handleChange}
                            name="phone"
                            value={phone}
                            placeholder="Phone"
                        />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Email</label>
                        <input
                            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="text"
                            onChange={handleChange}
                            name="email"
                            value={email}
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Password</label>
                        <input
                            className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label> Confirm Password</label>
                        <input
                            className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="password"
                            name="cf_password"
                            value={cf_password}
                            onChange={handleChange}
                            placeholder="Confirm password"
                        />
                    </div>
                    <div className="flex justify-end   text-gray-400 py-2">
                        <p className="cursor-pointer"> Forgot Password !</p>
                    </div>
                    <button
                        className="py-3 px-6  my-4 text-[#663993] flex items-center justify-center uppercase rounded-full bg-[#EEEEEF]   shadow-lg shadow-purple-800/25   text-sm  text-center mr-2
                          w-full  font-bold
                         hover:shadow-lg transition-all ease-in-out duration-100
                        "
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
