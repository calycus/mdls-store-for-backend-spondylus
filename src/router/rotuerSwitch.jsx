import { Route, Routes } from 'react-router-dom';

import PageHomeLogin from '../Components/pageHomeLogin'
import HomePage from '../Components/Home/homePage';

const RotuerSwitch = () => {
    console.log("hola")
    return (
        <Routes>
            <Route path='/' element={
                <PageHomeLogin />
            } />
            <Route path="/home" element={
                <HomePage />
            } />

        </Routes>
    )
}
export default RotuerSwitch