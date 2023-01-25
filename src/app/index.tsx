import { Main } from 'pages/Main'
import { AppTheme } from 'app/providers/themeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const App = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <AppTheme>
                <Main />
            </AppTheme>
        </QueryClientProvider>
    )
}
