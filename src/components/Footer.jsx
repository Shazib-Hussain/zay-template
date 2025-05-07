import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Link, Button ,TextField} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {


    // xs, extra - small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra - large: 1536px

    return (
        <>
            {/* FOOTER */}
            <Box sx={{
                padding: '50px 0px'
                , display: 'flex',
                flexDirection: 'column'
                , alignItems: 'center'
                , backgroundColor: 'rgb(33, 41, 52)'
            }}>

                {/* FOOTER MAIN */}
                <Box sx={{
                    width: { xl: '1500px', lg: '1150px', md: '600px', sm: '80%', xs: '80%' }
                    // , border: '2px solid'
                    , display: 'flex',
                    paddingBottom: '30px'
                    , borderBottom: '1px solid gray'
                    // , flexWrap: { xs: 'wrap', md: 'nowrap' }
                    , gap: { xs: '30px', s: '0px' }
                    , justifyContent: 'space-between'
                    , flexWrap: {xs: 'wrap' , md: 'nowrap'}
                }}>




                    {/* FOOTER DIVISION 1 */}
                    <Box sx={{
                        width: { xs: '100%', md: '30%'  }
                        // , border: '1px solid lightgray'
                        , borderRadius: '5px'
                        , display: 'flex'
                        , flexDirection: 'column'
                        , alignItems: 'stretch'
                        // , gap: '10px'
                    }}>

                        {/* FOOTER HEADING */}
                        <Typography sx={{ marginBottom: '15px', paddingBottom: '15px', fontWeight: '500', borderBottom: '1px solid gray' }} variant="h4" color="rgb(89, 171, 110)">
                            Zay Shop
                        </Typography>


                        {/* FOOTER LIST */}
                        <List sx={{
                            color: 'rgb(207, 214, 197)'
                            , fontSize: 'large',
                            display: 'flex'
                            , flexDirection: 'column'
                            , alignItems: 'flex-start',
                            gap: '15px'
                            , fontFamily: 'sans-serif'

                        }}>
                            <ListItem sx={{ padding: '0' }}>
                                <LocationOnIcon /> 123 Consectetur at ligula 10660
                            </ListItem>
                            {/* ///// */}
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="tel:0126-456-785" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    <CallIcon /> 0126-456-785
                                </Link>
                            </ListItem>
                            {/* ///// */}
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="mailto:info@company.com" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}>
                                    <MailIcon /> info@company.com
                                </Link>
                            </ListItem>
                            {/* ///// */}
                            <ListItem sx={{ padding: '0' }}>
                            </ListItem>
                        </List>


                    </Box>



                    {/* FOOTER DIVISION 2*/}
                    <Box sx={{
                        width: { xs: '100%', md: '30%'  }
                        // , border: '1px solid lightgray'
                        , borderRadius: '5px'
                        , display: 'flex'
                        , flexDirection: 'column'
                        , alignItems: 'stretch'
                        // , gap: '10px'
                    }}>

                        {/* FOOTER HEADING */}
                        <Typography sx={{ marginBottom: '15px', paddingBottom: '15px', fontWeight: '500', borderBottom: '1px solid gray' }} variant="h4" color="rgb(207, 214, 197)">
                            Products
                        </Typography>


                        {/* FOOTER LIST */}
                        <List sx={{
                            color: 'rgb(207, 214, 197)'
                            , fontSize: 'large',
                            display: 'flex'
                            , flexDirection: 'column'
                            , alignItems: 'flex-start'
                            , padding: '0'
                            , gap: '15px'
                            , fontFamily: 'sans-serif'

                        }}>
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    Luxury
                                </Link>
                            </ListItem>
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    Sport Wear
                                </Link>
                            </ListItem>
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    Men's Shoes
                                </Link>
                            </ListItem>
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    Women's Shoes
                                </Link>
                            </ListItem>
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    Popular Dress
                                </Link>
                            </ListItem>
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    Gym Accessories
                                </Link>
                            </ListItem>
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    Sport Shoes
                                </Link>
                            </ListItem>

                        </List>


                    </Box>



                    {/* FOOTER DIVISION 3*/}
                    <Box sx={{
                        width: { xs: '100%', md: '30%'  }
                        // , border: '1px solid lightgray'
                        , borderRadius: '5px'
                        , display: 'flex'
                        , flexDirection: 'column'
                        , alignItems: 'stretch'
                        // , gap: '10px'
                    }}>

                        {/* FOOTER HEADING */}
                        <Typography sx={{ marginBottom: '15px', paddingBottom: '15px', fontWeight: '500', borderBottom: '1px solid gray' }} variant="h4" color="rgb(207, 214, 197)">
                            Further Info
                        </Typography>


                        {/* FOOTER LIST */}
                        <List sx={{
                            color: 'rgb(207, 214, 197)'
                            , fontSize: 'large',
                            display: 'flex'
                            , flexDirection: 'column'
                            , alignItems: 'flex-start'
                            , fontFamily: 'sans-serif'
                            , gap: '15px'
                        }}>

                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    Home
                                </Link>
                            </ListItem>
                            {/* //// */}
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    About Us
                                </Link>
                            </ListItem>
                            {/* //// */}
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    Shop Locations
                                </Link>
                            </ListItem>
                            {/* //// */}
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    FAQs
                                </Link>
                            </ListItem>
                            {/* //// */}
                            <ListItem sx={{ padding: '0' }}>
                                <Link href="#" target="_blank" sx={{ textDecoration: 'none', color: 'rgb(207, 214, 197)', '&:hover': { color: 'rgb(89, 171, 110)' } }}  >
                                    Contact
                                </Link>
                            </ListItem>
                            {/* //// */}

                        </List>


                    </Box>



                </Box>


                {/* FOOTER SOCIAL LINKS MAIN */}
                <Box sx={{
                    width: { xl: '1500px', lg: '1150px', md: '600px', sm: '80%', xs: '80%' },
                    height: 'max-content'
                    , padding: '30px'
                    , display: 'flex'
                    , justifyContent: {xs: 'flex-start' , md: 'space-between'} 
                    , alignItems: 'center'
                    , transition: 'all 0.43s ease'
                    , flexWrap: {xs: 'wrap' , md: 'nowrap'},
                    gap: '10px'
                    }}>

                    {/* FOOTER SOCIAL LINK LIST */}
                    <List  sx={{
                        display: 'flex'
                        , gap:  '20px'
                    }}>
                        <ListItem sx={{
                            width:  '40px',
                            height: '40px'
                            ,  borderRadius: '50%',
                            border: '1px solid gray'
                            , color: 'rgb(207, 214, 225)'
                            , '&:hover' : {backgroundColor:  'rgb(207, 214, 225)' , color:  'rgb(33, 41, 52)'},
                            cursor:  'pointer',
                            display: 'flex'
                            , justifyContent: 'center'
                            ,  alignItems:  'center',
                            transition: '0.34s  ease'
                        }}>
                            <FacebookIcon/>
                        </ListItem>
                        {/* //// */}
                        <ListItem sx={{
                            width:  '40px',
                            height: '40px'
                            ,  borderRadius: '50%',
                            border: '1px solid gray'
                            , color: 'rgb(207, 214, 225)'
                            , '&:hover' : {backgroundColor:  'rgb(207, 214, 225)' , color:  'rgb(33, 41, 52)'},
                            cursor:  'pointer',
                            display: 'flex'
                            , justifyContent: 'center'
                            ,  alignItems:  'center'
                            ,transition: '0.34s  ease'
                        }}>
                            <InstagramIcon/>
                        </ListItem>
                        {/* //// */}
                        <ListItem sx={{
                            width:  '40px',
                            height: '40px'
                            ,  borderRadius: '50%',
                            border: '1px solid gray'
                            , color: 'rgb(207, 214, 225)'
                            , '&:hover' : {backgroundColor:  'rgb(207, 214, 225)' , color:  'rgb(33, 41, 52)'},
                            cursor:  'pointer',
                            display: 'flex'
                            , justifyContent: 'center'
                            ,  alignItems:  'center'
                            ,transition: '0.34s  ease'
                        }}>
                            <TwitterIcon/>
                        </ListItem>
                        {/* //// */}
                        <ListItem sx={{
                            width:  '40px',
                            height: '40px'
                            ,  borderRadius: '50%',
                            border: '1px solid gray'
                            , color: 'rgb(207, 214, 225)'
                            , '&:hover' : {backgroundColor:  'rgb(207, 214, 225)' , color:  'rgb(33, 41, 52)'},
                            cursor:  'pointer',
                            display: 'flex'
                            , justifyContent: 'center'
                            ,  alignItems:  'center'
                            ,transition: '0.34s  ease'
                        }}>
                            <LinkedInIcon/>
                        </ListItem>
                        {/* //// */}
                    </List>

                    
                    {/* FOOTER EMAIL INPUT  */}
                    <Box sx={{
                        display: 'flex'
                    }}>

                        <TextField label="E-mail Address" fullWidth size="small"  >

                        </TextField>
                        <Button  variant="contained" size="large" sx={{height:'40px'}} >
                            Submit
                        </Button>

                    </Box>


                </Box>

                


            </Box>

        </>
    )
}

