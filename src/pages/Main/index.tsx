import { Todolist } from 'widgets/Todolist'
import { News } from 'widgets/News'
import { Grid } from '@mui/material'
import { NewsProvider } from 'pages/Main/newsProvider'

export const Main = () => {
    return (
        <NewsProvider>
            <Grid container p='50px' flexDirection='column' alignItems='center'>
                <Todolist />
                <News />
            </Grid>
        </NewsProvider>
    )
}
