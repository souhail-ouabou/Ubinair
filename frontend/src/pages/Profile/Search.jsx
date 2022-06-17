import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { listAllProjects } from '../../redux/actions/projectActions'
const Search = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const [keyword, setkeyword] = useState('')
    const Handlesearch = (e) => {
        if (keyword.trim() && e.which == 13) {
            navigate(`/search/${keyword}`)
            dispatch(listAllProjects(keyword))
        } else {
            navigate(`/profile`)
        }
    }
    return (
        <>
            <div>
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
                  
                        name="searchQuerySubmit"
                        onClick={Handlesearch}
                    >
                        <FaSearch  />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Search
