/* You can't call the hook inside an event handler */
import { useEffect, useState } from 'react'

// including loading and such
export default function useFetchWithAbort(url: string) {
  const [data, setData] = useState<TData | null>(null)
  useEffect(() => {
    // init abortController to prevent race condition
    const controller = new AbortController()
    const signal = controller.signal

    const getData = async () => {
      try {
        const res = await fetch(url, { signal })

        // fetch doesn't reject the promise even at 404 or 500
        if (!res.ok) throw new Error(res.status.toString())

        const data = await res.json()
        setData(data)
      } catch (error) {
        console.error(error)
      }
    }
    getData()

    return () => {
      // abort the last fetch call before starting a new one
      controller.abort()
    }
  }, [url])

  return data
}
