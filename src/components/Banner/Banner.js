import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import bannerImg from '../../Images/banner-img.png'
import { styled } from '@mui/system';



const MyComponent = styled('span')({
   
  });


export default function Banner() {
    const bannerImgCss={
     
        clipPath: 'polygon(71% -6%, 76% 3%, 98% -8%, 102% 54%, 82% 89%, 75% 101%, 33% 87%, 12% 80%, -3% 54%, 20% 9%)',
        
    }
    return (
        <>
            <Box sx={{marginTop:'98px'}}>
                {/* for Gradient */}
                <Box
                    sx={{
                        display:{md:'block', xs:'none'},
                        position: 'absolute',
                        width: '309.94px',
                        height: '818.86px',
                        left: '73.48px',
                        top: '-62px',
                       overflow:'auto',
                        background: 'linear-gradient(180deg, rgba(84, 84, 212, 0.27) 0%, rgba(84, 84, 212, 0.1134) 100%)',
                        filter: 'blur(199.107px)',
                        borderRadius: '154.972px',
                        transform: 'rotate(-54.37deg)',
                    }}
                ></Box>
                <Container maxWidth='lg'>
                   <Grid container spacing={2}>
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
                        <Grid item xs={12} sm={12} lg={7} md={7} sx={{textAlign:'center',
                         position: 'relative',
                        '&::before':{
                            position: 'absolute',
                            content: '" "',
                            border: '1px solid #fff',
                            height: '249px',
                            width: '249px',
                            left: {
                                md:'246px',
                                xs:'106px'
                            },
                            bottom: '36px',
                            transform: 'rotate(24deg)',
                            borderRadius: '10px',
                            background:'#5454D4',
                             

                        
                        },
                        '&::after':{
                            content: '""',
                            height: '249px',width: '249px',
                            position: 'absolute',
                           
                            border: '1px solid #fff',
                            left: {md:'217px',xs:'92px',},
                             bottom: '84px',
                            transform: 'rotate(24deg)',
                            borderRadius: '10px',
                            zIndex:'-1'
                            }  
                    }}>
                        <MyComponent
                            sx={{
                                border: 'solid rgb(255, 255, 255)',
                                borderWidth: '0 3px 3px 0',
                                display: 'inline-block',
                                padding: '10px',
                                transform: 'rotate(-135deg)',
                                position: 'absolute',
                                left:{
                                    md:'116px',
                                    xs:'46px'
                                },
                                '&::before':{
                                    content: '""',
                                    border: 'solid rgb(255, 255, 255)',
                                    borderWidth: '0 3px 3px 0',
                                    display: 'inline-block',
                                    padding: '10px',
                                    position: 'absolute',
                                    left: '-21px',
                                    bottom: '-24px',
                                },
                                '&::after':{
                                    content: '""',
                                    border: 'solid rgb(255, 255, 255)',
                                    borderWidth: '0 0px 3px 0',
                                    display: 'inline-block',
                                    padding: '10px',
                                    position: 'absolute',
                                    left: '20px',
                                    top: '-21px',
                                }
                            }}  
                        ></MyComponent>
                        <MyComponent
                        sx={{
                            position: 'absolute',
                            bottom: '0px',
                            height: '52px',
                            border: '1px solid rgb(255, 255, 255)',
                            position:'absolute',
                            left:{md:'99px',xs:'45px'},
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
                            left: {md:'86px',xs:'53px'},
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
                        <MyComponent
                            sx={{
                                width: '13px',
                                height: '30px',
                                padding: '12px 20px',
                                border: '2px solid #fff',
                                borderRadius: '50%' ,  
                                position: 'absolute',
                                right: {md:'92px',xs:'38px'},
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
                        >

                        </MyComponent>
                        <MyComponent
                            sx={{
                                height: '30px',
                                width: '1px',
                                position: 'absolute',
                                background: '#fff',
                                padding: '11px 2px ',
                                top: '95%',
                                right: {md:'16%',xs:'11%'},
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
                            <img style={bannerImgCss}  src={bannerImg} />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
