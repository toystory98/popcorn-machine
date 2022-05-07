import { Button, Card, CardActions, CardMedia } from '@mui/material';
import * as React from 'react';

export default function ItemCard({ params }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CardMedia
                    component="img"
                    sx={{ height: '200px', width: 'auto', padding: '10px' }}
                    image='/popcorn.png'
                />
            </div>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button onClick={() => { console.log('onClick'); }} variant="contained" style={{ backgroundColor: '#4B6587' }}> {params.price} บาท </Button>
            </CardActions>
        </Card>
    );
}
