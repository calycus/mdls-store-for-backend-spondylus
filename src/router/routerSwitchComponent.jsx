import { Route, Routes, useNavigate } from 'react-router-dom';

//Login
import PageHomeLogin from '../Pages/Login/HomeLogin'
//Page Home
import HomePage from '../Pages/Home/homePage';
//Multi Interfaces

//Error
import Error_404_Not_Found from '../404_not_found';
import App2 from '../Pages/App2';

const RotuerSwitchComponents = () => {
    const history = useNavigate();

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
            {/* <Route path="*" element={
                <Error_404_Not_Found />
            } /> */}
            <Route path="/404_not_found" element={
                <Error_404_Not_Found />
            } />

        </Routes>
    )
}
export default RotuerSwitchComponents

