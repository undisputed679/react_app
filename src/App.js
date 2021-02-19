import React from 'react'
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import Homepage from './component/Homepage'


function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Homepage} exact/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
