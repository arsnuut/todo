import { Accordion, AccordionDetails, AccordionSummary } from 'features/Tasks/styles'
import { Indicator } from 'shared/ui/Indicator'
import { Grid, Typography } from '@mui/material'
import { Task } from 'entities/Task'
import { Icons } from 'assets/icons'
import { useTodo } from 'widgets/Todolist/model'
import React from 'react'
import { format, isTomorrow } from 'date-fns'

const parseTitleByDate = (date: string) => {
    if (isTomorrow(new Date(date))) return 'Tomorrow Tasks'

    return format(new Date(date), 'MM/dd') + ' Tasks'
}

export const TodayTasks: React.FC<{ date: string }> = ({ date }) => {
    const { tasks } = useTodo()

    return (
        <Grid container flexDirection='row' gap='15px'>
            <Grid container gap='10px'>
                <Icons.CheckedInBox />
                <Typography color='gray.light' variant='taskTitle'>
                    Today Tasks:
                </Typography>
            </Grid>
            <Grid
                padding={'20px 15px'}
                container
                flexDirection='column'
                gap='20px'
                bgcolor='gray.dark'
                borderRadius='40px'
            >
                {tasks[date].map((task) => (
                    <Task
                        key={task.id}
                        title={task.title}
                        subtitle={task.description}
                        status={task.done}
                        priority={task.priority}
                        id={task.id}
                        date={date}
                    />
                ))}
            </Grid>
        </Grid>
    )
}

export const AccordionTasks: React.FC<{ date: string }> = ({ date }) => {
    const { tasks } = useTodo()

    return (
        <Accordion>
            <AccordionSummary>
                <Indicator />
                <Typography
                    color='gray.light'
                    variant='taskTitle'
                    textOverflow='ellipsis'
                    overflow='hidden'
                    whiteSpace='nowrap'
                >
                    {parseTitleByDate(date)}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {tasks[date].map((task) => (
                    <Task
                        key={task.id}
                        title={task.title}
                        subtitle={task.description}
                        status={task.done}
                        priority={task.priority}
                        id={task.id}
                        date={date}
                    />
                ))}
            </AccordionDetails>
        </Accordion>
    )
}
