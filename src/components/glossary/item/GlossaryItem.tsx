import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, makeStyles} from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function GlossaryItem() {

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3-content"
                id="panel3-header"
            >
                Item A
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
            <AccordionActions>
                <Button>Modify</Button>
                <Button>Delete</Button>
            </AccordionActions>
        </Accordion>
    )
}