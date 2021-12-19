import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestPost = (initialData, url) => {
  const [postData, setPostData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setPostData(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return (postData)
}

export default useRequestPost