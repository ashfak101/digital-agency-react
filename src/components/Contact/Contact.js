import { Container, Grid, Typography,Button, Box } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';

const MyComponent = styled('span')({
   
});

export default function Contact() {
    return (
        <>
            <Box sx={{
                padding:'124px 0',
                background: 'rgba(30, 30, 32, 0.5)',
                
            }}>
               
            <Container sx={{position:'relative'}}>
            <MyComponent
                            sx={{
                                width: '13px',
                                height: '30px',
                                padding: '12px 20px',
                                border: '2px solid #fff',
                                borderRadius: '50%' ,  
                                position: 'absolute',
                                left:{
                                    lg:'0',
                                    md:'28px',
                                    xs:'66px'
                                } ,
                                bottom:'-70px',
                                '&::before':{
                                    content:'""' ,
                                     position: 'absolute',
                                    height: '50px',
                                   width: '50px',
                                    left: '21px',
                                top: '22px',
                                border: '0.66369px solid rgba(255, 255, 255, 0.714)',
                                 borderRadius: '50% '  
                                }
                            }}
                        ></MyComponent>
                        <MyComponent
                            sx={{
                                height: '22px',
                                width: '1px',
                                position: 'absolute',
                                background: '#fff',
                                padding: '11px 2px ',
                                top: '-53%',
                                right: '8%',
                                '&::before':{
                                    content: '""',
                                    height: '5px',
                                    width: '45px',
                                    background: '#fff',
                                    position: 'absolute',
                                    right: '-21px',
                                    top: '21px',
                                }
                            }} ></MyComponent>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={7}>
                        <Typography variant='h3'
                             sx={{
                                fontSize:'39.8214px',
                                fontFamily:'Graphik',
                                fontWeight:'bold',
                                color:'#fff',
                                lineHeight:'53px',
                                
                                
                            }}
                        >
                        Contact us for the service you want to use
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={12} md={3}
                    sx={{
                        marginLeft:'120px'
                    }}>
                    <Button
                             sx={
                                 {color:'#fff',
                                 fontSize:'13px',
                                 border:'1px solid #5454D4',
                                 px:3,
                                 background:'#5454D4',
                                 fontWeight: '700',
                                 margin:'20px 0px 20px 120px'
                             }}
                            >Contact us</Button>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </>
    )
}
