import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AppBar, Box, Button, Card, CardActions, CardMedia, Container, CssBaseline, Grid, Modal, Tab, Toolbar, Typography, useScrollTrigger, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const TableComponent = dynamic(() => import('../components/basicTable'))

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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Home(props) {
  const [count, setCount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ pb: 7, bgcolor:'#333C83' }}>
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
                    <Stack
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        sx={{height: '100vh'}}
                    >
                        <Box sx={{minHeight: '300px', width: '100%', overflow: 'scroll' }}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                                sx= {{marginLeft:'20px', height: '100%'}}
                            >
                                {Array.from(Array(6)).map((_, index) => (
                                    <Card sx={{ minWidth: 200 }}>
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
                        <Box sx={{minHeight: '300px', width: '100%', overflow: 'scroll' }}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                                sx= {{marginLeft:'20px', height: '100%'}}
                            >
                                {Array.from(Array(6)).map((_, index) => (
                                    <Card sx={{ minWidth: 200 }}>
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
                        <Box sx={{minHeight: '300px', width: '100%', overflow: 'scroll' }}>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}
                                sx= {{marginLeft:'20px', height: '100%'}}
                            >
                                {Array.from(Array(6)).map((_, index) => (
                                    <Card sx={{ minWidth: 200 }}>
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
                </Container>
            </TabPanel>
          </Container>
          <Toolbar/>
          <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar sx={{ backgroundColor: '#F7F6F2' }}>
              <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={8}>
                  <div style={{ display: 'flex', justifyContent: 'left', paddingLeft: '50px' }}>
                    <Typography color={'black'}>จำนวนเงิน {59 * count} บาท</Typography>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ display: 'flex', justifyContent: 'right', paddingRight: '10px' }}>
                    <Button variant="contained" color="success" style={{ backgroundColor: '#4B6587' }} onClick={handleOpen} disabled={count == 0 ? true : false}>จ่ายเงิน</Button>
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </TabContext>
      </React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TableComponent params={{ count: count }} />
        </Box>
      </Modal>
    </Box>
  );
}
