import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { BsDownload } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoMdAdd } from 'react-icons/io'
import { useState, useEffect } from 'react'
import TextEditor from './TextEditor'
import { ObjectID } from 'bson'
import 'react-quill/dist/quill.snow.css'
import {
    AddMediaPage,
    DeleteMedia,
    UpdateContentsProject,
} from '../../redux/actions/projectActions'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useCallback } from 'react'
import { TiDelete, TiDownload } from 'react-icons/ti'
import { toast } from 'react-toastify'
import { useDropzone } from 'react-dropzone'
import { saveAs } from 'file-saver'
import pdfPng from './Assets/file-png-solid.png'
import uploadImg from './Assets/upload-icon.png'
import { FaTrash } from 'react-icons/fa'

export default function ContentSharing({ indexPage }) {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [images, setImages] = useState([])
    const deleteDroppedHandler = (file) => {
        setImages((prevState) => {
            return prevState.filter((fw) => fw !== file)
        })
    }
    const [info, setInfo] = useState({})
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((image) => {
            //convert file to base64
            const reader = new FileReader()
            reader.onload = () => {
                setImages((prevState) => [
                    ...prevState,
                    { base: reader.result, image: image },
                ])
            }
            reader.readAsDataURL(image)
        })

        console.log('acceptedFiles', acceptedFiles)
        console.log('rejectedFiles', rejectedFiles)
        if (rejectedFiles.length !== 0) {
            toast.error('All files must be images', {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
        },
    })
    const GetProjectDetailsReducer = useSelector(
        (state) => state.GetProjectDetailsReducer
    )
    const {
        project: projectDetails,
        loading: loadingProjectDetails,
        error,
    } = GetProjectDetailsReducer

    const initIndex = 0
    const [form, setForm] = useState(false)

    const [Contents, setContents] = useState([])
    const [activeTab, setActiveTab] = useState(0)
    const [addedSection, setAdded] = useState('')
    const [ChosenId, setChosenId] = useState('')
    const [showEditorVal, setShow] = useState('')

    const setChosen = (id, i) => {
        setActiveTab(i)
        setInfo(projectDetails.contents[i].media)
        setChosenId(id)
        console.log('id chosen' + ChosenId)
        Contents.map((C) => {
            if (C._id == id) setShow(C.description)
        })
    }
    const handleAddSection = () => {
        let newContents = Contents.concat({
            id: new ObjectID(),
            title: addedSection,
            description: 'Here you can your page content',
        })
        setContents(newContents)
        // dispatch(UpdateContentsProject(id,newContents))
        setForm(false)
    }
    const updateHandler = () => {
        console.log(images)
        dispatch(AddMediaPage({ images, id, ChosenId }))
    }
    const saveFile = (url) => {
        saveAs(url)
    }
    const deleteUploadedHandler = (public_id) => {
        if (window.confirm('Are You Sure?')) {
            dispatch(DeleteMedia({ id, public_id, ChosenId }))
        }
    }
    useEffect(() => {
        if (ChosenId !== '') {
            let newContents = Contents.map((C) => {
                if (C._id == ChosenId)
                    return { ...C, description: showEditorVal }
                return C
            })

            setContents(newContents)
            console.log('new contents', JSON.stringify(Contents))
        }
    }, [showEditorVal])

    useEffect(() => {
        if (!loadingProjectDetails) {
            setContents(projectDetails.contents)
            projectDetails.contents &&
                setChosenId(projectDetails.contents[initIndex]?._id)
            projectDetails.contents &&
                setShow(projectDetails.contents[initIndex]?.description)
            projectDetails.contents &&
                setInfo(projectDetails.contents[initIndex]?.media)
        }
        console.log('ChosenId', ChosenId)
    }, [loadingProjectDetails])

    const handleSave = (e) => {
        console.log('the id : ', ChosenId)
        dispatch(UpdateContentsProject(id, Contents))
    }

    return (
        <div
            className={
                indexPage === 4 ? ' flex-1  pb-8  mt-14 ml-80' : 'hidden'
            }
        >
            <div className="tabs_wrap">
                <ul className="flex  md:items-center md:justify-center font-semibold text-[#EEEEEF] ">
                    {!loadingProjectDetails &&
                        Contents?.map((C, i) => {
                            return (
                                <li
                                    key={i}
                                    className={
                                        activeTab == i
                                            ? '!bg-purple-600 px-20'
                                            : 'px-20'
                                    }
                                    onClick={() => {
                                        setChosen(C._id, i)
                                    }}
                                >
                                    {C.title}
                                </li>
                            )
                        })}

                    <li
                        className="h-12 text-center"
                        onClick={() => setForm(true)}
                    >
                        {form ? (
                            <input
                                type="text"
                                placeholder="add section"
                                className="bg-gray-800 rounded-full text-center absolute top-0 left-2 w-[120px]"
                                value={addedSection}
                                onChange={(event) => {
                                    setAdded(event.target.value)
                                }}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        handleAddSection()
                                    }
                                }}
                            />
                        ) : (
                            <IoMdAdd className="m-auto text-2xl" />
                        )}
                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-3 gap-x-4 grid-flow-row-dense ">
                <div className="col-span-2 glass h-[700px]">
                    <div className="mt-4 pt-2 font-semibold text-[#EEEEEF] ">
                        <span className="text-[1.8em] ">Copywrite</span>
                    </div>
                    <div className="bg-white h-[420px] text-black">
                        <TextEditor
                            onChangeTE={(val) => setShow(val)}
                            showEditorVal={showEditorVal}
                        />
                    </div>
                    <div className="text-center mt-3">
                        <button
                            class="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full"
                            onClick={handleSave}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
                <div className="glass ">
                    <h1 className="text-white text-[1.8em] font-semibold text-left ">
                        Media
                    </h1>
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
                                    (Only *.jpeg and *.png images will be
                                    accepted)
                                </em>
                            </div>
                        )}
                    </div>
                    <div className="w-[300px] mt-2">
                        {images.length > 0 && (
                            <div className=" flex flex-wrap">
                                {images.map((image, index) => (
                                    <div className="flex ">
                                        <img
                                            className="object-cover w-[100px] h-[100px] relative m-[16px] overflow-hidden "
                                            src={image.base}
                                            key={index}
                                            alt=""
                                        />

                                        <button
                                            className="bg-red-600 rounded-tr-md  rounded-bl-xl w-10 h-10  absolute  flex "
                                            onClick={() =>
                                                deleteDroppedHandler(image)
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
                        className="py-3 px-6 sm:w-[60%] m-auto my-4 text-white flex items-center justify-between uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-md  dark:shadow-purple-800/40  text-sm  text-center 
    md:w-auto  w-full 
     hover:shadow-lg transition-all ease-in-out duration-100 font-bold
    "
                        onClick={updateHandler}
                    >
                        Submit
                    </button>
                    <hr className="my-4 mx-auto w-[50%]"></hr>
                    <div className=" flex flex-col w-full gap-2">
                        {info?.length > 0 && (
                            <>
                                {info.map((v, index) => (
                                    <div className="flex items-center justify-center relative   bg-slate-700 rounded-md ">
                                        <a
                                            target="_blank"
                                            href={`${v?.secure_url}`}
                                            className="text-white  relative m-[16px]"
                                            rel="noreferrer"
                                        >
                                           <strong className="text-white  relative m-[16px]">
                                    
                                            {v.fileName}
                                </strong>
                                        </a>

                                        <button
                                            className="bg-red-600 rounded-tr-md  rounded-bl-xl w-7 h-7  flex  absolute top-0 right-0 "
                                            onClick={() =>
                                                deleteUploadedHandler(
                                                    v.public_id
                                                )
                                            }
                                        >
                                            <TiDelete className="m-auto text-white justify-center items-center" />
                                        </button>
                                        <button
                                            className="bg-blue-600 rounded-br-md   rounded-tl-xl w-7 h-7  flex  absolute bottom-0 right-0 "
                                            onClick={() =>
                                                saveFile(v?.secure_url)
                                            }
                                        >
                                            {' '}
                                            <TiDownload className="m-auto text-white justify-center items-center" />
                                        </button>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
             
                </div>
            </div>
        </div>
    )
}
