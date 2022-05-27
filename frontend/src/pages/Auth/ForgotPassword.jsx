import React, { useState } from 'react'
import axios from 'axios'

import { isEmail } from '../../utils/validation/Validation'

const initialState = {
    email: '',
    success: '',
    err: '',
}
const ForgotPassword = () => {
    const [data, setData] = useState(initialState)
    const { email, success, err } = data
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
            err: '',
            success: '',
        })
    }
    const forgotPassword = async () => {
        if (!isEmail(email))
            return setData({ ...data, err: 'Invalid email', success: '' })
        try {
            console.log('test')
            const res = await axios.post('/user/forgot', { email })

            return setData({ ...data, err: '', success: res.data.msg })
        } catch (err) {
            err.response.data.msg &&
                setData({ ...data, err: err.response.data.msg, success: '' })
        }
    }
    return (
        <div className='z-10'>
            <h1 className="text-white text-center text-5xl  ">
                Forgot Your Password ?
            </h1>

            <h1 className="text-red-600 text-center mt-4">{err && err}</h1>
            <h1 className="text-green-600 text-center mt-4">
                {success && success}
            </h1>
            <div className="flex flex-col text-gray-400 py-2">
                <label>Enter your email address</label>

                <input
                    className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="text"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    placeholder="Your Email"
                />
            </div>
            <button
                className="py-3 px-2  my-4 text-[#663993] flex items-center justify-center uppercase rounded-full bg-[#EEEEEF]   shadow-lg shadow-purple-800/25   text-sm  text-center mr-2
                          w-full  font-bold
                         hover:shadow-lg transition-all ease-in-out duration-100
                        "
                onClick={forgotPassword}
            >
                Verify your email
            </button>
        </div>
    )
}
export default ForgotPassword
