import Menu, { MenuProps } from '@mui/material/Menu'
import { styled } from '@mui/material/styles'
import * as React from 'react'

type PropsType = MenuProps & {
    direction?: 'right' | 'left' | 'center' | number
    isITechApps?: boolean
    width?: number
}

export const StyledMenu = styled(({ direction = 'right', ...props }: PropsType) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: direction,
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: direction,
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 20,
        padding: '20px 15px',
        marginTop: theme.spacing(1),
        minWidth: 200,
        boxShadow: theme.shadows[1],
        backgroundColor: theme.palette.gray.dark,
    },
}))
