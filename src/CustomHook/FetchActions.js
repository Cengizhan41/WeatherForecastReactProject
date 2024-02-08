import React, { useState } from 'react'

function fetchActionsHook() {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    async function getUrl(url){
        const response= await fetch(url)
        const jsonData= await response.json();
        // console.log(jsonData);
        if(response.ok==false){
            // console.log(response.ok==false)
            setError(true)
        }
        setData(jsonData);
        setLoading(false)
        // console.log(error)
    }
  return [data,loading,error,getUrl]
}

export default fetchActionsHook