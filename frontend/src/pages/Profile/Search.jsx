import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { listAllProjects } from '../../redux/actions/projectActions'
const Search = ({ toggletab }) => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const [keyword, setkeyword] = useState('')
    const Handlesearch = (e) => {
        console.log('clickes')
        if (keyword.trim() && e.which == 13) {
            navigate(`/search/${keyword}`)
            // dispatch(listAllProjects(keyword))
        } else {
            navigate(`/profile`)
        }
    }
    const Reset = () => {
        setkeyword('')
        navigate(`/profile`)
    }
    return (
        <>
            {/* <div>
                <div className="searchBar">
                    <input
                        id="searchQueryInput"
                        type="text"
                        name="searchQueryInput"
                        value={keyword}
                        onChange={(e) => setkeyword(e.target.value)}
                        onKeyPress={Handlesearch}
                        bgColor="white"
                        placeholder="Tap For Search"
                    />
                    <button
                        id="searchQuerySubmit"
                        type='submit'
                        name="searchQuerySubmit"
                        onClick={Handlesearch}
                    >
                        <FaSearch  />
                    </button>
                </div>
            </div> */}
            <div className={toggletab === 1 ? '' : 'hidden'}>
                <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                    Search
                </label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="searchQueryInput"
                        placeholder="Search Projects by name..."
                        required
                        name="searchQueryInput"
                        value={keyword}
                        onChange={(e) => setkeyword(e.target.value)}
                        onKeyPress={Handlesearch}
                    />
                    <button
                        class="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2  outline-none"
                        onClick={Reset}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default Search
