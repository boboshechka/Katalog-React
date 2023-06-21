import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log('effect!')
        const abortController = new AbortController()
            // , { signal: abortController.signal }
        fetch(url, { signal: abortController.signal })
            .then(result => {
                if (!result.ok) {
                    throw Error('Could not fetch the data from this resource')
                }
                return result.json()

            }).then(data => {
                // console.log(data)
                setData(data)
                setLoading(false)
                setError(null)
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted', err)
                } else {
                    // console.log(err.message)
                    setError(err.message)
                    setLoading(false)
                }
            })

        // будет запускать,когда наш компонент размонтируется
        // чтобы мы не могли вызвать состояние 
        return () => {
            // console.log('cleanup')
            abortController.abort()
        }
    }, [])

    return {
        data, isLoading, error
    }
}

export default useFetch