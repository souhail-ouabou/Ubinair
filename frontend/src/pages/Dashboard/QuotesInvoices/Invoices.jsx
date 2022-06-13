import React, { useCallback, useEffect, useState } from 'react'
import { TiDelete, TiDownload } from 'react-icons/ti'
import { toast } from 'react-toastify'
import { useDropzone } from 'react-dropzone'
import { AddInvoices,  DeleteInvoices } from '../../../redux/actions/projectActions'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import pdfPng from '../Assets/file-pdf-solid.png'
import uploadImg from '../Assets/upload-icon.png'
import { saveAs } from 'file-saver'
const Invoices = ({ project }) => {
    const [files, setFiles] = useState([])
    const [info, setInfo] = useState([])
    const dispatch = useDispatch()
    const params = useParams()
    const { id } = params
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
        console.log('acceptedFiles', acceptedFiles)
        console.log('rejectedFiles', rejectedFiles)
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
    const updateHandler = () => {
        // basesArray = files.map((p) => p.base)
        console.log('files', files)
        dispatch(AddInvoices({ files, id }))
    }
    const deleteUploadedHandler = (public_id) => {
        if (window.confirm('Are You Sure?')) {
            dispatch(DeleteInvoices({ id, public_id }))
        }
    }
    const saveFile = (url) => {
        saveAs(url, 'example.pdf')
    }
    useEffect(() => {
        setInfo(project.files)
    }, [project.files])
    return (
        <div className="flex flex-col glass  px-4  ">
            <p class="text-2xl  font-semibold leading-relaxed text-slate-100">
                Invoices
            </p>
            <div
                className="flex items-center justify-center border-2 border-purple-700 border-dotted   px-2 py-1  m-auto bg-slate-200 rounded-md  w-full h-[170px]"
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
                        <p className="text-sm">
                            Click or Drag & Drop your files here
                        </p>
                        <em className="text-slate-800 text-xs">
                            (Only *.pdf files will be accepted)
                        </em>
                    </div>
                )}
            </div>
            <div className=" flex flex-wrap ">
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
                {info?.InvoicesFiles?.length > 0 && (
                    <>
                        {info.InvoicesFiles?.map((v, index) => (
                            <div className="flex items-center justify-center relative w-[40%] h-[130px] bg-slate-700 rounded-md mt-3">
                                <a
                                    target="_blank"
                                    href={`${v?.secure_url}`}
                                    className="text-white  relative m-[16px]"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="w-[60px] h-[60px] m-auto"
                                        src={pdfPng}
                                        alt="pdf"
                                    />
                                    <p className="text-xs text-center  break-all	">
                                        {v.fileName}
                                    </p>
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
    )
}

export default Invoices
