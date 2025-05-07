import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Link ,Button} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import PercentIcon from '@mui/icons-material/Percent';
import PersonIcon from '@mui/icons-material/Person';



function About_Services() {
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
                    Our Services
                </Typography>

                <Typography sx={{
                    width: '50%'
                    , textAlign: 'center'
                }}>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>

                {/* SERVICES MAIN */}
                <Box sx={{
                    width: { xl: '1500px', lg: '1150px', md: '600px', sm: '80%', xs: '80%' }
                    // , border: '2px solid'
                    , display: 'flex'
                    , flexWrap: {xs: 'wrap' , lg: 'nowrap'}
                    , rowGap: {xs: '30px' , s:'0px'}
                    , justifyContent: 'space-between'
                    
                    }}>



                    {/* SERVICE 1 */}
                    <Box sx={{
                        width: {xs: '100%' , sm: '47%' , lg: '23%' }
                        , height: '250px'
                        , boxShadow: 10
                        // , border: '2px solid red'
                        ,display: 'flex'
                        , flexDirection: 'column',
                        alignItems: 'center'
                        , justifyContent: 'center'
                        , gap: '10px'
                        , '&:hover' : {color: 'white'   , backgroundColor: 'rgb(89, 171, 110)'}
                        , transition: '0.33s ease'
                        , cursor:  "pointer"

                    }}>


                        <LocalShippingIcon sx={{
                            fontSize: 70
                            , color: 'rgb(89, 171, 110)'
                        }}/>
                        

                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: 17.5
                            
                        }}>
                            Delivery Services
                        </Typography>
                    </Box>



                    {/* SERVICE 2 */}
                    <Box sx={{
                        width: {xs: '100%' , sm: '47%' , lg: '23%' }
                        , height: '250px'
                        , boxShadow: 10
                        // , border: '2px solid red'
                        ,display: 'flex'
                        , flexDirection: 'column',
                        alignItems: 'center'
                        , justifyContent: 'center'
                        , gap: '10px'
                        , '&:hover' : {color: 'white'   , backgroundColor: 'rgb(89, 171, 110)'}
                        , transition: '0.33s ease'
                        , cursor:  "pointer"

                    }}>


                        <MultipleStopIcon sx={{
                            fontSize: 70
                            , color: 'rgb(89, 171, 110)'
                        }}/>
                        

                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: 17.5
                            
                        }}>
                            Shipping & Return
                        </Typography>
                    </Box>



                    {/* SERVICE 3 */}
                    <Box sx={{
                        width: {xs: '100%' , sm: '47%' , lg: '23%' }
                        , height: '250px'
                        , boxShadow: 10
                        // , border: '2px solid red'
                        ,display: 'flex'
                        , flexDirection: 'column',
                        alignItems: 'center'
                        , justifyContent: 'center'
                        , gap: '10px'
                        , '&:hover' : {color: 'white'   , backgroundColor: 'rgb(89, 171, 110)'}
                        , transition: '0.33s ease'
                        , cursor:  "pointer"

                    }}>


                        < PercentIcon sx={{
                            fontSize: 70
                            , color: 'rgb(89, 171, 110)'
                        }}/>
                        

                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: 17.5
                            
                        }}>
                            Promotion
                        </Typography>
                    </Box>



                    {/* SERVICE 4 */}
                    <Box sx={{
                        width: {xs: '100%' , sm: '47%' , lg: '23%' }
                        , height: '250px'
                        , boxShadow: 10
                        // , border: '2px solid red'
                        ,display: 'flex'
                        , flexDirection: 'column',
                        alignItems: 'center'
                        , justifyContent: 'center'
                        , gap: '10px'
                        , '&:hover' : {color: 'white'   , backgroundColor: 'rgb(89, 171, 110)'}
                        , transition: '0.33s ease'
                        , cursor:  "pointer"

                    }}>


                        <PersonIcon sx={{
                            fontSize: 70
                            , color: 'rgb(89, 171, 110)'
                        }}/>
                        

                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: 17.5
                            
                        }}>
                            24 Hours Service
                        </Typography>
                    </Box>

                        



                </Box>





            </Box>
        </>
    )
}

export default About_Services