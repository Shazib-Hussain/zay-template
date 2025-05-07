import React from 'react'
import Navbar from './Navbar'
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import Hero from '../components/Hero';

function Header() {

    // xs, extra - small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra - large: 1536px


    return (
        <>
            <Box sx={{
                width: '100%'
                // ,height: '105vh'
                ,backgroundColor: 'rgb(239, 239, 239)'
                , display:  'flex'
                , flexDirection:'column',
                // , justifyContent: 'space-between'
                alignItems: 'center'
                // ,  border: '12px solid yellow'
            }}>

                <Navbar />
                <Hero />


            </Box>
        </>

    )
}

export default Header