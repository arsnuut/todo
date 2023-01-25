import { Grid, GridProps, styled } from '@mui/material'
import { PriorityType } from 'entities/Task/types'
import { getColor } from 'entities/Task/lib'

export const Indicator = styled(Grid, {
    shouldForwardProp: (prop) => !['priority'].includes(prop as string),
})<GridProps & { priority?: PriorityType }>(({ theme, priority }) => ({
    width: '5px',
    height: '40px',
    backgroundColor: priority ? getColor(priority) : theme.palette.gray.main,
    borderRadius: '3px',
}))
