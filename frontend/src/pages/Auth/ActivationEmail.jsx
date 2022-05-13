import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { FaCheckCircle } from 'react-icons/fa'
import axios from 'axios'

const ActivationEmail = () => {
    const { activation_token } = useParams()
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')
    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post('/user/activation', {
                        activation_token,
                    })
                    console.log(res)
                    setSuccess(res.data.msg)
                } catch (error) {
                    err.response.data.msg && setErr(err.response.data.msg)
                }
            }
            activationEmail()
        }
    }, [activation_token])
    return (
        <>
            <Helmet>
                <title>Activate your account</title>
            </Helmet>
            <div
                className={
                    success
                        ? 'bg-teal-100  border-teal-500 border-t-4 rounded-b text-teal-900 px-4 py-3 shadow-md'
                        : err &&
                          'bg-red-100  border-red-500 border-t-4 rounded-b text-red-900 px-4 py-3 shadow-md'
                }
                role="alert"
            >
                <div class="flex">
                    <div class="py-2 mr-4">
                        <FaCheckCircle />
                    </div>
                    <div>
                        <p class="font-bold">
                            {success ? 'success' : err && 'Problem!'}
                        </p>
                        <p class="text-sm">{success ? success : err && err}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivationEmail
