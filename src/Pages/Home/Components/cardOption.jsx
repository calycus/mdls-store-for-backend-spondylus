import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import * as React from 'react';

const CardOpcion = (props) => {
    let img = ""

    if (Object.keys(props).length != 0) {
        img = ((Object.keys(props).length > 1)
            ? (props.action + "_" + props.name.replace(/ /g, "_").replaceAll("/", ""))
            : props.name.replace(/ /g, "_"))


        return (
            <Card>
                <CardContent style={{ display: "flex", padding: "16px 10px 16px 10px" }}>
                    <div style={{ display: "flex", width: "40%" }}>
                        <img style={{ minWidth: '120px', maxWidth: '120px' }} src={'/image/administrador/' + img + '.gif'}></img>
                    </div>
                    <div className='textName'>
                        <span style={{ paddingLeft: "0.5rem" }}>{props.name}</span>
                        <span style={{ paddingLeft: "0.5rem" }}>{props.action}</span>
                    </div>
                </CardContent>
                {/* <CardActions style={{ display: "flex", justifyContent: "center" }}>
                    <Button size="small" >{props.action}</Button>
                </CardActions> */}
            </Card>
        )
    }



}

export default CardOpcion