export default Footer



// import React from 'react';
// import { Button, Stack } from '@mui/material';
// import { Save, Delete } from '@mui/icons-material';

// export default function AllButtonsDemo() {
//   return (
//     <Stack spacing={2} direction="column" sx={{ p: 4 }}>

//       {/* Variants */}
//       <Stack direction="row" spacing={2}>
//         <Button variant="contained">Contained</Button>
//         <Button variant="outlined">Outlined</Button>
//         <Button variant="text">Text</Button>
//       </Stack>

//       {/* Colors */}
//       <Stack direction="row" spacing={2}>
//         <Button variant="contained" color="primary">Primary</Button>
//         <Button variant="contained" color="secondary">Secondary</Button>
//         <Button variant="contained" color="error">Error</Button>
//         <Button variant="contained" color="success">Success</Button>
//       </Stack>

//       {/* Sizes */}
//       <Stack direction="row" spacing={2}>
//         <Button variant="contained" size="small">Small</Button>
//         <Button variant="contained" size="medium">Medium</Button>
//         <Button variant="contained" size="large">Large</Button>
//       </Stack>

//       {/* With Icons */}
//       <Stack direction="row" spacing={2}>
//         <Button variant="contained" startIcon={<Save />}>Save</Button>
//         <Button variant="outlined" endIcon={<Delete />}>Delete</Button>
//       </Stack>

//       {/* Disabled and Full Width */}
//       <Stack direction="row" spacing={2}>
//         <Button variant="contained" disabled>Disabled</Button>
//         <Button variant="contained" fullWidth>Full Width</Button>
//       </Stack>

//       {/* Custom Hover Style */}
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: 'teal',
//           '&:hover': {
//             backgroundColor: 'darkslategray',
//           },
//         }}
//       >
//         Custom Hover
//       </Button>

//     </Stack>
//   );
// }
