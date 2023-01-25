function api<T>(url: string): Promise<T> {
    return fetch(url, {
        headers: {
            'x-api-key': 'LmTY7temmlq5conUmrPGTpu0F9ceFRq3JxOISOrQUoQ',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<T>
        })
        .then((data) => {
            return data
        })
}

export const getLatestNewsPeace = () => {
    return api<{ articles: Array<{ summary: string }> }>(
        'https://api.newscatcherapi.com/v2/search?page_size=1&page=1&q=tesla'
    ).then((res) => {
        return res.articles[0].summary
    })
}
