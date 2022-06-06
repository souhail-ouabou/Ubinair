import React, { useCallback, useEffect, useState } from 'react'
import { MdCameraswitch } from 'react-icons/md'
import './SmartBrief.css'
import { useDropzone } from 'react-dropzone'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { AddColMoodBoard } from '../../../redux/actions/projectActions'
import axios from 'axios'
import { Route, Link, Routes, useParams } from 'react-router-dom'

const CollMoodboard = () => {
    const initialState = {
        webinspiration: '',
    }
    const params = useParams()
    const { id } = params
    const dispatch = useDispatch()
    const [images, setImages] = useState([])
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((file) => {
            //convert file to base64
            const reader = new FileReader()
            reader.onload = () => {
                setImages((prevState) => [...prevState, reader.result])
            }
            reader.readAsDataURL(file)
        })
        console.log('acceptedFiles', acceptedFiles)
        console.log('rejectedFiles', rejectedFiles)
        if (rejectedFiles.length !== 0) {
            alert('rejectedFiles')
        }
    }, [])
    const [info, setInfo] = useState(initialState)
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: "image/jpeg,image/png"

    })

    const deleteHandler = (file) => {
        setImages((prevState) => {
            return prevState.filter((fw) => fw !== file)
        })
    }

    const handleChange = (e) => {
        //place of do that -> onChange={(e) => setEmail(e.target.value) for each field (input) we do that
        const { name, value } = e.target
        setInfo({
            ...info,
            [name]: value,
        })
        console.log('info...:   ', info)
    }
    const updateHandler = () => {
        dispatch(AddColMoodBoard({ info, images, id }))
        // axios.post("/api/upload_moodboard",{images})
        // .then(res => {console.log(res.data)})
        // .catch(err=>{console.log(err.message)})
    }

    useEffect(() => {
        console.log(images)
    }, [images])

    return (
        <bottom className="glass flex flex-col items-start w-3/4 mt-2 ">
            <p class="text-2xl  font-semibold leading-relaxed text-slate-100">
                Collaborative Moodboard
            </p>

            <div className="flex  flex-col  text-gray-900 gap-1 w-full ">
                <label className="text-lg font-medium text-white">
                    Website Inspiration
                </label>
                <textarea
                    className="rounded-md px-2 py-3   text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2  h-[100px]"
                    type="text"
                    // onChange={handleChange}
                    name="webinspiration"
                    // value={phone}
                    placeholder="Links of inspiring websites that you’d love your website to look like:
            beautifulwebsite.com
            amazingwebsite.com
            incrediblewebsite.com"
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="flex  flex-col justify-center items-start text-gray-900 gap-1 w-full ">
                <label className="text-lg font-medium text-white">
                    Visual Inspiration
                </label>
                <label className="text-xs font-light text-white">
                    (Add images, illustrations, colors, or any inspiring visuals
                    that match your branding)
                </label>

                <div
                    className="border-2 border-gray-400 border-dotted w-full h-48 m-auto bg-slate-200 rounded-md"
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    {isDragActive
                        ? 'Drag Active'
                        : 'Tou can drop ur images here !'}
                    <em>(Only *.jpeg and *.png images will be accepted)</em>
                </div>
                <div>
                    {images.length > 0 && (
                        <div className=" flex flex-wrap">
                            {images.map((image, index) => (
                                <div className="flex">
                                    <img
                                        className="object-cover w-[200px] h-[200px] relative m-[16px] overflow-hidden "
                                        src={image}
                                        key={index}
                                        alt=""
                                    />

                                    <button
                                        className="bg-red-600 rounded-tr-md  rounded-bl-xl w-10 h-10  absolute  flex "
                                        onClick={() => deleteHandler(image)}
                                    >
                                        <FaTrash className="m-auto text-white justify-center items-center" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button
                    className="py-3 px-6 sm:w-[60%] m-auto my-4 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center 
    md:w-auto  w-full 
     hover:shadow-lg transition-all ease-in-out duration-100 font-bold
    "
                    onClick={updateHandler}
                >
                    Submit
                </button>
            </div>
        </bottom>
    )
}

export default CollMoodboard
