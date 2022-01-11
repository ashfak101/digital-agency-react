import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';



export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
 
    
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    
  
    return (
      <AppBar position="static" sx={{background:'#19191B',borderBottom:'none',boxShadow:'none',padding:'27px 0'}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' },fontSize:'18px' }}
            >
             Agency
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
               
                  <MenuItem  onClick={handleCloseNavMenu}>
                  <Button
                 
                 onClick={handleCloseNavMenu}
                 sx={{ my: 2, color: '#19191B', display: 'block',fontSize: '12px' }}
               >
                Home
               </Button>
               <Button
                
                 onClick={handleCloseNavMenu}
                 sx={{ my: 2, color: '#19191B', display: 'block',fontSize: '12px' }}
               >
                Services
               </Button>
               <Button
                
                 onClick={handleCloseNavMenu}
                 sx={{ my: 2, color: '#19191B', display: 'block' ,fontSize: '12px'}}
               >
                Our Project
               </Button>
               <Button
                
                 onClick={handleCloseNavMenu}
                 sx={{ my: 2, color: '#19191B', display: 'block' ,fontSize: '12px'}}
               >
                About Us
               </Button>
                  </MenuItem>
                
              </Menu>
            </Box>
            {/* For small device */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              Agency
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '200px' }}>
              
                <Button
                  sx={{ my: 2, mx:2, color: '#5454D4', display: 'block',fontSize: '12px' }}
                >
                 Home
                </Button>
                <Button
                  sx={{ my: 2, mx:2, color: 'white', display: 'block',fontSize: '12px' }}
                >
                 Services
                </Button>
                <Button
                  sx={{ my: 2, mx:2, color: 'white', display: 'block' ,fontSize: '12px'}}
                >
                 Our Project
                </Button>
                <Button
                  sx={{ my: 2, mx:2, color: 'white', display: 'block' ,fontSize: '12px'}}
                >
                 About Us
                </Button>
              
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
            
            <Button sx={{color:'#fff',borderColor:'#fff', '&:hover':{
                borderColor:'#5454D4'
                
            }}} variant="outlined">Contact us</Button>
                
                
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
