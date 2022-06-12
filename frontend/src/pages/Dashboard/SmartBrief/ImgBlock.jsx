import React, { useState } from 'react'
import { TiDelete, TiDownload } from 'react-icons/ti'
import { useDispatch } from 'react-redux'
import { DeleteMoodBoardImg } from '../../../redux/actions/projectActions'
import { saveAs } from 'file-saver'
const ImgBlock = ({ id, v }) => {
    const [showbtn, setShowbtn] = useState(false)
    const dispatch = useDispatch()
    const deleteUploadedHandler = (public_id) => {
        if (window.confirm('Are You Sure?')) {
            dispatch(DeleteMoodBoardImg({ id, public_id }))
        }
    }
    const saveFile = (url) => {
        saveAs(url)
    }
    return (
        <div
            className="flex relative "
            onMouseOver={() => {
                setShowbtn(true)
            }}
            onMouseLeave={() => {
                setShowbtn(false)
            }}
        >
            <a target="_blank" href={`${v?.secure_url}`} rel="noreferrer">
                <img
                    className="object-cover w-[200px] h-[200px] relative m-[16px] overflow-hidden hover:scale-110 transition-all ease-in-out duration-1000 "
                    src={v.secure_url}
                    alt="pdf"
                />
            </a>
            <button
                className="bg-red-600 rounded-tr-md  rounded-bl-xl w-7 h-7  top-0 right-0  absolute  flex"
                onClick={() => deleteUploadedHandler(v.public_id)}
            >
                <TiDelete className="m-auto text-white justify-center items-center" />
            </button>
            <button
                className="bg-blue-600 rounded-br-md   rounded-tl-xl w-7 h-7  flex  absolute bottom-0 right-0 "
                onClick={() => saveFile(v?.secure_url)}
            >
                <TiDownload className="m-auto text-white justify-center items-center" />
            </button>
            <a target="_blank" href={`${v?.secure_url}`} rel="noreferrer">
                <button
                    className={
                        showbtn
                            ? 'opacity-1 -translate-y-[20px]  top-[180px] right-[70px] transition-all  absolute py-3 px-6  h-10  text-white flex items-center  uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  text-sm  text-center   ease-in-out duration-1000 '
                            : 'opacity-0 top-[220px] right-[40px]  absolute py-3 px-6  h-5  text-white flex items-center  uppercase rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  text-sm  text-center   transition-all ease-in-out duration-1000 hover:shadow-lg  font-bold'
                    }
                >
                    View
                </button>
            </a>
        </div>
    )
}

export default ImgBlock
