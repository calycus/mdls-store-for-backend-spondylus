import { Button, Avatar, Collapse, IconButton } from "@mui/material";
import { ChevronLeft } from '@mui/icons-material';
const HeaderUserAccount = ({ setOpenUser, openUser, setOpen, theme }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <div className='drawerHeaderContainer'>
                <div style={{ display: "flex", alignItems: "center" }} onClick={() => setOpenUser(!openUser)}>
                    <div>
                        <Avatar sx={{ backgroundColor: theme.palette.loginButton.main }}>OP</Avatar>
                        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                    </div>
                    <div className='drawerHeaderUserDataAcount'>
                        <span className='userHeaderAccount'>Jhon David S.</span>
                        <span className='userHeaderName'>//. Administrador</span>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronLeft />
                    </IconButton>
                </div>
            </div>
            <Collapse
                in={openUser}
                timeout="auto"
                style={{ transformOrigin: '0 0 0' }}
                {...(openUser ? { timeout: 500 } : {})}
                unmountOnExit
            >
                <div className='logoutButtonContainer'>
                    <Button
                        className="logoutButton"
                        variant="outlined"
                        color="loginButton"
                    >
                        Cerrar Sesion
                    </Button>
                </div>
            </Collapse>
        </div>
    )
}

export default HeaderUserAccount