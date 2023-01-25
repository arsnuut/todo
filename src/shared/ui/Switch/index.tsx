import { styled, Switch as MuiSwitch } from '@mui/material'
import successIcon from 'shared/ui/Switch/icons/successIcon.svg'
import crossIcon from 'shared/ui/Switch/icons/crossIcon.svg'
import { palette } from 'assets/theme/palette'

export const Switch = styled(MuiSwitch)(({ theme, checked }) => ({
    padding: 0,
    width: '50px',
    height: '30px',
    '& .MuiSwitch-switchBase': {
        opacity: 1,
        padding: 0,
    },
    '& .Mui-checked+.MuiSwitch-track': {
        backgroundColor: palette.mainColors.green,
        opacity: 1,
    },
    '&:hover': {
        backgroundColor: 'transparent',
    },
    '& .MuiSwitch-track': {
        background: palette.mainColors.blue,
        boxShadow: 'inset 0px 0px 10px 3px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        opacity: 1,
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.gray.light,
        boxShadow: 'none',
        width: 25,
        height: 25,
        margin: 2.5,
        '&:before': {
            content: '""',
            position: 'absolute',
            backgroundImage: `url(${checked ? successIcon : crossIcon})`,
            width: '25px',
            height: '25px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
}))
