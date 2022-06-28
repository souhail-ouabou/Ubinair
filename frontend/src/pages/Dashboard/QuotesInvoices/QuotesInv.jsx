import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { useDropzone } from 'react-dropzone'
import { TiDelete } from 'react-icons/ti'
import Quotes from './Quotes'
import Invoices from './Invoices'
const QuotesInv = ({ indexPage }) => {
    const GetProjectDetailsReducer = useSelector(
        (state) => state.GetProjectDetailsReducer
    )
    const {
        project: projectDetails,
        loading: loadingProjectDetails,
        error,
    } = GetProjectDetailsReducer
    const [files, setFiles] = useState([])

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
    return (
        <>
            <main
                className={indexPage === 5 ? 'flex-1  pb-8  mt-14 ml-80 ' : 'hidden'}
            >
                {loadingProjectDetails ? (
                    <div className=" text-white m-auto ">Loaaading QI ...</div>
                ) : projectDetails.specification?.length === 0 ? (
                    <div className="text-white "></div>
                ) : (
                    <>
                        <div className="flex flex-row w-full gap-4 items-start ">
                            <left className="flex flex-col items-start glass w-2/3 min-h-[620px] fixed max-w-[780px] pb-20 ">
                                <div className="flex items-start  justify-between gap-40">
                                    <p class="text-2xl  font-semibold leading-relaxed text-slate-100">
                                        Project Recap
                                    </p>
                                    <p class="text-2xl  font-bold leading-relaxed text-slate-100">
                                        32000 €
                                    </p>
                                </div>
                                <div className="grid grid-col-2 gap-8 text-slate-200 mt-12 w-full ">
                                    <div className="flex flex-1 flex-row items-center justify-center  ">
                                        <p className="text-lg font-semibold flex-1">
                                            Project :
                                        </p>
                                        <p className="text-base font-light flex-1">
                                            {projectDetails.type}
                                        </p>
                                    </div>
                                    <div className="flex flex-row items-start  ">
                                        <p className="text-lg font-semibold flex-1 ">
                                            Type :
                                        </p>
                                        <p className="text-base font-light flex-1">
                                            {projectDetails.subtype}
                                        </p>
                                    </div>
                                    <div className="flex flex-row items-start justify-center ">
                                        <p className="text-lg font-semibold flex-1 ">
                                            Fonctionnalités :
                                        </p>
                                        <div className="flex flex-col flex-1  ">
                                            {projectDetails.features.map(
                                                (p) => (
                                                    <p className="text-base font-light  ">
                                                        - {p.title}
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start justify-center ">
                                        <p className="text-lg font-semibold flex-1 ">
                                            Plan :
                                        </p>

                                        <p className="text-base font-light flex-1  ">
                                            {projectDetails.plan}
                                        </p>
                                    </div>
                                    <div className="flex flex-row items-center justify-center ">
                                        <p className="text-lg font-semibold flex-1  ">
                                            Stade :
                                        </p>
                                        <p className="text-base font-light flex-1 ">
                                            {projectDetails.stateOfAdvance}
                                        </p>
                                    </div>
                                </div>
                            </left>
                            <right className="flex flex-col gap gap-4 w-1/3 ml-[800px]">
                                <Quotes project={projectDetails} />
                                <Invoices project={projectDetails} />
                            </right>
                        </div>
                    </>
                )}
            </main>
        </>
    )
}

export default QuotesInv
