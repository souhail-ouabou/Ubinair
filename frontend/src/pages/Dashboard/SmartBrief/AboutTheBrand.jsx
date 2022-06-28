import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaTrash } from 'react-icons/fa'
import { TiDelete, TiDownload } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Styles from '../Styles'
import {
    AddAboutBrand,
    DeleteBriefFile,
    Getprojectdetails,
} from '../../../redux/actions/projectActions'
import { saveAs } from 'file-saver'

import pdfPng from '../Assets/file-pdf-solid.png'
import uploadImg from '../Assets/upload-icon.png'
import { ADD_ABOUT_BRAND_RESET } from '../../../redux/actions/constants/projetconstants'

const AboutTheBrand = ({ project }) => {
    const initialState = {
        brandName: '',
        brandTageLine: '',
        ProductService: '',
        values: '',
        vision: '',
        mission: '',
        objectives: '',
        toneOfVoice: '',
        targetAudience: '',
        competitors: '',
        moreInfo: '',
    }
    const dispatch = useDispatch()
    const params = useParams()
    const { id } = params
    const [files, setFiles] = useState([])
    const [info, setInfo] = useState(initialState)

    const AddAboutBrandReducer = useSelector(
        (state) => state.AddAboutBrandReducer
    )
    const { success, loading } = AddAboutBrandReducer
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((file) => {
            //convert file to base64
            const reader = new FileReader()
            reader.onload = () => {
                setFiles((prevState) => [
                    ...prevState,
                    { base: reader.result, file: file },
                ])
            }
            reader.readAsDataURL(file)
        })
        // console.log('acceptedFiles', acceptedFiles)
        // console.log('rejectedFiles', rejectedFiles)
        let errArray
        let f
        let errmsg
        let errtoast
        if (rejectedFiles.length !== 0) {
            for (const item of rejectedFiles) {
                errArray = item.errors
                for (const it of errArray) {
                    // console.log('object', it.message)
                    errmsg = it.message
                }
                f = item.file
                console.log('file name', f.name)
                errtoast = f.name + ' ' + errmsg

                console.log(errtoast)
                toast.error(errtoast, {
                    position: toast.POSITION.TOP_CENTER,
                })
            }
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            '.pdf': [],
        },
        maxSize: 10000000,
    })

    const deleteDroppedHandler = (file) => {
        setFiles((prevState) => {
            return prevState.filter((fw) => fw !== file)
        })
    }
    const deleteUploadedHandler = (public_id) => {
        if (window.confirm('Are You Sure?')) {
            dispatch(DeleteBriefFile({ id, public_id }))
        }
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
        // basesArray = files.map((p) => p.base)
        console.log('files', files)
        dispatch(AddAboutBrand({ info, files, id }))
    }
    const saveFile = (url) => {
        saveAs(url, 'example.pdf')
    }
    useEffect(() => {
        setInfo(project.clientBrief)
    }, [project.clientBrief])

    return (
        <div className='grid grid-cols-2 gap-x-96  ml-5'>
          
        
        <div className="glass flex flex-col items-start w-[750px]   ">
            <p class="text-2xl  font-semibold leading-relaxed text-slate-100">
                About the brand
            </p>
            <div className="flex  items-start justify-between gap-7 ">
                <div className="flex  flex-col justify-center items-start text-gray-900 gap-1  ">
                    <label className="text-lg font-medium text-white">
                        Brand Name
                    </label>
                    <input
                        className="rounded-md bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[310px]"
                        type="text"
                        onChange={handleChange}
                        name="brandName"
                        value={info?.brandName}
                        placeholder="Ex. Nike"
                    />
                </div>
                <div className="flex  flex-col justify-center items-start text-gray-900 gap-1 ">
                    <label className="text-lg font-medium text-white">
                        Brand Tageline
                    </label>
                    <input
                        className="rounded-md bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[310px]"
                        type="text"
                        onChange={handleChange}
                        name="brandTageLine"
                        value={info?.brandTageLine}
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
                        className="rounded-md text-sm bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[310px]"
                        type="text"
                        onChange={handleChange}
                        name="ProductService"
                        value={info?.ProductService}
                        placeholder="What do you sell?"
                    />
                </div>
                <div className="flex  flex-col justify-center items-start text-gray-900 gap-1 ">
                    <label className="text-lg font-medium text-white">
                        Values
                    </label>
                    <input
                        className="rounded-md text-sm bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[310px]"
                        type="text"
                        onChange={handleChange}
                        name="values"
                        value={info?.values}
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
                        className="rounded-md text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[310px]"
                        type="text"
                        onChange={handleChange}
                        name="vision"
                        value={info?.vision}
                        placeholder="What's your vision?"
                    />
                </div>
                <div className="flex  flex-col justify-center items-start text-gray-900 gap-1 ">
                    <label className="text-lg font-medium text-white">
                        Mission
                    </label>
                    <input
                        className="rounded-md text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[310px]"
                        type="text"
                        onChange={handleChange}
                        name="mission"
                        value={info?.mission}
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
                        className="rounded-md text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[310px]"
                        type="text"
                        onChange={handleChange}
                        name="objectives"
                        value={info?.objectives}
                        placeholder="What are the objectives of the website?"
                    />
                </div>
                <div className="flex  flex-col justify-center items-start text-gray-900 gap-1 ">
                    <label className="text-lg font-medium text-white">
                        Tone of Voice
                    </label>
                    <input
                        className="rounded-md text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[310px]"
                        type="text"
                        onChange={handleChange}
                        name="toneOfVoice"
                        value={info?.toneOfVoice}
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
                        className="rounded-md px-2 py-3   text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[310px] h-[170px]"
                        type="text"
                        onChange={handleChange}
                        name="targetAudience"
                        value={info?.targetAudience}
                        placeholder="Describe your target audience (age,
                    gender, persona, ...)"
                    ></textarea>
                </div>

                <div className="flex  flex-col justify-start items-start text-gray-900 gap-1  ">
                    <label className="text-lg font-medium text-white text-left ">
                        Competitors
                    </label>
                    <textarea
                        className="rounded-md px-2 py-3   text-xs bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-[310px] h-[170px]"
                        type="text"
                        onChange={handleChange}
                        name="competitors"
                        value={info?.competitors}
                        placeholder="List your main competitors here:
                Competitor 1
                Competitor 2
                Competitor 3"
                    ></textarea>
                </div>
            </div>
            <div className="w-full">
                <div className="flex  flex-col justify-center  items-start text-gray-900 gap-1     ">
                    <label className="text-lg font-medium text-white text-left ">
                        More Info
                    </label>
                    <textarea
                        className="rounded-md px-2 py-3   text-base bg-slate-200  focus:border-blue-500 focus:bg-slate-300 focus:outline-none  text-gray-500 flex-2 w-full h-[100px]"
                        type="text"
                        onChange={handleChange}
                        name="moreInfo"
                        value={info?.moreInfo}
                        placeholder="Add more info that you think is important"
                    ></textarea>
                </div>
            </div>

            <div className="flex  flex-col justify-start items-start text-gray-900 gap-1 w-full  ">
                <label className="text-lg font-medium text-white text-clip inline w-full ">
                    Existing Files{' '}
                    <span className="text-sm">(ex. Brand Guideline)</span>
                </label>
                <div
                    className="flex items-center justify-center border-2 border-purple-700 border-dotted   px-2 py-1  m-auto bg-slate-200 rounded-md  w-full h-[160px]"
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
                            <p>Click or Drag & Drop your files here</p>
                            <em className="text-slate-800">
                                (Only *.pdf files will be accepted)
                            </em>
                        </div>
                    )}
                </div>
            </div>
            <div className=" flex flex-wrap w-full">
                {files.length > 0 && (
                    <>
                        {files.map((v, index) => (
                            <div className="flex items-center justify-start relative  w-full h-[50px] bg-slate-700 rounded-md mt-3">
                                <strong className="text-white  relative m-[16px]">
                                    {v.file.name}
                                </strong>
                                <button
                                    className="bg-red-600 rounded-tr-md  rounded-bl-xl w-7 h-7  flex  absolute top-0 right-0 "
                                    onClick={() => deleteDroppedHandler(v)}
                                >
                                    <TiDelete className="m-auto text-white justify-center items-center" />
                                </button>
                            </div>
                        ))}
                    </>
                )}
            </div>

            <hr className="my-4 mx-auto w-[50%]"></hr>
            <div className=" flex flex-wrap w-full gap-4">
                {info?.briefFiles?.length > 0 && (
                    <>
                        {info.briefFiles.map((v, index) => (
                            <div className="flex items-center justify-center relative w-[40%] h-[130px] bg-slate-700 rounded-md mt-3">
                                <a
                                    target="_blank"
                                    href={`${v?.secure_url}`}
                                    className="text-white  relative m-[16px]"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="w-[90px] h-[90px] m-auto"
                                        src={pdfPng}
                                        alt="pdf"
                                    />
                                    {v.fileName}
                                </a>

                                <button
                                    className="bg-red-600 rounded-tr-md  rounded-bl-xl w-7 h-7  flex  absolute top-0 right-0 "
                                    onClick={() =>
                                        deleteUploadedHandler(v.public_id)
                                    }
                                >
                                    <TiDelete className="m-auto text-white justify-center items-center" />
                                </button>
                                <button
                                    className="bg-blue-600 rounded-br-md   rounded-tl-xl w-7 h-7  flex  absolute bottom-0 right-0 "
                                    onClick={() => saveFile(v?.secure_url)}
                                >
                                    {' '}
                                    <TiDownload className="m-auto text-white justify-center items-center" />
                                </button>
                            </div>
                        ))}
                    </>
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
        <div>
             <Styles />
        </div>
        </div>
        
    )
}

export default AboutTheBrand
