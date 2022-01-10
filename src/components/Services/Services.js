import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import LayersIcon from '@mui/icons-material/Layers';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { styled } from '@mui/system';

const MyComponent = styled('span')({
   
});

export default function Services() {
    return (
        <>
           <Container>
           <Box sx={{position:'relative'}}>
               

          
           <MyComponent
                        sx={{
                            position: 'absolute',
                            bottom: '0px',
                            height: '52px',
                            border: '1px solid rgb(255, 255, 255)',
                            position:'absolute',
                            left:'15px',
                            '&::before':{
                                content: '""',
                                height: '60px',
                                 width: '1px',
                                 position: 'absolute',
                                background: '#fff',
                                left: '24px',
                                top: '6px',
                                transform: 'rotate(60deg)',
                            },
                            '&::after':{
                                content: '""',
                                height: '55px',
                                width: '1px',
                                border: '1px solid #fff',
                                 position: 'absolute',
                                transform: 'rotate(111deg)',
                                 right: '-27px',
                                bottom: '13px',
                            }

                        }}
                        
                        ></MyComponent>
                        <MyComponent
                            sx={{
                                position: 'absolute',
                            bottom: '-14px',
                            height: '52px',
                            width: '53px',
                            border: '0.66369px solid #fff',
                            left: '6px',
                            bottom: '-20px',
                            borderStyle: 'solid',
                            borderColor: '#fff',
                            borderTop: 'none',
                            borderBottom: 'none',
                            borderRight: 'none',
                            '&::before':{
                                content: '""',
                                height: '60px',
                                 width: '1px',
                                 position: 'absolute',
                                background: '#fff',
                                left: '24px',
                                top: '6px',
                                transform: 'rotate(60deg)',
                            },
                            '&::after':{
                                content: '""',
                                height: '55px',
                                width: '0px',
                                border: '1px solid #fff',
                                 position: 'absolute',
                                transform: 'rotate(111deg)',
                                 right: '26px',
                                bottom: '13px',
                            }
                            }}
                        >

                        </MyComponent>
                <Typography variant='h2'
                    sx={{
                        fontSize:'39.8214px',
                        fontFamily:'Graphik',
                        fontWeight:'bold',
                        textAlign:'center',
                        color:'#fff',
                        marginBottom:'64px'
                    }}
                >The Service We Provide For You</Typography>  
                 <MyComponent
                            sx={{
                                height: '30px',
                                width: '1px',
                                position: 'absolute',
                                background: '#fff',
                                padding: '11px 2px ',
                                top: '45%',
                                right: '4%',
                                transform: 'rotate(45deg)',
                                '&::before':{
                                    content: '""',
                                    height: '5px',
                                    width: '50px',
                                    background: '#fff',
                                    position: 'absolute',
                                    right: '-23px',
                                    top: '23px',
                                }
                            }}
                        ></MyComponent> 
            </Box> 
            <Grid container spacing={8} sx={{
                textAlign:'center'
            }}>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                        <ComputerIcon
                            sx={{
                                
                                background: 'rgba(84, 84, 212, 0.1)',
                                padding:'10px',
                                borderRadius:'50%',
                                color:'#5454D4'
                            }}
                        />
                        <Typography variant='h4'
                        sx={{
                            fontFamily: 'Nunito Sans',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '18.5833px',
                            lineHeight: '25px',
                            textAlign: 'center',
                            letterSpacing: '-0.497977px',
                            margin:'13.5px 0',
                            color: '#FFFFFF',
                        }}      
                        >
                            Development
                        </Typography>
                        <Typography
                                    sx={{
                                        
                                        height: '38px',
                                        textAlign:'center',
                                        left: '649.61px',
                                        top: '1570.29px',

                                   fontamily: 'Nunito Sans',
                                        fonttyle: 'normal',
                                        fonteight: 'normal',
                                        fontize: '13.2738px',
                                        lineeight: '19px',
                                

                                    color: 'rgba(255, 255, 255, 0.7)',
                                    }}
                        >
                        Create a platform with the best and coolest quality from us.
                        </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                       <LayersIcon
                         sx={{
                                
                            background: 'rgba(240, 64, 55, 0.1)',
                            padding:'10px',
                            borderRadius:'50%',
                            color:'#F04037'
                        }}
                   
                       />
                        <Typography variant='h4'
                                 sx={{
                                    fontFamily: 'Nunito Sans',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '18.5833px',
                                    lineHeight: '25px',
                                    textAlign: 'center',
                                    letterSpacing: '-0.497977px',
                                    margin:'13.5px 0',
                                    color: '#FFFFFF',
                                }}
                        >
                            UI/UX Designer
                        </Typography>
                        <Typography
                         sx={{
                                        
                            height: '38px',
                            textAlign:'center',
                            left: '649.61px',
                            top: '1570.29px',

                       fontamily: 'Nunito Sans',
                            fonttyle: 'normal',
                            fonteight: 'normal',
                            fontize: '13.2738px',
                            lineeight: '19px',
                    

                        color: 'rgba(255, 255, 255, 0.7)',
                        }}
                        >
                        Create a platform with the best and coolest quality from us.
                        </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                       <IntegrationInstructionsIcon
                       sx={{
                                
                        background: 'rgba(254, 220, 90, 0.1)',
                        padding:'10px',
                        borderRadius:'50%',
                        color:'#FEDC5A'
                    }}
                       />
                        <Typography variant='h4'
                                 sx={{
                                    fontFamily: 'Nunito Sans',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '18.5833px',
                                    lineHeight: '25px',
                                    textAlign: 'center',
                                    letterSpacing: '-0.497977px',
                                    margin:'13.5px 0',
                                    color: '#FFFFFF',
                                }}
                        >
                            Graphik Designer
                        </Typography>
                        <Typography
                         sx={{
                                        
                            height: '38px',
                            textAlign:'center',
                            left: '649.61px',
                            top: '1570.29px',

                       fontamily: 'Nunito Sans',
                            fonttyle: 'normal',
                            fonteight: 'normal',
                            fontize: '13.2738px',
                            lineeight: '19px',
                    

                        color: 'rgba(255, 255, 255, 0.7)',
                        }}
                        >
                        Create a platform with the best and coolest quality from us.
                        </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                        <ViewAgendaIcon
                         sx={{
                                
                            background: 'rgba(254, 220, 90, 0.1)',
                            padding:'10px',
                            borderRadius:'50%',
                            color:'#FEDC5A'
                        }}
                        />
                        <Typography variant='h4'
                             sx={{
                                fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '18.5833px',
                                lineHeight: '25px',
                                textAlign: 'center',
                                letterSpacing: '-0.497977px',
                                margin:'13.5px 0',
                                color: '#FFFFFF',
                            }}
                        >
                           Motion Graphik
                        </Typography>
                        <Typography
                         sx={{
                                        
                            height: '38px',
                            textAlign:'center',
                            left: '649.61px',
                            top: '1570.29px',

                       fontamily: 'Nunito Sans',
                            fonttyle: 'normal',
                            fonteight: 'normal',
                            fontize: '13.2738px',
                            lineeight: '19px',
                    

                        color: 'rgba(255, 255, 255, 0.7)',
                        }}
                        >
                        Create a platform with the best and coolest quality from us.
                        </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                        <CameraAltIcon
                        sx={{
                                
                            background: 'rgba(84, 84, 212, 0.1)',
                            padding:'10px',
                            borderRadius:'50%',
                            color:'#5454D4'
                        }}
                        />
                        <Typography variant='h4'
                             sx={{
                                fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '18.5833px',
                                lineHeight: '25px',
                                textAlign: 'center',
                                letterSpacing: '-0.497977px',
                                margin:'13.5px 0',
                                color: '#FFFFFF',
                            }}
                        >
                            Photography
                        </Typography>
                        <Typography
                         sx={{
                                        
                            height: '38px',
                            textAlign:'center',
                            left: '649.61px',
                            top: '1570.29px',

                       fontamily: 'Nunito Sans',
                            fonttyle: 'normal',
                            fonteight: 'normal',
                            fontize: '13.2738px',
                            lineeight: '19px',
                    

                        color: 'rgba(255, 255, 255, 0.7)',
                        }}
                        >
                        Create a platform with the best and coolest quality from us.
                        </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                       <SlowMotionVideoIcon
                         sx={{
                                
                            background: 'rgba(240, 64, 55, 0.1)',
                            padding:'10px',
                            borderRadius:'50%',
                            color:'#F04037'
                        }}
                       />
                        <Typography variant='h4'
                             sx={{
                                fontFamily: 'Nunito Sans',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '18.5833px',
                                    lineHeight: '25px',
                                    textAlign: 'center',
                                    letterSpacing: '-0.497977px',
                                    margin:'13.5px 0',
                                    color: '#FFFFFF',
                            }}
                        >
                           Videography
                        </Typography>
                        <Typography
                          sx={{
                                        
                            height: '38px',
                            textAlign:'center',
                            left: '649.61px',
                            top: '1570.29px',

                       fontamily: 'Nunito Sans',
                            fonttyle: 'normal',
                            fonteight: 'normal',
                            fontize: '13.2738px',
                            lineeight: '19px',
                    

                        color: 'rgba(255, 255, 255, 0.7)',
                        }}
                        >
                        Create a platform with the best and coolest quality from us.
                        </Typography>
                </Grid>

            </Grid>
           </Container>
        </>
    )
}
