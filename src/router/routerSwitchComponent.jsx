import { Route, Routes } from 'react-router-dom';

import PageHomeLogin from '../Interfaces/Login/HomeLogin'

import HomePage from '../Interfaces/Home/homePage';
import App2 from '../Interfaces/App2';
const RotuerSwitchComponents = () => {
    return (
        <Routes>
            <Route path='/' element={
                <PageHomeLogin />
            } />
            <Route path="/home" element={
                <HomePage />
            } />
            <Route path="/app" element={
                <App2 />
            } />
            
        </Routes>
    )
}
export default RotuerSwitchComponents

