import React from 'react'
import { Grid, Typography } from '@mui/material'
import { PriorityType } from 'entities/Task/types'
import { Switch } from 'shared/ui/Switch'
import { Indicator } from 'shared/ui/Indicator'
import { useTodo } from 'widgets/Todolist/model'

type PropsType = {
    title: string
    subtitle: string
    status: boolean
    priority: PriorityType
    date: string
    id: string
}

export const Task: React.FC<PropsType> = ({ priority, status, title, subtitle, date, id }) => {
    const { updateTaskStatus } = useTodo()

    const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        updateTaskStatus(date, id, checked)
    }

    return (
        <Grid container gap='14px' flexWrap='nowrap' alignItems='center'>
            <Grid>
                <Indicator priority={priority} />
            </Grid>
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
                    {title}
                </Typography>
                <Typography
                    variant='body'
                    color='white'
                    maxWidth='176px'
                    textOverflow='ellipsis'
                    overflow='hidden'
                    whiteSpace='nowrap'
                >
                    {subtitle}
                </Typography>
            </Grid>
            <Grid>
                <Switch checked={status} onChange={handleChangeStatus} />
            </Grid>
        </Grid>
    )
}
