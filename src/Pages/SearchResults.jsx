import React, { useContext, useEffect, useState } from 'react'
import { GeneralContext } from '../Context/GeneralContext'
import { useSearchParams } from 'react-router-dom'
import axiosActionsHook from '../CustomHook/AxiosActions'
import HomeCardComponent from '../Components/HomeCardComponent'
import { weatherIcons } from '../weatherIcons/Icons'
import { StyledResults } from '../StyledComponents/StyledResults'
import fetchActionsHook from '../CustomHook/FetchActions'
import LoadingComp from '../Components/LoadingComp'
import ErrorComp from '../Components/ErrorComp'
import SearchResultsComp1 from '../Components/SearchResultsComp1'
import SearchResultsComp2 from '../Components/SearchResultsComp2'

export default function SearchResults() {

  const[searchParams,setSearchParams]=useSearchParams()
  const query=searchParams.get("q")
  const apiKey=import.meta.env.VITE_OPENWEATHER_API_KEY
  

  const[data,loading,error,getUrl]=fetchActionsHook()
  useEffect(()=>{
  getUrl(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiKey}`)
  },[query])

  return (
  
    loading==true ?
    <LoadingComp/>
    :
  
    (!data?.[0] ?
    <ErrorComp/>
    :
    <StyledResults className="container-sm my-3">
    <SearchResultsComp1 lat={data?.[0]?.lat} lon={data?.[0]?.lon} params={data}/>
    <SearchResultsComp2 lat={data?.[0]?.lat} lon={data?.[0]?.lon} params={data}/>
    </StyledResults>)
 )

}
