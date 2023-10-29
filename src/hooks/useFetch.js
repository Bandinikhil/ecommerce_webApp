import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api'

const useFetch = (endPoint) => {
const [data,setData] = useState();
const makeApiCall = async ()=>{
    const res = await fetchDataFromApi(endPoint);
    setData(res);
}

    useEffect(()=>{
       makeApiCall()
    },[endPoint])

  return {data};
}

export default useFetch;