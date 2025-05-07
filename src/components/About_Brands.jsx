import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Link ,Button} from '@mui/material';
import BrandImg1 from '../assets/images/brand_01.png'
import BrandImg2 from '../assets/images/brand_02.png'
import BrandImg3 from '../assets/images/brand_03.png'
import BrandImg4 from '../assets/images/brand_04.png'



function About_Brands() {
    return (
        <>
            <Box sx={{
                
                padding: '80px 0px'
                , display: 'flex'
                , flexDirection: 'column'
                , alignItems: 'center'
                , rowGap: '30px',
                backgroundColor: 'rgb(233, 238, 245)'

            }}>

                <Typography variant="h4" sx={{
                    textAlign: 'center'
                }}>
                    Our Brands
                </Typography>

                <Typography sx={{
                    width: '50%'
                    , textAlign: 'center'
                }}>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>

                {/* BRANDS MAIN */}
                <Box sx={{
                    width: { xl: '1500px', lg: '1150px', md: '600px', sm: '80%', xs: '80%' }
                    // , border: '2px solid'
                    , display: 'flex'
                    // , flexWrap: {xs: 'wrap' , lg: 'nowrap'}
                    // , gap: '30px'
                    , justifyContent: 'space-around'

                    
                    }}>



                    {/* BRAND 1 */}
                    <Box component='img' src={BrandImg1} sx={{
                        transition: '.34s ease'
                        , width: '12.5%'
                        , opacity: '.5'
                        , cursor: 'pointer'
                        ,'&:hover': {
                            opacity: 1
                        }
                    }}></Box>


                    {/* BRAND 1 */}
                    <Box component='img' src={BrandImg2} sx={{
                        transition: '.34s ease'
                        , width: '12.5%'
                        , opacity: '.5'
                        , cursor: 'pointer'
                        ,'&:hover': {
                            opacity: 1
                        }
                    }}></Box>


                    {/* BRAND 1 */}
                    <Box component='img' src={BrandImg3} sx={{
                        transition: '.34s ease'
                        , width: '12.5%'
                        , opacity: '.5'
                        , cursor: 'pointer'
                        ,'&:hover': {
                            opacity: 1
                        }
                    }}></Box>


                    {/* BRAND 1 */}
                    <Box component='img' src={BrandImg4} sx={{
                        transition: '.34s ease'
                        , width: '12.5%'
                        , opacity: '.5'
                        , cursor: 'pointer'
                        ,'&:hover': {
                            opacity: 1
                        }
                    }}></Box>



                        



                </Box>





            </Box>
        </>
    )
}

export default About_Brands