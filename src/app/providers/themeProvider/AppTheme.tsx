import { createTheme, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { typography } from 'assets/theme/typography'
import { palette } from 'assets/theme/palette'
import { shadows } from 'assets/theme/shadows'

type PropsType = {
    children: JSX.Element[] | JSX.Element
}

export const AppTheme: React.FC<PropsType> = (props) => {
    const themeOptions = useMemo(
        () => ({
            palette,
            typography,
        }),
        []
    )
    const theme = createTheme(themeOptions)

    theme.shadows[1] = shadows.tasks
    theme.shadows[2] = shadows.switch

    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
