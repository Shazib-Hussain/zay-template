import React from "react";
// import {Box} from 
import { Box, Typography, List, ListItem, ListItemText, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

function Navbar() {


    // xs, extra - small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra - large: 1536px

    return (
        <>
            <Box sx={{
                width: '100%',
                height: '90px',
                backgroundColor: 'white',
            }}>

                <Box sx={{
                    width: { xl: '1500px', lg: '1150px', md: '600px', sm: '90%', xs: '90%' },
                    height: '100%',
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>

                    <Typography variant="h3" sx={{ color: 'rgb(89, 171, 110)' }}>
                        Zay
                    </Typography>

                    <List sx={{ display: { xs: 'none', md: 'flex' }, fontSize: 'large', gap: '30px' }}>
                        <ListItem >
                            <Link to={"/"} style={{textDecoration:'none'}}>
                                Home
                            </Link>
                        </ListItem>

                        <ListItem >
                            <Link to={"/About_page"} style={{textDecoration:'none'}}>
                                About
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link to={'/Shop_page'} style={{textDecoration:'none'}}>
                                Shop
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link to={'/Contact_page'} style={{textDecoration:'none'}}>
                                Contact
                            </Link>
                        </ListItem>
                    </List>

                    <List sx={{ display: { sx: 'flex', md: 'none' }, fontSize: 'x-large', gap: '50px' }}>
                        <ListItem>
                            <MenuIcon />
                        </ListItem>

                    </List>


                    <List sx={{ display: { xs: 'none', md: 'flex' }, }}>
                        <ListItem sx={{ cursor: 'pointer' }}>
                            <SearchIcon />
                        </ListItem>

                        <ListItem sx={{ cursor: 'pointer' }} >
                            <AddShoppingCartIcon />
                        </ListItem>

                        <ListItem sx={{ cursor: 'pointer' }}>
                            <PersonIcon />
                        </ListItem>
                    </List>
                </Box>


            </Box>
        </>
    )
}

export default Navbar