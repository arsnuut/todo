import React, { ChangeEvent, Context, useCallback, useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getLatestNewsPeace } from 'widgets/News/api'

type NewsStateContextType = {
    updateShowNews: (event: ChangeEvent<HTMLInputElement>, status: boolean) => void
    showNews: boolean
    newsRow: string | undefined
}

const useNewsData = () => {
    const [showNews, setShowNews] = useState(true)

    const { data: newsRow } = useQuery(
        ['news', 'todolist'],
        async () => {
            return getLatestNewsPeace()
                .then((res) => res)
                .catch(() => 'Не удалось получить новости')
        },
        {
            retry: 2,
        }
    )

    const updateShowNews = useCallback((event: ChangeEvent<HTMLInputElement>, status: boolean) => {
        setShowNews(status)
    }, [])

    return { showNews, updateShowNews, newsRow }
}

export const NewsStateContext = React.createContext<NewsStateContextType | null>(null)

export const useNews = (): NewsStateContextType => {
    return useContext<NewsStateContextType>(NewsStateContext as Context<NewsStateContextType>)
}

export const NewsProvider: React.FC<{
    children: JSX.Element[] | JSX.Element
}> = (props) => {
    const newsState = useNewsData()

    return <NewsStateContext.Provider value={newsState}>{props.children}</NewsStateContext.Provider>
}
