import { useDropdown } from 'shared/hooks/useDropdown'
import { Grid, IconButton } from '@mui/material'
import { Icons } from 'assets/icons'
import { StyledMenu } from 'widgets/Todolist/ui/menu'
import React from 'react'
import { StyledMenuItem } from 'widgets/Todolist/ui/menu/ui/menuItem'

export const SettingsMenu: React.FC = () => {
    const { handleClose, handleClick, isOpen, anchorEl } = useDropdown()

    return (
        <Grid>
            <IconButton onClick={handleClick}>
                <Icons.Settings />
            </IconButton>
            <StyledMenu open={isOpen} anchorEl={anchorEl} onClose={handleClose}>
                <StyledMenuItem />
            </StyledMenu>
        </Grid>
    )
}
