import React, { useContext, useEffect } from 'react'
import fetchActionsHook from '../CustomHook/FetchActions';
import { GeneralContext } from '../Context/GeneralContext';
import { weatherIcons } from '../weatherIcons/Icons';
import LoadingComp from './LoadingComp';
import ErrorComp from './ErrorComp';




function HomeCardComponent({locationName,lat,lon}) {
    const apiKey=import.meta.env.VITE_OPENWEATHER_API_KEY
    const[data,loading,error,getUrl]=fetchActionsHook()

    useEffect(()=>{
    getUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    },[])
    
    const imgSrc=weatherIcons.find(item=>{
      if(item.includes(data?.weather?.[0].icon)){
        return item
      }
    })
    // console.log(data)
  return (
   
     
      loading==true ?
      <LoadingComp/>
      : 
       (error==true ? 
       <ErrorComp/>
       :
    (
      <div className="card p-lg-5 p-2 shadow text-center">
    <div className="row">
      <div className="col-xxl-4  align-self-center part">
      <h2 className="card-title lead fs-2">{locationName}</h2>
      </div>
      <div className="col-xxl-3  text-center part">
      <div className="card-img text-center"><img className='text-center'  src={imgSrc} alt="" /></div>
      <h4 className="weather lead fs-3">{data?.weather?.[0].main}</h4>
      </div>
      <div className="col-xxl-5  align-self-center part">
        <h4 className="fs-5 lead fw-semibold card-infos">Feels Like {(data?.main?.feels_like - 273).toFixed(1)} °C</h4>
        <h5 className="fs-5 lead fw-semibold card-infos">Wind { (data?.wind?.speed*3.6).toFixed(2)} Km/H</h5>
        <h5 className="fs-5 lead fw-semibold card-infos">Humidity %{data?.main?.humidity}</h5>
      </div>
    </div>
    </div>
    )
    )
   
  )
  
}


export default HomeCardComponent

