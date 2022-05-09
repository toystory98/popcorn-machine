import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AppBar, Box, Button, Card, CardActions, CardMedia, Container, CssBaseline, Grid, Stack, Tab, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CheckoutTabComponent = dynamic(() => import('../components/checkoutTab'))

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


export default function Home(props) {
  const [count, setCount] = useState(0);
  return (
    <div style={{ bgcolor: '#333C83' }}>
      <Box sx={{ pb: 7, bgcolor: '#333C83' }}>
        <React.Fragment>
          <TabContext value="1">
            <CssBaseline />
            <ElevationScroll {...props}>
              <AppBar sx={{ backgroundColor: "#FAF3F3" }}>
                <Toolbar sx={{ justifyContent: 'center', backgroundColor: "#D9534F" }}>
                  <Typography variant="h6" component="div">
                    Banner
                  </Typography>
                </Toolbar>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList centered>
                    <Tab label="ทั้งหมด" disabled />
                    <Tab label="ป็อปคอร์น" value="1" />
                    <Tab label="เครื่องดื่ม" disabled />
                  </TabList>
                </Box>
              </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Toolbar />
            <Container>
              <TabPanel value="1">
                <Container fixed>
                  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center" alignItems="center">
                    <Grid item xs={2} sm={5} md={8}>
                      <Stack
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        sx={{ height: '100vh' }}
                      >
                        <Box sx={{ minHeight: '33vh', width: '100%', overflow: 'scroll' }}>
                          <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                            sx={{ marginLeft: '20px', height: '100%' }}
                          >
                            {Array.from(Array(6)).map((_, index) => (
                              <Card sx={{ minWidth: 200 }} key={index}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                  <CardMedia
                                    component="img"
                                    sx={{ height: '200px', width: 'auto', padding: '10px' }}
                                    image='/popcorn.png'
                                  />
                                </div>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                  <Button onClick={() => { setCount(count + 1); }} variant="contained" style={{ backgroundColor: '#5AA897' }}> 59 บาท </Button>
                                </CardActions>
                              </Card>
                            ))}
                          </Stack>
                        </Box>
                        <Box sx={{ minHeight: '33vh', width: '100%', overflow: 'scroll' }}>
                          <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                            sx={{ marginLeft: '20px', height: '100%' }}
                          >
                            {Array.from(Array(6)).map((_, index) => (
                              <Card sx={{ minWidth: 200 }} key={index}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                  <CardMedia
                                    component="img"
                                    sx={{ height: '200px', width: 'auto', padding: '10px' }}
                                    image='/popcorn.png'
                                  />
                                </div>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                  <Button onClick={() => { setCount(count + 1); }} variant="contained" style={{ backgroundColor: '#5AA897' }}> 59 บาท </Button>
                                </CardActions>
                              </Card>
                            ))}
                          </Stack>
                        </Box>
                        <Box sx={{ minHeight: '33vh', width: '100%', overflow: 'scroll' }}>
                          <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                            sx={{ marginLeft: '20px', height: '100%' }}
                          >
                            {Array.from(Array(6)).map((_, index) => (
                              <Card sx={{ minWidth: 200 }} key={index}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                  <CardMedia
                                    component="img"
                                    sx={{ height: '200px', width: 'auto', padding: '10px' }}
                                    image='/popcorn.png'
                                  />
                                </div>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                  <Button onClick={() => { setCount(count + 1); }} variant="contained" style={{ backgroundColor: '#5AA897' }}> 59 บาท </Button>
                                </CardActions>
                              </Card>
                            ))}
                          </Stack>
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid item xs={2} sm={3} md={4}>
                      <CheckoutTabComponent params={{ count: count }} />
                    </Grid>
                  </Grid>
                </Container>
              </TabPanel>
            </Container>
            <Toolbar />
          </TabContext>
        </React.Fragment>
      </Box>
    </div>
  );
}
