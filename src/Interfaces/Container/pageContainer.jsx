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

//Css
import './pageContainer.css'



const PageContainer = () => {
    const theme = useTheme();
    const location = useLocation();
    const roles = Roles();
    const [open, setOpen] = useState(false);
    const [openUser, setOpenUser] = useState(true);
    /* const userData = useSelector(selectUserDataLogin) */


    useEffect(() => {
        setOpenUser(false)
    }, [open]);

    return (
        <Box sx={{ display: 'flex' }}>
            <div style={{
                'display': location.pathname === "/"
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
            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: theme.palette.background.main, height: "100%" }}>
                <DrawerHeader />
                <RotuerSwitchComponents />
            </Box>
        </Box >
    )
}

export default PageContainer


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));




