import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import bannerImg from '../../Images/banner-img.png'
export default function Banner() {
    return (
        <>
            <Box sx={{marginTop:'98px'}}>
                <Container maxWidth='lg'>
                   <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} lg={5} md={5}>
                            <Typography variant='h2'
                                sx={{
                                    fontFamily: 'Graphik',
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                      fontSize: '60px',
                                     lineHeight: '56px',
                                     color:'#fff',
                                     marginBottom:'15px'
                                }}  
                            >Build Your Awesome Platform</Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Nunito Sans",
                                    fontStyle: 'normal',                                   
                                    fontWeight: 'normal',
                                    fontSize: '17px',
                                    lineHeight: '26px',
                                    marginBottom:'32px',
                                    letterSpacing: '-0.43573px',

                                    color: 'rgba(255, 255, 255, 0.7)',
                                }}      
                            
                            >Enver studio is  a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</Typography>
                            <Button
                             sx={
                                 {color:'#fff',
                                 fontSize:'13px',
                                 border:'1px solid #5454D4',
                                 px:3,
                                 background:'#5454D4',
                                 fontWeight: '700',
                             }}
                            >Our Services</Button>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={7} md={7} sx={{textAlign:'center'}}>
                            <img  src={bannerImg} />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
