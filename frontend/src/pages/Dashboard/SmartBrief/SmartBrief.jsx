import React, { useCallback, useEffect, useState } from 'react'
import { MdCameraswitch } from 'react-icons/md'
import './SmartBrief.css'
import { useDropzone } from 'react-dropzone'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { AddMoodBoardPics } from '../../../redux/actions/projectActions'
import axios from 'axios'
import {Route, Link, Routes, useParams} from 'react-router-dom';


const SmartBrief = ({ indexPage }) => {
    const params = useParams();
    const {id} = params
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
    const deleteHandler = (file) => {
        setImages((prevState) => {
            return prevState.filter((fw) => fw !== file)
        })
    }
    const updateHandler = () => {
                dispatch(AddMoodBoardPics({images,id})) 
                // axios.post("/api/upload_moodboard",{images})
                // .then(res => {console.log(res.data)})
                // .catch(err=>{console.log(err.message)})
    }

    useEffect(() => {
        console.log(images)
        console.log(id);
    }, [id, images])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
        },
    })
    return (
        <>
            <main
                className={indexPage === 3 ? ' flex-1  pb-8  mt-14 ' : 'hidden'}
            >
                <div>
                    <div className="glass flex flex-col items-start w-3/5 ">
                        <p class="text-2xl  font-semibold leading-relaxed text-slate-100">
                            About the brand
                        </p>
                        <div className="flex  items-start justify-between gap-7 ">
                            <div className="flex  flex-col justify-center items-start text-gray-900 gap-1  ">
                                <label className="text-lg font-medium text-white">
                                    Brand Name
                                </label>
                                <input
                                    className="rounded-md bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="phone"
                                    // value={phone}
                                    placeholder="Ex. Nike"
                                />
                            </div>
                            <div className="flex  flex-col justify-center items-start text-gray-900 gap-1 ">
                                <label className="text-lg font-medium text-white">
                                    Brand Tageline
                                </label>
                                <input
                                    className="rounded-md bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="tageline"
                                    // value={phone}
                                    placeholder="Ex. Just Do It!"
                                />
                            </div>
                        </div>
                        <div className="flex  items-start justify-between gap-7 ">
                            <div className="flex  flex-col justify-center items-start text-gray-900 gap-1  ">
                                <label className="text-lg font-medium text-white">
                                    Products or Services
                                </label>
                                <input
                                    className="rounded-md text-sm bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="phone"
                                    // value={phone}
                                    placeholder="What do you sell?"
                                />
                            </div>
                            <div className="flex  flex-col justify-center items-start text-gray-900 gap-1 ">
                                <label className="text-lg font-medium text-white">
                                    Values
                                </label>
                                <input
                                    className="rounded-md text-sm bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="values"
                                    // value={phone}
                                    placeholder="What are your core values?"
                                />
                            </div>
                        </div>
                        <div className="flex  items-start justify-between gap-7 ">
                            <div className="flex  flex-col justify-center items-start text-gray-900 gap-1  ">
                                <label className="text-lg font-medium text-white">
                                    Vision
                                </label>
                                <input
                                    className="rounded-md text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="vision"
                                    // value={phone}
                                    placeholder="What's your vision?"
                                />
                            </div>
                            <div className="flex  flex-col justify-center items-start text-gray-900 gap-1 ">
                                <label className="text-lg font-medium text-white">
                                    Mission
                                </label>
                                <input
                                    className="rounded-md text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="mission"
                                    // value={phone}
                                    placeholder="What are the objectives of the  Website ?"
                                />
                            </div>
                        </div>
                        <div className="flex  items-start justify-between gap-7 ">
                            <div className="flex  flex-col justify-center items-start text-gray-900 gap-1  ">
                                <label className="text-lg font-medium text-white">
                                    Objectives of the website
                                </label>
                                <input
                                    className="rounded-md text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="objectives"
                                    // value={phone}
                                    placeholder="What are the objectives of the website?"
                                />
                            </div>
                            <div className="flex  flex-col justify-center items-start text-gray-900 gap-1 ">
                                <label className="text-lg font-medium text-white">
                                    Tone of Voice
                                </label>
                                <input
                                    className="rounded-md text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="toneofvoice"
                                    // value={phone}
                                    placeholder="What's the tones pf voice of your brand ?"
                                />
                            </div>
                        </div>
                        <hr className="mt-8 m-auto w-[50%]"></hr>
                        <div className="flex  items-start justify-between gap-7">
                            <div className="flex  flex-col justify-start items-start text-gray-900 gap-1  ">
                                <label className="text-lg font-medium text-white text-left ">
                                    Target Audience
                                </label>
                                <textarea
                                    className="rounded-md px-2 py-3   text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px] h-[170px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="objectives"
                                    // value={phone}
                                    placeholder="Describe your target audience (age,
                                        gender, persona, ...)"
                                ></textarea>
                            </div>

                            <div className="flex  flex-col justify-start items-start text-gray-900 gap-1  ">
                                <label className="text-lg font-medium text-white text-left ">
                                    Competitors
                                </label>
                                <textarea
                                    className="rounded-md px-2 py-3   text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px] h-[170px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="objectives"
                                    // value={phone}
                                    placeholder="List your main competitors here:
                                Competitor 1
                                Competitor 2
                                Competitor 3"
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex  items-center justify-center gap-7">
                            <div className="flex  flex-col justify-start items-start text-gray-900 gap-1  ">
                                <label className="text-lg font-medium text-white text-left ">
                                    More Info
                                </label>
                                <textarea
                                    className="rounded-md px-2 py-3   text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px] h-[100px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="moreinfo"
                                    // value={phone}
                                    placeholder="Add more info that you think is important"
                                ></textarea>
                            </div>

                            <div className="flex  flex-col justify-start items-start text-gray-900 gap-1  ">
                                <label className="text-lg font-medium text-white text-clip inline w-full ">
                                    Existing Files{' '}
                                    <span className="text-sm">
                                        (ex. Brand Guideline)
                                    </span>
                                </label>
                                <textarea
                                    className="rounded-md px-2 py-3   text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[270px] h-[100px]"
                                    type="text"
                                    // onChange={handleChange}
                                    name="objectives"
                                    // value={phone}
                                    placeholder="List your main competitors here:
                                Competitor 1
                                Competitor 2
                                Competitor 3"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="glass flex flex-col items-start w-3/4 mt-2 ">
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
                                name="objectives"
                                // value={phone}
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
                                (Add images, illustrations, colors, or any
                                inspiring visuals that match your branding)
                            </label>

                            <div
                                className="border-2 border-gray-400 border-dotted w-full h-48 m-auto bg-slate-200 rounded-md"
                                {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                {isDragActive
                                    ? 'Drag Active'
                                    : 'Tou can drop ur images here !'}
                                <em>
                                    (Only *.jpeg and *.png images will be
                                    accepted)
                                </em>
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
                                                onClick={() =>
                                                    deleteHandler(image)
                                                }
                                            >
                                                <FaTrash className="m-auto text-white justify-center items-center" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            </div>
                            <button
                                className="bg-blue-600 rounded-tr-md  rounded-bl-xl w-10 h-10    flex "
                                onClick={() => updateHandler()}
                            >
                               Update
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SmartBrief
