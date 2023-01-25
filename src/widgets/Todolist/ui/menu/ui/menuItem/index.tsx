import { Grid, Typography } from '@mui/material'
import * as React from 'react'
import { Switch } from 'shared/ui/Switch'
import { useNews } from 'pages/Main/newsProvider'

export const StyledMenuItem: React.FC = () => {
    const { updateShowNews, showNews } = useNews()

    return (
        <Grid container gap='14px' flexWrap='nowrap' alignItems='center'>
            <Grid container direction='column' flexGrow='1' gap='2px'>
                <Typography
                    variant='taskTitle'
                    color='gray.light'
                    maxWidth='200px'
                    textOverflow='ellipsis'
                    overflow='hidden'
                    whiteSpace='nowrap'
                    sx={{
                        textDecoration: status ? 'line-through' : 'none',
                    }}
                >
                    Новости
                </Typography>
            </Grid>
            <Grid>
                <Switch checked={showNews} onChange={updateShowNews} />
            </Grid>
        </Grid>
    )
}
