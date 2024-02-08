import React, { useEffect } from 'react'
import { weatherIcons } from '../weatherIcons/Icons'
import axiosActionsHook from '../CustomHook/AxiosActions'


export default function SearchResultsComp1({lat,lon,params}) {
  const apiKey=import.meta.env.VITE_OPENWEATHER_API_KEY
  const[axiosData,axiosLoading,axiosError,getUrlbyAxios]=axiosActionsHook()
  useEffect(()=>{
    getUrlbyAxios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    },[params])
    const imgSrc=weatherIcons.find(item=>{
        if(item.includes(axiosData?.weather?.[0].icon)){
          return item
        }
      })
  return (
   
  (
    <div className="card searchCard-1 p-sm-3 px-3 py-1 shadow text-center">
    <div className="row">
      <div className="col-sm-6 col-5 align-self-center text-center py-2">
      <div className="card-img text-center"><img src={imgSrc} alt={imgSrc} style={{width:"150px"}} /></div>
        <h2 className="lead fs-2 my-1 my-lg-2 headTitle">{axiosData?.weather?.[0].main}  </h2>
        <small className='fs-4 lead fst-italic description'>{axiosData?.weather?.[0].description}</small>
      </div>
      <div className="col-sm-6 col-7 text-center align-self-center">
        <div className="card-titles d-flex  justify-content-center flex-md-column">
      <h2 className="card-title lead fs-2 my-1 name">{axiosData?.name}</h2>
      <h2 className="card-title lead fs-3 my-1 country">{axiosData?.sys?.country}</h2>
      </div>
        <h2 className="fs-4 lead fw-semibold my-2 my-lg-4 infos">Feels Like {(axiosData?.main?.feels_like - 273).toFixed(1)} °C</h2>
        <hr />
        <h2 className="fs-4 lead fw-semibold my-2 my-lg-4 infos">Wind { (axiosData?.wind?.speed*3.6).toFixed(2)} Km/H</h2>
        <h2 className="fs-4 lead fw-semibold my-2 my-lg-4 infos">Humidity %{axiosData?.main?.humidity}</h2>
      </div>
    </div>
    </div>
  )
  )
  
  
   
  
}
