import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Link, Button } from '@mui/material';
import productImg1 from '../assets/images/feature_prod_01.jpg'
import productImg2 from '../assets/images/feature_prod_02.jpg'
import productImg3 from '../assets/images/feature_prod_03.jpg'
import { Rating } from '@mui/material';
import { green } from "@mui/material/colors";


function Products() {



    // xs, extra - small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra - large: 1536px


    return (
        <>
            <Box sx={{
                padding: '80px 0px'
                , display: 'flex'
                , flexDirection: 'column'
                , alignItems: 'center'
                , rowGap: '30px'
                , backgroundColor: 'rgb(239, 239, 239)'

            }}>

                <Typography variant="h4" sx={{
                    textAlign: 'center'
                }}>
                    Featured Products
                </Typography>

                <Typography sx={{
                    width: '50%'
                    , textAlign: 'center'
                }}>
                    Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </Typography>

                {/* PRODUCTS MAIN */}
                <Box sx={{
                    width: { xl: '1500px', lg: '1150px', md: '600px', sm: '80%', xs: '80%' }
                    // , border: '2px solid'
                    , display: 'flex'
                    , flexWrap: { xs: 'wrap', md: 'nowrap' }
                    , gap: { xs: '30px', s: '0px' }
                    , justifyContent: 'space-between'
                }}>

                    {/* PRODUCT 1 */}
                    <Box sx={{
                        width: { xl: '28%', md: '28%', s: '100%' }
                        , border: '1px solid lightgray',
                        backgroundColor: "white"
                        , borderRadius: '5px'
                        , display: 'flex'
                        , flexDirection: 'column',
                        alignItems: 'flex-start'
                        , gap: '10px'
                        }}>

                        <img style={{ cursor: "pointer"
                        }} width='100%' src={productImg1} alt="" />

                        {/* TEXT MAIN */}
                        <Box sx={{
                            padding: '10px'
                            , display: 'flex'
                            , flexDirection: 'column',
                            alignItems: 'flex-start'
                            , gap: '5px'
                        }}>

                            {/* Stars and price */}
                            <Box sx={{
                                width: '100%'
                                , display: 'flex'
                                , justifyContent: 'space-between',
                                flexWrap: 'wrap'
                            }}>
                                <Rating
                                    name="customized-color"
                                    value={3}
                                    precision={0.5}
                                    readOnly
                                    sx={{
                                        '& .MuiRating-iconFilled': {
                                            color: '#fdd835', // bright yellow
                                        },
                                        '& .MuiRating-iconEmpty': {
                                            color: '#cfd8dc', // light gray
                                        },
                                    }}
                                />

                                <Typography sx={{
                                    color: 'gray'
                                    , fontSize: 'large'
                                }}>
                                    $23.5
                                </Typography>

                            </Box>



                            <Typography sx={{
                                fontSize: 'x-large'
                                , cursor: 'pointer'
                            }}>
                                Gym Weight
                            </Typography>

                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </Typography>

                            <Typography sx={{
                                color: 'gray'
                                , fontSize: 'large'
                            }}>
                                Reviews (35)
                            </Typography>
                        </Box>


                    </Box>



                    {/* PRODUCT 2 */}
                    <Box sx={{
                        width: { xl: '28%', md: '28%', s: '100%' }
                        , border: '1px solid lightgray',
                        backgroundColor: "white"
                        , borderRadius: '5px'
                        , display: 'flex'
                        , flexDirection: 'column',
                        alignItems: 'flex-start'
                        , gap: '10px'
                        }}>

                        <img style={{ cursor: "pointer"
                        }} width='100%' src={productImg2} alt="" />

                        {/* TEXT MAIN */}
                        <Box sx={{
                            padding: '10px'
                            , display: 'flex'
                            , flexDirection: 'column',
                            alignItems: 'flex-start'
                            , gap: '5px'
                        }}>

                            {/* Stars and price */}
                            <Box sx={{
                                width: '100%'
                                , display: 'flex'
                                , justifyContent: 'space-between'
                                ,flexWrap: 'wrap'
                                
                            }}>
                                <Rating
                                    name="customized-color"
                                    value={4}
                                    precision={0.5}
                                    readOnly
                                    sx={{
                                        '& .MuiRating-iconFilled': {
                                            color: '#fdd835', // bright yellow
                                        },
                                        '& .MuiRating-iconEmpty': {
                                            color: '#cfd8dc', // light gray
                                        },
                                    }}
                                />

                                <Typography sx={{
                                    color: 'gray'
                                    , fontSize: 'large'
                                }}>
                                    $43.5
                                </Typography>

                            </Box>



                            <Typography sx={{
                                fontSize: 'x-large'
                                , cursor: 'pointer'
                            }}>
                                Cloud Nike Shoes
                            </Typography>

                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </Typography>

                            <Typography sx={{
                                color: 'gray'
                                , fontSize: 'large'
                            }}>
                                Reviews (42)
                            </Typography>
                        </Box>


                    </Box>



                    {/* PRODUCT 3 */}
                    <Box sx={{
                        width: { xl: '28%', md: '28%', s: '100%' }
                        , border: '1px solid lightgray',
                        backgroundColor: "white"
                        , borderRadius: '5px'
                        , display: 'flex'
                        , flexDirection: 'column',
                        alignItems: 'flex-start'
                        , gap: '10px'
                        }}>

                        <img style={{ cursor: "pointer"
                        }} width='100%' src={productImg3} alt="" />

                        {/* TEXT MAIN */}
                        <Box sx={{
                            padding: '10px'
                            , display: 'flex'
                            , flexDirection: 'column',
                            alignItems: 'flex-start'
                            , gap: '5px'
                        }}>

                            {/* Stars and price */}
                            <Box sx={{
                                width: '100%'
                                , display: 'flex'
                                , justifyContent: 'space-between'
                                ,flexWrap: 'wrap'

                            }}>
                                <Rating
                                    name="customized-color"
                                    value={3}
                                    precision={0.5}
                                    readOnly
                                    sx={{
                                        '& .MuiRating-iconFilled': {
                                            color: '#fdd835', // bright yellow
                                        },
                                        '& .MuiRating-iconEmpty': {
                                            color: '#cfd8dc', // light gray
                                        },
                                    }}
                                />

                                <Typography sx={{
                                    color: 'gray'
                                    , fontSize: 'large'
                                }}>
                                    $33.5
                                </Typography>

                            </Box>



                            <Typography sx={{
                                fontSize: 'x-large'
                                , cursor: 'pointer'
                            }}>
                                Summer Addides Shoes
                            </Typography>

                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </Typography>

                            <Typography sx={{
                                color: 'gray'
                                , fontSize: 'large'
                            }}>
                                Reviews (35)
                            </Typography>
                        </Box>


                    </Box>


                </Box>





            </Box>
        </>
    )
}

export default Products