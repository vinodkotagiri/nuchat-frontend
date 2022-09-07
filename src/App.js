import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/component.dashboard'
import LoginPage from './components/LoginPage/component.loginpage'
import RegisterPage from './components/RegisterPage/component.registerpage'
const App = () => {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='*' element={<Dashboard />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </Fragment>
    )
}

export default App