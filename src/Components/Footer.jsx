import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { StyledFooter } from '../StyledComponents/StyledFooter';
export default function Footer() {
  return (
    <StyledFooter className="d-flex flex-wrap justify-content-between align-items-center py-1 my-1  container fs-5">
    <div className="col-md-4 d-flex align-items-center ">
    <span className="text-muted fs-5">© 2024 Company, Inc</span>
      <NavLink to={"/"} className="mb-3 mx-2 mb-md-0 text-muted text-decoration-none fs-5">
        <TiWeatherPartlySunny className='mb-sm-3 mt-3'/>
      </NavLink> 
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex align-items-center">
      <li className="ms-3 "><a className="text-muted fs-1 " target='blank' href="https://github.com/Cengizhan41"><FaGithub className='mb-2' /></a></li>
    </ul>
  </StyledFooter>
  )
}
