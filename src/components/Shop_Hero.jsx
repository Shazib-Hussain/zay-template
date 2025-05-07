import React from 'react'
import { Box, Typography, List, ListItem, ListItemText, Link, Button } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AccordionUsage from './Accordion';
import Shop_Data from './Shop_Data';


function Shop_Hero() {


    // xs, extra - small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra - large: 1536px

    return (
        <>
            {/* SHOP HERO */}
            <Box sx={{
                padding: '80px 0px'
                , display: 'flex'
                , flexDirection: 'column'
                , alignItems: 'center'
                , rowGap: '30px'
            }} >


                {/* SHOP MAIN */}
                <Box sx={{
                    width: { xl: '1500px', lg: '1150px', md: '600px', sm: '80%', xs: '80%' }
                    // , border: '2px solid'
                    , display: 'flex'
                    , flexWrap: { xs: 'wrap', md: 'nowrap' }
                    , gap: { xs: '30px', s: '0px' }
                    , justifyContent: 'space-between'
                }}>



                    {/* SHOP ACCORDION MAIN */}
                    <Box sx={{
                        width: {xs: '70%' ,sm: '50%' , md: '25%'}
                        // , border: '2px solid'
                    }}>

                        <AccordionUsage />

                    </Box>


                    {/* SHOP PRODCUTS SHOW MAIN */}
                    <Box sx={{
                        width: {xs: '100%' , md: '75%'}
                        // , border: '2px solid'
                        , display: 'flex'
                        , flexDirection: 'column'
                        , gap: '20px'

                    }}>

                        {/* PRODUCTS SHOW TEXT */}
                        <Box sx={{
                            display: 'flex'
                            , justifyContent: 'space-between'
                        }}>


                            <Box sx={{
                                display: 'flex'
                                , justifyContent: 'center'
                                , gap: '10px'
                            }}>

                                <Typography sx={{
                                    '&:hover': { color: 'green' }
                                    , cursor: 'pointer'
                                }}>
                                    All
                                </Typography>
                                <Typography sx={{
                                    '&:hover': { color: 'green' }
                                    , cursor: 'pointer'
                                }}>
                                    Men
                                </Typography>
                                <Typography sx={{
                                    '&:hover': { color: 'green' }
                                    , cursor: 'pointer'
                                }}>
                                    Woman
                                </Typography>
                            </Box>

                            <FormControl sx={{
                                width: '300px'
                            }}>
                                <InputLabel id="uncontrolled-select-label"></InputLabel>
                                <Select
                                    labelId="uncontrolled-select-label"
                                    id="uncontrolled-select"
                                    // label="Age"
                                    defaultValue={1}
                                >
                                    <MenuItem value={1}>Featured</MenuItem>
                                    <MenuItem value={2}>A to Z</MenuItem>
                                    <MenuItem value={3}>Item</MenuItem>
                                </Select>
                            </FormControl>





                        </Box>

                        {/* PRODCUTS SHOW */}
                        <Box sx={{
                            width: '100%'
                            , display: 'flex'
                            , justifyContent: 'space-between'
                            , flexWrap: 'wrap',
                            rowGap: '20px'
                        }}>
                            {
                                Shop_Data.map((ele, idx) => {
                                    return (
                                        <>
                                            <Box sx={{
                                                width: {xs: '100%' , sm: '30%'}
                                                , display: 'flex'
                                                , flexDirection: 'column'
                                                , alignItems: 'center'
                                                , border: '1px solid gray'
                                                , boxShadow: 10
                                                , gap: '10px'
                                            }}>

                                                <img style={{ width: '100%' }} src={ele.imgSrc} alt="" />


                                                <Typography>
                                                    {ele.name}
                                                </Typography>

                                                <Typography>
                                                    {ele.sizes}
                                                </Typography>

                                                <Typography>
                                                    {ele.price}
                                                </Typography>

                                            </Box>
                                        </>
                                    )
                                })
                            }

                        </Box>

                    </Box>

                </Box>

            </Box>
        </>
    )
}

export default Shop_Hero