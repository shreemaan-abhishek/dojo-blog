import { useEffect, useState } from "react";
const abortController = new AbortController()
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsLoading(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setIsLoading(false);
                        setError(err.message);
                    }
                })

            return () => abortController.abort
        }, 1000)

    }, [url])

    return { data, isLoading, error }
}

export default useFetch