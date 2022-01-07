import { Box, Container, Grid, Typography } from '@mui/material'
import { margin } from '@mui/system'
import React from 'react'
import img from '../../Images/image-4.png'



const imgStyle={
    width:'100%',
    marginTop:'50px' 
}
export default function Choice() {
    return (
        <>
            <Container maxWidth='lg' sx={{margin:'100px auto'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} lg={6} md={6}>
                        <Typography variant='h3'
                            sx={{
                                fontFamily: 'Graphik',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: '4Spx',
                                lineHeight: '46px',                           
                                color: '#FFFFFF',
                            }}
                        
                        >Why Enver Is The Best Choice?</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} md={6}>
                            <Typography 
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                            }}
                            >Watch this one minute video so you understand why you should use our services!</Typography>
                    </Grid>
                </Grid>
                <Box>
                                <img style={imgStyle} src={img} alt="" />
                </Box>
            </Container>
        </>
    )
}
