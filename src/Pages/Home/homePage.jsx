import * as React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


import CardOpcion from './Components/cardOption';
import './homePage.css'
import { Container } from '@mui/system';
import Roles from '../roles';

const HomePage = () => {
    const theme = useTheme();
    const roles = Roles();

    return (
        <Box>
            <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <span style={{ paddingInlineStart: "2rem", alignSelf: "start" }}>
                    Administrador
                </span>

                <div className="homeCardContainer">
                    {roles.cardOptionAdministrator.map((element, index) => {
                        return (
                            <div className='cardContainer' key={index}>
                                <CardOpcion
                                    name={element.name}
                                    action={element.action}
                                    rol={element.rol}
                                />
                            </div>)
                    })}
                </div>

            </Container>
            <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ paddingInlineStart: "2rem", alignSelf: "start" }}>
                    Encargado
                </span>
                <div className="homeCardContainer">
                    {roles.cardOptionManager.map((element, index) => {
                        return (
                            <div className='cardContainer' key={index}>
                                <CardOpcion
                                    name={element.name}
                                    action={element.action}
                                    rol={element.rol}
                                />
                            </div>)
                    })}
                </div>

            </Container>
            <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ paddingInlineStart: "2rem", alignSelf: "start" }}>
                    Contabilidad
                </span>
                <div className="homeCardContainer">
                    {roles.cardOptionAccounting.map((element, index) => {
                        return (
                            <div className='cardContainer' key={index}>
                                <CardOpcion
                                    name={element.name}
                                    action={element.action}
                                    rol={element.rol}
                                />
                            </div>)
                    })}
                </div>

            </Container>
        </Box >
    )
}

export default HomePage

