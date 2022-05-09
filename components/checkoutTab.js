import { Button, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

export default function CheckoutTab({ params }) {
    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ height: '90vh', width: '100%', bgcolor: '#F2F2F2' }}
        >
            <div style={{ height: '75vh', width: '100%', padding: '5px', overflow: 'scroll', backgroundColor: '#F2F2F2' }}>
                <Paper elevation={1} sx={{ width: '100%', height: '80px', marginY: '2px' }}>
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        style={{ height: '80px', width: '100%' }}
                    >
                        <img src='/popcorn.png' style={{ height: '60px' }} />
                        <Typography variant="span" component="body1" sx={{ width: '50%', paddingLeft: '5px' }}>
                            ป็อปคอร์น
                        </Typography>
                        <Typography variant="span" component="body1" sx={{ width: '20%', paddingLeft: '5px' }}>
                            {params.count}x59
                        </Typography>
                    </Stack>
                </Paper>
            </div>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                style={{ height: '5vh', width: '100%', borderTopStyle: 'groove', borderBottomStyle: 'groove', borderWidth:'1px'}}
            >
                <Typography variant="h6" component="h6" sx={{ width: '80%', paddingLeft: '30px' }}>
                    รวม
                </Typography>
                <Typography variant="h6" component="h6" sx={{ width: '20%', paddingLeft: '5px' }}>
                    {params.count * 59}
                </Typography>
            </Stack>
            <div style={{ height: '10vh', display: 'flex', padding: '10px 0px 10px 0px' }}>
                <Link href="/checkout">
                    <Button
                        onClick={() => { console.log('onClick'); }}
                        variant="contained"
                        style={{ backgroundColor: '#4AA96C' }}
                        disabled={params.count == 0 ? true : false}
                    >
                        <Typography variant="span" component="body1">
                            จ่ายเงิน
                        </Typography>
                    </Button>
                </Link>
            </div>
        </Stack>
    );
}
