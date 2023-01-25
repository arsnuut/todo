import { Grid, Typography } from '@mui/material'
import { isToday } from 'date-fns'
import { AccordionTasks, TodayTasks } from 'features/Tasks'
import { SettingsMenu } from 'widgets/Todolist/ui/settingsMenu'
import { TodoListStateContext, useTodolistData } from 'widgets/Todolist/model'

export const Todolist = () => {
    const todolistData = useTodolistData()

    if (!todolistData?.tasks) return null

    return (
        <TodoListStateContext.Provider value={todolistData}>
            <Grid container width='390px' bgcolor='gray.contrastText' borderRadius='30px'>
                <Grid
                    container
                    padding='13px 37px 0'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography color='gray.light' variant='widgetTitle'>
                        To Do
                    </Typography>
                    <SettingsMenu />
                </Grid>
                <Grid container flexDirection='column' gap='32px' padding='17px 20px'>
                    {Object.keys(todolistData.tasks).map((date) =>
                        isToday(new Date(date)) ? (
                            <TodayTasks key={date} date={date} />
                        ) : (
                            <AccordionTasks key={date} date={date} />
                        )
                    )}
                </Grid>
            </Grid>
        </TodoListStateContext.Provider>
    )
}
