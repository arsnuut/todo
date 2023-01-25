import { Grid, Typography } from '@mui/material'
import Marquee from 'react-fast-marquee'
import { useNews } from 'pages/Main/newsProvider'

export const News = () => {
    const { showNews, newsRow } = useNews()

    if (!showNews || !newsRow) return null

    return (
        <Grid position='fixed' bottom={0} overflow='hidden' width='100%'>
            <Marquee speed={10} gradientWidth={0}>
                <Typography color='white'>{newsRow}</Typography>
            </Marquee>
        </Grid>
    )
}
