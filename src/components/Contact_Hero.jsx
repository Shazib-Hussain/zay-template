import React from 'react'
import { Box, Typography, List, ListItem, ListItemText, Link } from '@mui/material';


function Contact_Hero() {
    return (
        <>
            <Box sx={{
                width: '100%'
                , height: 'max-content'
                , display: 'flex'
                , justifyContent: 'center'
                // flexDirection: 'column'
                // , alignItems: 'center',

                , backgroundColor: 'rgb(233, 238, 245)',
                padding: '100px 0px'
            }}>

                <Box sx={{
                    width: { xl: '1500px', lg: '1150px', md: '600px', sm: '80%', xs: '80%' }
                    // , backgroundColor: 'blue'

                    // ,margin: '80px'
                    , display: 'flex',
                    flexDirection: 'column'
                    // , flexWrap: { xs: 'wrap-reverse', lg: 'nowrap' }
                    , justifyContent: 'center'
                    , alignItems: 'center',
                    // , paddingBottom: '80px'
                    textAlign: 'center'
                }}>

                <Typography variant='h3'>
                    Contact Us
                </Typography>

                <Typography>
                    Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.
                </Typography>
                </Box>

            </Box>
        </>
    )
}

export default Contact_Hero