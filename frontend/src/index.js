import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import DataProvider from './redux/store'


import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <DataProvider>
            <App />
        </DataProvider>
    </Router>,
    document.getElementById('root')
)
