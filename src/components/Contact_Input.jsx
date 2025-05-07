import { TextField, Box, Typography } from '@mui/material'
import React from 'react'

function Contact_Input() {
    return (
        <>
            <Box sx={{
                width: '100%'
                , height: 'max-content'
                , display: 'flex'
                , justifyContent: 'center'
                // , backgroundColor: 'rgb(233, 238, 245)',
                , padding: '100px 0px'
            }}>

                <Box sx={{
                    width: { xl: '1300px', lg: '1000px', md: '500px', sm: '70%', xs: '70%' }
                    , display: 'flex'
                    , justifyContent: 'space-between'
                    , rowGap: '30px'
                    ,flexWrap: 'wrap'
                    , alignItems: 'flex-start',
                    textAlign: 'center'
                }}>


                    <Box sx={{
                        width: {xs: '100%' , md: '45%'}
                        // , border: '2px solid'
                        ,display: 'flex'
                        , flexDirection: 'column'
                        , gap: '10px'
                        , alignItems: 'flex-start'
                    }}>
                        <Typography>
                            Name
                        </Typography>

                        <TextField fullWidth  size='small' sx={{
                        }}></TextField>
                    </Box>
                    {/* //// */}
                    <Box sx={{
                        width: {xs: '100%' , md: '45%'}
                        // , border: '2px solid'
                        ,display: 'flex'
                        , flexDirection: 'column'
                        , gap: '10px'
                        , alignItems: 'flex-start'
                    }}>
                        <Typography>
                            E-mail
                        </Typography>

                        <TextField fullWidth  size='small' sx={{
                        }}></TextField>
                    </Box>
                    {/* //// */}
                    <Box sx={{
                        width: '100%'
                        // , border: '2px solid'
                        ,display: 'flex'
                        , flexDirection: 'column'
                        , gap: '10px'
                        , alignItems: 'flex-start'
                    }}>
                        <Typography>
                            Subject
                        </Typography>

                        <TextField  fullWidth size='small' sx={{
                        }}></TextField>
                    </Box>
                    {/* //// */}
                    {/* //// */}
                    <Box sx={{
                        width: '100%'
                        // , border: '2px solid'
                        ,display: 'flex'
                        , flexDirection: 'column'
                        , gap: '10px'
                        , alignItems: 'flex-start'
                    }}>
                        <Typography>
                            Message
                        </Typography>

                        <TextField  fullWidth size='small' sx={{
                            // height: '200px'
                        }}></TextField>
                    </Box>
                    {/* //// */}

                </Box>

            </Box>
        </>
    )
}

export default Contact_Input