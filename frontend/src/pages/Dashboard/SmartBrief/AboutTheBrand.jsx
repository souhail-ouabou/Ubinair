import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaTrash } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'

const AboutTheBrand = () => {
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
        if (rejectedFiles.length !== 0) {
            alert('rejectedFiles')
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/jpeg,image/png',
    })

    const deleteHandler = (file) => {
        setFiles((prevState) => {
            return prevState.filter((fw) => fw !== file)
        })
    }
    useEffect(() => {
        console.log('files', files)
    }, [files])

    return (
        <top className="glass flex flex-col items-start w-3/5 ">
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
            <div className="flex  justify-center gap-7">
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
                        <span className="text-sm">(ex. Brand Guideline)</span>
                    </label>

                    <div
                        className="border-2 border-gray-400 border-dotted   px-2 py-3  m-auto bg-slate-200 rounded-md  w-[270px] h-[100px]"
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        {isDragActive
                            ? 'Drag Active'
                            : 'Here you can drop ur file!'}
                        <em>(Only *.pdf and *.docs files will be accepted)</em>
                    </div>
                </div>
            </div>
            <div>
                {files.length > 0 && (
                    <div className=" flex flex-wrap ml-4">
                        {files.map((v, index) => (
                            <div className="flex items-center justify-start relative  w-full h-[50px] bg-slate-700 rounded-md mt-3">
                                <strong className="text-white  relative m-[16px]">
                                    {v.file.name}
                                </strong>
                                <button
                                    className="bg-red-600 rounded-tr-md  rounded-bl-xl w-7 h-7  flex  absolute top-0 right-0 "
                                    onClick={() => deleteHandler(v)}
                                >
                                    <TiDelete className="m-auto text-white justify-center items-center" />
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
                //     onClick={updateHandler}
                >
                    Submit
                </button>
        </top>
    )
}

export default AboutTheBrand
