import { Button, Box, CardActions, TextField } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getDataUserLogin } from '../../../Redux/Login/loginStore';
import "./Login.css"


const Login = () => {
    const theme = useTheme()
    const dispatch = useDispatch();
    const history = useNavigate();
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-box">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img style={{ minWidth: '180px', maxWidth: '180px' }} src='/image/Logo.png'></img>
            </div>
            <Box className="boxContainer">
                <div className="user-box">
                    <TextField onChange={e => setUserName(e.target.value)}
                        className="loginTextFile"
                        sx={{ width: "100%" }}
                        id="standard-basic"
                        label="User"
                        variant="standard"
                        color="loginButton"
                    />
                </div>
                <div className="user-box">
                    <TextField onChange={e => setPassword(e.target.value)}
                        className="loginTextFile"
                        sx={{ width: "100%" }}
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        color="loginButton"
                    />
                </div>
                <CardActions sx={{ paddingTop: "2rem" }}>
                    <Button onClick={() => dispatch(getDataUserLogin(history, userName, password))}
                        variant="outlined"
                        color="loginButton"
                        sx={{ fontWeight: "bolder" }}
                    >
                        Iniciar Sesión
                    </Button>
                </CardActions>
            </Box>
        </div>
    )
}

export default Login


