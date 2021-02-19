import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import './css/main.css'
import './css/Footer.css'
import './css/header.css'

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)