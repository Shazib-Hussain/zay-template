import React from 'react'
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import sliderImg from '../assets/images/banner_img_01.jpg'


function Hero() {


    console.log('bye');
    

    return (
        <>
            {/* HERO SECTION */}
            <Box sx={{
                width: { xl: '1500px', lg: '1150px', md: '600px', sm: '80%' , xs: '80%'}
                // , backgroundColor: 'blue'

                // ,margin: '80px'
                , display: 'flex'
                , flexWrap: { xs: 'wrap-reverse', lg: 'nowrap' }
                , justifyContent: 'center'
                , alignItems: 'center'
                , paddingBottom: '80px'

            }}>

                {/* TEXT MAIN */}
                <Box sx={{
                    width: { xs: '100%', lg: '50%' }
                    // , border: '2px solid '
                    // , paddingLeft: { xs: 0, lg: '150px' }
                    // , padding: { xs: '0px 50px', lg: '0px 0px' }

                }}>
                    <Typography sx={{
                        display: 'flex'
                        , alignItems: 'center'
                        , gap: '10px',
                        color: 'rgb(89, 171, 110)'
                    }}>
                        <Typography variant='h4' sx={{
                            fontWeight: 'bold'
                        }}>
                            Zay
                        </Typography>

                        <Typography variant='h4' sx={{

                        }}>
                            eCommerce
                        </Typography>
                    </Typography>

                    <Typography variant='h4' sx={{
                    }}>
                        Tiny and Perfect eCommerce template
                    </Typography>

                    <Typography sx={{
                        fontSize: 'medium'
                    }}>
                        Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.
                    </Typography>
                </Box>


                {/* IMAGE MAIN */}
                <Box sx={{
                    width: { xs: '100%', lg: '50%' },
                    display: 'flex'
                    , justifyContent: 'center'
                    , alignItems: 'center'
                    // , padding: { xs: '0px 50px', lg: '0px 0px' }
                    // , border: '2px solid '
                    // , paddingRight: { xs: 0, lg: '150px' }
                }}>

                    <img style={{ width: '80%' }} src={sliderImg} alt="" />

                </Box>


            </Box>
        </>
    )
}

export default Hero