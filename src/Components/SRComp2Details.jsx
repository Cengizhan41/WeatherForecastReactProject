import React from 'react'
import { weatherIcons } from '../weatherIcons/Icons'

function SRComp2Details({day}) {
    // console.log(day)
    const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const d=new Date(day?.[4]?.dt_txt)
    let newDay=week[d.getDay()]
    // console.log(newDay)
  return (
    <div className='card my-3 p-3 shadow'>
   <h1 className='fs-2 SRComp2Head fw-semibold fs-italic text-center mt-lg-3'> {newDay} {(day?.[4]?.dt_txt)?.slice(5,7)}.{(day?.[4]?.dt_txt)?.slice(8,10)}</h1>
   <div className="row searchCard-2 ">
   { day?.map(item=>{
    
      return (
      <div className="card-infos col-xl my-md-3  col-3 d-flex flex-column p-lg-3 p-1 text-center" key={item?.dt}>
        <div className='lead d-flex flex-lg-row flex-column align-items-center justify-content-center'>
           <span>{(item?.dt_txt)?.slice(11,16)} </span> 
           <small className='fw-lighter ms-lg-1'> / {(item?.dt_txt)?.slice(5,11)}</small>
           </div>
        <img className='mx-auto' src={weatherIcons.find(veri=>{
          if(veri.includes(item?.weather?.[0].icon)){
            return veri
          }
        })} alt={item?.dt} />
        <div className='lead'>{item?.weather?.[0].main}</div>
        <div className='mx-2  lead'>{(item?.main?.temp - 273).toFixed(1)} °C</div>
      </div>
      )
    })
    }
   
    </div>
   </div>
  )
}

export default SRComp2Details