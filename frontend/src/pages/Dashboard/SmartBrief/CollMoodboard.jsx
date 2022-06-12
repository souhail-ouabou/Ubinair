import React, { useCallback, useEffect, useState } from 'react'
import './SmartBrief.css'
import { useDropzone } from 'react-dropzone'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import {
    AddColMoodBoard,
    DeleteMoodBoardImg,
} from '../../../redux/actions/projectActions'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import pdfPng from '../Assets/file-pdf-solid.png'
import uploadImg from '../Assets/upload-icon.png'
import ImgBlock from './ImgBlock'
const CollMoodboard = ({ project }) => {
    const initialState = {
        websiteInspiration: '',
    }
    const [showbtn, setShowbtn] = useState(false)
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
            toast.error('All files must be images', {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }, [])
    const [info, setInfo] = useState(initialState)
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
        },
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
        setInfo(project.clientBrief)
    }, [project.clientBrief])
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
                    onChange={handleChange}
                    name="websiteInspiration"
                    value={info?.websiteInspiration}
                    placeholder="Links of inspiring websites that you’d love your website to look like:
            beautifulwebsite.com
            amazingwebsite.com
            incrediblewebsite.com"
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
                    className="flex items-center justify-center border-2 border-purple-700 border-dotted w-full h-48 m-auto bg-slate-200 rounded-md"
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <div>
                            <p>Drag is Active</p>
                        </div>
                    ) : (
                        <div className="text-center ">
                            <img
                                className="w-[100px] m-auto"
                                src={uploadImg}
                                alt=""
                            />
                            <p>Click or Drag & Drop your images here</p>
                            <em className="text-slate-800">
                                (Only *.jpeg and *.png images will be accepted)
                            </em>
                        </div>
                    )}
                </div>
                <div>
                    {images.length > 0 && (
                        <div className=" flex flex-wrap">
                            {images.map((image, index) => (
                                <div className="flex ">
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
                <hr className="my-4 mx-auto w-[50%]"></hr>
                <div>
                    {info?.visualInspiration?.length > 0 && (
                        <div className=" flex flex-wrap">
                            {info.visualInspiration.map((v, index) => (
                                <ImgBlock id={id} v={v}/>
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
