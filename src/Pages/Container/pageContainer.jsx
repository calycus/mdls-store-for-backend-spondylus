import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

//Store
import { selectUserDataLogin } from '../../Redux/Login/loginStore';

//Components
import RotuerSwitchComponents from '../../router/routerSwitchComponent';
import Roles from '../roles';
import AppBarPageContainer from './Components/appBarPageContainer';
import DrawerPageContainer from './Components/DrawerPageContainer';
import DrawerHeaderComponent from './Components/DrawerHeaderComponent';
//Css
import './pageContainer.css'



const PageContainer = () => {
    const theme = useTheme();
    const location = useLocation();
    const roles = Roles();
    const DrawerHeader = DrawerHeaderComponent()
    const [open, setOpen] = useState(false);
    const [openUser, setOpenUser] = useState(true);
    /* const userData = useSelector(selectUserDataLogin) */


    useEffect(() => {
        setOpenUser(false)
    }, [open]);

    return (
        <Box sx={{ display: 'flex' }}>
            <div style={{
                'display': (location.pathname === "/" || location.pathname === "/404_not_found")
                    ? 'none'
                    : 'flex',
            }}>
                <CssBaseline />
                <AppBarPageContainer
                    open={open}
                    setOpen={setOpen}
                />
                <DrawerPageContainer
                    open={open}
                    setOpen={setOpen}
                    setOpenUser={setOpenUser}
                    openUser={openUser}
                    DrawerHeader={DrawerHeader}
                />


            </div>
            <Box component="main"
                sx={{
                    backgroundColor: theme.palette.background.main,
                    height: "100vh",
                    flexGrow: 1,
                    'p': (location.pathname === "/" || location.pathname === "/404_not_found")
                        ? 0
                        : 3
                }}>
                <DrawerHeader style={{
                    'display': (location.pathname === "/" || location.pathname === "/404_not_found")
                        ? 'none'
                        : 'flex'
                }} />
                <RotuerSwitchComponents />
            </Box>
        </Box >
    )
}

export default PageContainer



