import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import AboutHeroImg from '../assets/images/about-hero.svg'
import React from 'react'

function About_Hero() {
    return (
        <>

            <Box sx={{
                width: '100%'
                , height: 'max-content'
                , display: 'flex'
                , justifyContent: 'center',
                backgroundColor: 'rgb(89, 171, 110)',
                padding: '130px 0px'
            }}>



                <Box sx={{
                    width: { xl: '1500px', lg: '1150px', md: '600px', sm: '80%', xs: '80%' }
                    // , backgroundColor: 'blue'

                    // ,margin: '80px'
                    , display: 'flex'
                    , flexWrap: { xs: 'wrap-reverse', lg: 'nowrap' }
                    , justifyContent: 'center'
                    , alignItems: 'center'
                    // , paddingBottom: '80px'
                }}>

                    <Box sx={{
                        width: { xs: '100%', lg: '60%' }
                        // , border: '2px solid '
                        // , paddingLeft: { xs: 0, lg: '150px' }
                        // , padding: { xs: '0px 50px', lg: '0px 0px' }

                    }}>
                        <Typography sx={{
                            display: 'flex'
                            , alignItems: 'center'
                            , gap: '10px',
                            color: 'white'
                        }}>
                            <Typography variant='h4' sx={{
                                fontWeight: 'bold'
                            }}>
                                About Us
                            </Typography>

                        </Typography>


                        <Typography sx={{
                            fontSize: 'medium'
                            , color: 'white'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Box>


                    {/* IMAGE MAIN */}
                    <Box sx={{
                        width: { xs: '100%', lg: '40%' },
                        display: 'flex'
                        , justifyContent: 'center'
                        , alignItems: 'center'
                        // , padding: { xs: '0px 50px', lg: '0px 0px' }
                        // , border: '2px solid '
                        // , paddingRight: { xs: 0, lg: '150px' }
                    }}>

                        <img style={{ width: '70%' }} src={AboutHeroImg} alt="" />

                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default About_Hero