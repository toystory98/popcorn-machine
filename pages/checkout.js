import { AppBar, Box, Button, CssBaseline, Grid, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as React from 'react';

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

export default function CheckOut(props) {
    return (
        <Box sx={{ pb: 7 }}>
            <React.Fragment>
                <CssBaseline />
                <ElevationScroll {...props}>
                    <AppBar>
                        <Toolbar sx={{ justifyContent: 'center' }}>
                            <Typography variant="h6" component="div">
                                ช่องทางการชำระ
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar />
                <Grid
                    container
                    rowSpacing={5}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    marginTop={'50px'}
                >
                    <Grid item>
                        <Link href="/qrPage">
                            <Button onClick={() => { console.log('onClick'); }} variant="contained" style={{ backgroundColor: '#4B6587', height: '80px', width: '100vh'}}> พร้อมเพย์ </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/qrPage">
                            <Button onClick={() => { console.log('onClick'); }} variant="contained" style={{ backgroundColor: '#4B6587', height: '80px', width: '100vh'}}> wallet </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/qrPage">
                            <Button onClick={() => { console.log('onClick'); }} variant="contained" style={{ backgroundColor: '#4B6587', height: '80px', width: '100vh'}}> เดบิต/เครดิต การ์ด </Button>
                        </Link>
                    </Grid>
                </Grid>
            </React.Fragment>
        </Box>
    );
}