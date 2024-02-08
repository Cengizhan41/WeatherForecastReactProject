import React from 'react'
import HomeCardComponent from '../Components/HomeCardComponent';
import { StyledHome } from '../StyledComponents/StyledHome';

function Home() {
 
  return (
    <StyledHome className="row  mx-auto mt-2">
      <div className="col-xl-6 col-6 my-md-3 my-2">
        <HomeCardComponent locationName={"London"} lat={51.5073219} lon={-0.1276474}/>
      </div>
      <div className="col-xl-6 col-6 my-md-3 my-2">
        <HomeCardComponent locationName={"New York"} lat={40.7127281} lon={-74.0060152}/>
      </div>
      <div className="col-xl-6 col-6 my-md-3 my-2">
        <HomeCardComponent  locationName={"Moscow"} lat={55.7504461} lon={37.6174943}/>
      </div>
      <div className="col-xl-6 col-6 my-md-3 my-2">
        <HomeCardComponent locationName={"Istanbul"} lat={41.0091982} lon={28.9662187}/>
      </div>
      <div className="col-xl-6 col-6 my-md-3 my-2">
        <HomeCardComponent locationName={"Tokyo"} lat={35.6828387} lon={139.7594549}/>
      </div>
      <div className="col-xl-6 col-6 mt-md-3 mt-2">
        <HomeCardComponent locationName={"Beijing"} lat={39.906217} lon={116.3912757}/>
      </div>

    </StyledHome>
  )
}

export default Home