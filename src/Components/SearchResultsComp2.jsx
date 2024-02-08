import React, { useEffect, useState } from 'react'
import fetchActionsHook from '../CustomHook/FetchActions'
import SRComp2Details from './SRComp2Details'
import ErrorComp from './ErrorComp'
import LoadingComp from './LoadingComp'

function SearchResultsComp2({lat,lon,params}) {
    // console.log(lat,lon)
    const apiKey=import.meta.env.VITE_OPENWEATHER_API_KEY
    const[data,loading,error,getUrl]=fetchActionsHook()
    useEffect(()=>{
        getUrl(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    },[params])

 
        const days=[[],[],[],[],[]]

      data?.list?.map((item,index)=>{
        if(index<8){
         return days[0].push(item)
        }
        else if(index>=8 && index<16){
         return  days[1].push(item)
        }
        else if(index>=16 && index<24){
          return days[2].push(item)
        }
        else if(index>=24 && index<32){
          return days[3].push(item)
        }
        else if(index>=32 && index<40){
          return days[4].push(item)
        }
       })

  return (
  <div className="container">
      {
        days?.map((day,index)=>{
          // console.log(day)
          return <SRComp2Details key={index} day={day}/>
        })
      }
    </div>
 )

}

export default SearchResultsComp2