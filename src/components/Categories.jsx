import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Link ,Button} from '@mui/material';
import CategoryImg1 from '../assets/images/category_img_01.jpg'
import CategoryImg2 from '../assets/images/category_img_02.jpg'
import CategoryImg3 from '../assets/images/category_img_03.jpg'



function Categories() {
    return (
        <>
            <Box sx={{
                
                padding: '80px 0px'
                , display: 'flex'
                , flexDirection: 'column'
                , alignItems: 'center'
                , rowGap: '30px'

            }}>

                <Typography variant="h4" sx={{
                    textAlign: 'center'
                }}>
                    Categories of the Month
                </Typography>

                <Typography sx={{
                    width: '50%'
                    , textAlign: 'center'
                }}>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>

                {/* CATEGORIES MAIN */}
                <Box sx={{
                    width: { xl: '1500px', lg: '1150px', md: '600px', sm: '80%', xs: '80%' }
                    // , border: '2px solid'
                    , display: 'flex'
                    , flexWrap: {xs: 'wrap' , md: 'nowrap'}
                    , gap: {xs: '30px' , s:'0px'}
                    , justifyContent: 'space-between'
                    }}>

                    {/* CATEGORY 1 */}
                    <Box sx={{
                        width: {xl: '28%', s: '100%'}
                        // , border: '2px solid blue'
                        ,display: 'flex'
                        , flexDirection: 'column',
                        alignItems: 'center'
                        , gap: '10px'
                        }}>

                        <img style={{
                            borderRadius: '50%'
                        }}   width = '90%' src={CategoryImg1} alt=""  />

                        <Typography sx={{
                            fontWeight: 'bold'
                        }}>
                            Watches
                        </Typography>

                        <Button  variant="contained" color="success" size="medium" sx={{
                            width: 'max-content'
                        }} >
                            Go Shop
                        </Button>

                    </Box>

                    {/* CATEGORY 2 */}
                    <Box sx={{
                        width: {xl: '28%', s: '100%'}
                        // , border: '2px solid blue'
                        ,display: 'flex'
                        , flexDirection: 'column',
                        alignItems: 'center'
                        , gap: '10px'
                        }}>

                        <img style={{
                            borderRadius: '50%'
                        }}   width = '90%' src={CategoryImg2} alt=""  />

                        <Typography sx={{
                            fontWeight: 'bold'
                        }}>
                            Shoes
                        </Typography>

                        <Button  variant="contained" color="success" size="medium" sx={{
                            width: 'max-content'
                        }} >
                            Go Shop
                        </Button>

                    </Box>

                    {/* CATEGORY 3 */}
                    <Box sx={{
                        width: {xl: '28%', s: '100%'}
                        // , border: '2px solid blue'
                        ,display: 'flex'
                        , flexDirection: 'column',
                        alignItems: 'center'
                        , gap: '10px'
                        }}>

                        <img style={{
                            borderRadius: '50%'
                        }}   width = '90%' src={CategoryImg3} alt=""  />

                        <Typography sx={{
                            fontWeight: 'bold'
                        }}>
                            Glasses
                        </Typography>

                        <Button  variant="contained" color="success" size="medium" sx={{
                            width: 'max-content'
                        }} >
                            Go Shop
                        </Button>

                    </Box>

                </Box>





            </Box>
        </>
    )
}

export default Categories