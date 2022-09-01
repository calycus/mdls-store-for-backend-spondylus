import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import * as React from 'react';

const CardOpcion = (props) => {
    return (
        <Card sx={{ minWidth: 200, maxWidth: 200, maxHeight: 200 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {props.name}
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
                <Button size="small" >{props.function}</Button>
            </CardActions>
        </Card>
    )
}

export default CardOpcion