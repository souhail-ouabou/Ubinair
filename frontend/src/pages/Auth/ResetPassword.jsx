import React, { useState } from 'react'
import { isMatch, isLength } from '../../utils/validation/Validation'
import { useParams } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import axios from 'axios'
const initialState = {
    password: '',
    cf_password: '',
    success: '',
    err: '',
}

const ResetPassword = () => {
    const [data, setData] = useState(initialState)
    const { token } = useParams()
    const { password, cf_password, err, success } = data
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
            err: '',
            success: '',
        })
    }
    const resetPassword = async () => {
        if (isLength(password))
            return setData({
                ...data,
                err: 'Password must be at least 6 characters.',
                success: '',
            })

        if (!isMatch(password, cf_password))
            return setData({
                ...data,
                err: 'Password did not match',
                success: '',
            })
        try {
            const res = await axios.post(
                '/user/reset',
                { password },
                {
                    headers: { Authorization: token },
                }
            )
            return setData({ ...data, err: '', success: res.data.msg })
        } catch (err) {
            return setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }
    return (
        <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <div className='z-10'>
                <div>
                    <h1 className="text-white text-center text-5xl  ">
                        Reset Your Password !
                    </h1>
                    <h1 className="text-red-600 text-center mt-4">
                        {err && err}
                    </h1>
                    <h1 className="text-green-600 text-center mt-4">
                        {success && success}
                    </h1>

                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Password</label>
                        <input
                            className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Your Password"
                        />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>Confirme Password</label>
                        <input
                            className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                            type="password"
                            name="cf_password"
                            value={cf_password}
                            onChange={handleChange}
                            placeholder="Your Password"
                        />
                    </div>

                    <button
                        className="py-3 px-2  my-4 text-[#663993] flex items-center justify-center uppercase rounded-full bg-[#EEEEEF]   shadow-lg shadow-purple-800/25   text-sm  text-center mr-2
                          w-full  font-bold
                         hover:shadow-lg transition-all ease-in-out duration-100
                        "
                        onClick={resetPassword}
                    >
                        RESET PASSWORD
                    </button>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
