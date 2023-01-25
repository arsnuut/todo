import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { Icons } from 'assets/icons'

export const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} children={props.children} />
))(({ theme }) => ({
    borderRadius: `25px`,
    backgroundColor: theme.palette.gray.dark,
    boxShadow: theme.shadows[1],
    padding: '20px 15px',
    width: '100%',
    '&:before': {
        display: 'none',
    },
}))

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<Icons.Expand />} {...props} />
))(() => ({
    gap: '14px',
    padding: '0 17px 0 0',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        gap: '14px',
        alignItems: 'center',
    },
}))

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    padding: '12px 0 0',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    rowGap: '20px',
    display: 'flex',
    flexDirection: 'column',
}))
