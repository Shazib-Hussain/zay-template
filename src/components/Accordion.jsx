import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Gender</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{
                        '&:hover': { color: 'green' }
                        , cursor: 'pointer'
                    }}>
                        Male
                    </Typography>
                    <Typography sx={{
                        '&:hover': { color: 'green' }
                        , cursor: 'pointer'
                    }}>
                        Female
                    </Typography>

                </AccordionDetails>
            </Accordion>
            {/* //// */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">
                        Sale
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{
                        '&:hover': { color: 'green' }
                        , cursor: 'pointer'
                    }}>
                        Sport
                    </Typography>
                    <Typography sx={{
                        '&:hover': {color: 'green'}
                        , cursor:  'pointer'
                    }}>
                        Luxury
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* //// */}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">
                        Products
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{
                        '&:hover': { color: 'green' }
                        , cursor: 'pointer'
                    }}>
                        Bag
                    </Typography>
                    <Typography sx={{
                        '&:hover': {color: 'green'}
                        , cursor:  'pointer'
                    }}>
                        Sweather
                    </Typography>
                    <Typography sx={{
                        '&:hover': {color: 'green'}
                        , cursor:  'pointer'
                    }}>
                        Sun Glasses
                    </Typography>
                </AccordionDetails>
                
            </Accordion>



        </div>
    );
}
