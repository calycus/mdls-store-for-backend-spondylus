import * as React from 'react';
import { Box, Button } from "@mui/material";

import './404_not_found.css'
import { useNavigate } from 'react-router-dom';

const Error_404_Not_Found = () => {
    const history = useNavigate()
    return (
        <Box class="cont_principal">
            <div class="cont_error">
                <h2>404</h2>
                <p>Oops!!, The page you are looking for does not exist.</p>
                <Button
                    onClick={() => history("/home")}
                    variant="outlined"
                    color="primary"
                    sx={{ fontWeight: "bolder" }}
                >
                    Go to Home Page
                </Button>
            </div>
            <div class="cont_aura_1"></div>
            <div class="cont_aura_2"></div>
        </Box>
    )
}

export default Error_404_Not_Found

window.onload = function () {
    document.querySelector('.cont_principal').className = "cont_principal cont_error_active";

}