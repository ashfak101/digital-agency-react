import { Box, Container, Typography } from '@mui/material'

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material';

export default function Footer() {
    const theme =useTheme()
    const useStyle = makeStyles({
        footer:{
            [theme.breakpoints.down('sm')]:{
                flexDirection: 'column-reverse',
            }

            
        }
    })
     const {footer}= useStyle()
    return (
        <>
            <Container sx={{}}>
               
                     <Box className={footer} sx={{
                         display:'flex',
                         flexDirection:'row-reverse',
                         gap:'50px',
                        py:4,
                     }}>
                     <Box>
                        <Typography  sx={{fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '11.9464px',
                                lineHeight: '16px',
                                textAlign: 'center',
                                marginRight:'26px',
                                color: 'rgba(255, 255, 255, 0.7)',}}>© 2020 Enver, All Rights Reserved</Typography>
                       
                       </Box>
                        <Box sx={{display:'flex',
                                justifyContent: 'space-around'
                        }}>
                        <Typography 
                            sx={{fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '11.9464px',
                                lineHeight: '16px',
                                textAlign: 'center',
                                marginRight:'26px',
                                color: 'rgba(255, 255, 255, 0.7)',}}
                        >Support</Typography>
                        <Typography  sx={{fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '11.9464px',
                                lineHeight: '16px',
                                textAlign: 'center',
                                marginRight:'26px',
                                color: 'rgba(255, 255, 255, 0.7)',}}> Privacy Policy</Typography>
                        <Typography  sx={{fontFamily: 'Nunito Sans',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '11.9464px',
                                lineHeight: '16px',
                                textAlign: 'center',
                                marginRight:'26px',
                                color: 'rgba(255, 255, 255, 0.7)',}}> Term And Condition</Typography>
                        </Box>
                   
                     </Box>
            </Container>
        </>
    )
}
