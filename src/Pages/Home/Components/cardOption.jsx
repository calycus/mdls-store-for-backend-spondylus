import { Card, CardContent } from '@mui/material';
import * as React from 'react';



const CardOpcion = (props) => {
    let nameImg = ""

    if (Object.keys(props).length != 0) {
        nameImg = ((Object.keys(props).length > 1)
            ? (props.action + "_" + props.name)
            : props.name).replace(/ /g, "_").replaceAll("/", "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        return (
            <Card
                sx={{ borderRadius: "10px" }}
                onMouseEnter={() => animar(nameImg)}
                onMouseLeave={() => restaurar(nameImg)}
            >
                <CardContent className='cardOptionContent'>
                    <div style={{ display: "flex", width: "40%" }}>
                        <img
                            id={nameImg}
                            className="imgDimension"
                            src={'/image/roles/' +
                                ((props.rol == "Admin") ? "admin"
                                    : (props.rol == "Manager")
                                        ? "manager"
                                        : "accountant") + '/' + nameImg + '.png'}
                        >
                        </img>
                    </div>
                    <div className='textName'>
                        <span style={{ paddingLeft: "0.5rem", fontWeight: "bold" }}>{props.name}</span>
                        <span style={{ paddingLeft: "0.5rem", fontWeight: "bold" }}>{props.action}</span>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

export default CardOpcion

function animar(idImagen) {
    console.log("entramos", idImagen);
    document.getElementById(idImagen).src = document.getElementById(idImagen).src.replace(".png", ".gif")
}
function restaurar(idImagen) {

    console.log("salimos", idImagen);
    document.getElementById(idImagen).src = document.getElementById(idImagen).src.replace(".gif", ".png")
}
