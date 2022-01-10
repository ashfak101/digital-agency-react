import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from '../../Images/portfolio-image/img1.png'
import img2 from '../../Images/portfolio-image/img2.png'
import img3 from '../../Images/portfolio-image/img3.png'
import { styled } from '@mui/system';

const MyComponent = styled('span')({
   
});
export default function Portfolio() {
    return (
        <>
        <Container>
        <Box sx={{margin:'45px 0',position:'relative'}}>
        <MyComponent
                            sx={{
                                height: '21px',
                                width: '1px',
                                position: 'absolute',
                                background: '#fff',
                                padding: '11px 2px ',
                                top:{ md:'-129%', xs:'-41%'},
                                left: {md:'-2%',xs:'2%'},
                                transform: 'rotate(45deg)',
                                '&::before':{
                                    content: '""',
                                    height: '5px',
                                    width: '40px',
                                    background: '#fff',
                                    position: 'absolute',
                                    right: '-16px',
                                    top: '20px',
                                }
                            }}
                        ></MyComponent> 
                <Typography variant='h2'
                    sx={{
                        fontSize:'39.8214px',
                        fontFamily:'Graphik',
                        fontWeight:'bold',
                        color:'#fff',
                        lineHeight:'53px',
                        marginTop:'80px'
                        
                    }}
                >Our Awesome Portfolio</Typography>  
                 <MyComponent
                            sx={{
                                width: '13px',
                                height: '30px',
                                padding: '12px 20px',
                                border: '2px solid #fff',
                                borderRadius: '50%' ,  
                                position: 'absolute',
                                right: '92px',
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
            </Box> 
            
            <Box sx={{ textAlign: 'center', marginTop: '61px',position:'relative' }}>
            <MyComponent
                            sx={{
                                border: 'solid rgb(255, 255, 255)',
                                borderWidth: '0 3px 3px 0',
                                display: 'inline-block',
                                padding: '10px',
                                transform: 'rotate(-135deg)',
                                position: 'absolute',
                                left:{
                                    md:'-50px',
                                    xs:'13px'
                                },
                                top:{
                                    md:'91%'
                                },
                                bottom:{xs:0},
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
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={4} md={4} sx={{ padding: '40px' }}>
                        <img style={{ width: '100%', backgroundColor: '#1E1E20', padding: '20px', borderRadius: '20px' }} src={img1} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{ marginTop: '50px', padding: '40px' }}>
                        <img style={{ width: '100%', backgroundColor: '#1E1E20', padding: '20px', borderRadius: '20px' }} src={img2} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} sx={{ marginTop: '100px', padding: '40px' }}>
                        <img style={{ width: '100%', backgroundColor: '#1E1E20', padding: '20px', borderRadius: '20px' }} src={img3} alt="" />
                    </Grid>
                </Grid>
                <MyComponent
                    sx={{
                        background: ' #5454D4',
                        
                        width: '13px',
                        padding: '4px',
                        position: 'absolute',
                        left: {md:'50%',xs:'45%'},
                        top: {md:'95%',xs:'98%'},
                        borderRadius: '10px'
                        ,
                        '&::before':{
                            content: '""',
                            height: '5px',
                            width: '5px',
                            background: '#121213',
                            position: 'absolute',
                            right: '-20px',
                            top: '2px',
                            borderRadius: '5px',
                        },
                        '&::after':{
                            content: '""',
                            height: '5px',
                            width: '5px',
                            background: '#121213',
                            position: 'absolute',
                            right: '-11px',
                            top: '2px',
                            borderRadius: '5px',
                        }
                    }}
                >

                </MyComponent>
            </Box>
    
        </Container>
            
        </>
    )
}
