import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Theme from './Theme'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { StyledNavbar } from '../StyledComponents/StyledNavbar';
import fetchActionsHook from '../CustomHook/FetchActions';
import { GeneralContext } from '../Context/GeneralContext';

function Navbar() {

const navigasyon=useNavigate();

  function submitFunc(e){
    e.preventDefault();
    const search=e.target.elements[0].value.toLowerCase()
    // console.log(search)
    navigasyon(`/search?q=${search}`)
    e.target.elements[0].value=""
  }
   
  return (
   <StyledNavbar  className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <NavLink className="navbar-brand fs-1 lead" to={"/"}> <TiWeatherPartlySunny className='mb-2'/>WeatherDemo</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
        </div>
        <form onSubmit={submitFunc} className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Find A City" aria-label="Search" required/>
        <button className="btn btn-success" type="submit">Search</button> 
      </form>
      <div className='ms-sm-3 themeComp'><Theme/></div>
      </div>
    </div>
  </StyledNavbar>


  )

  }
export default Navbar






    
 