import { useEffect, useState } from 'react'
import axios from 'axios';

const useRequestTrailer = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
      axios.get(url)
        .then((response) => {
            const trailer = response.data.results.filter((video) =>{
                if(video.type === "Trailer"){
                    return video
                }
            })
            setData(trailer)
        })
        .catch((err) => {
          console.log("erro data", err.response)
        })
    }, [url])
    return (data)
}
export default useRequestTrailer;