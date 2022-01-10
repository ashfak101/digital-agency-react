import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import img1 from '../../Images/portfolio-image/img1.png'
import img2 from '../../Images/portfolio-image/img2.png'
import img3 from '../../Images/portfolio-image/img3.png'
export default function Portfolio() {
    return (
        <>
        <Container>
        <Box sx={{margin:'45px 0'}}>
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
            </Box> 
            <Box sx={{ textAlign: 'center', marginTop: '61px' }}>
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
            </Box>
    
        </Container>
            
        </>
    )
}
