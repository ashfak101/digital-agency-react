import { Box, Container, Grid, Typography } from '@mui/material'
import { margin, padding } from '@mui/system'
import React from 'react'
import img from '../../Images/image-4.png'

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
                                fontSize: '39px',
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
                <Box sx={{
                    position:'relative'
                }}>             
                                <img  style={imgStyle} src={img} alt="" />
                                <ArrowRightIcon
                                    sx={{
                                        position: 'absolute',
                                        color:'#fff',
                                        padding:'10px',
                                        background:'#5454D4',
                                        fontSize:'45px',
                                        borderRadius:'50%',
                                        left: {md:'48%',xs:'39%'},
                                        top: {md:'48%',xs:'47%'},
                                        cursor: 'pointer',
                                        '&:hover':{
                                            background:'#fff',
                                            color:'#5454D4',
                                        }
                                        
                                    }}
                                
                                />
                </Box>
            </Container>
        </>
    )
}
