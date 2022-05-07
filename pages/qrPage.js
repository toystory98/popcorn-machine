import * as React from 'react';
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography, CssBaseline, useScrollTrigger } from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';
import QRCode from "react-qr-code";

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function QrScan(props) {
    return (
        <Box sx={{ pb: 7 }}>
            <React.Fragment>
                <CssBaseline />
                <ElevationScroll {...props}>
                    <AppBar>
                        <Toolbar sx={{ justifyContent: 'center' }}>
                            <Typography variant="h6" component="div">
                                แสกนเพื่อจ่าย
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar />
                <Toolbar />
                <Container>
                    <Grid container spacing={4} style={{ justifyContent: 'center' }}>
                        <QRCode value="confirm to purchase" />
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <Link href="/">
                            <Button onClick={() => { console.log('onClick'); }} variant="contained" style={{ backgroundColor: '#4B6587', height: '80px', width: '500px', marginBottom: '20px' }}> พิมพ์บัตร </Button>
                        </Link>
                    </div>
                </Container>
                {/* <Box position="fixed" color="primary" sx={{ width: '100%', top: 'auto', bottom: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link href="/">
                            <Button onClick={() => { console.log('onClick'); }} variant="contained" style={{ backgroundColor: '#4B6587', height: '80px', width: '500px', marginBottom: '20px' }}> พิมพ์บัตร </Button>
                        </Link>
                    </div>
                </Box> */}
            </React.Fragment>
        </Box>
    );
}