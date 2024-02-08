import React from 'react'
import { Link } from 'react-router-dom'
import { StyledError } from '../StyledComponents/StyledError'

export default function ErrorComp() {
  return (
    <StyledError className='mx-auto rounded shadow'>
    <div className="col-12  my-5 p-5 mx-auto  errorDiv">
    <h3 className=''>We have nothing about this</h3>
    <h3>To go to Home Page <Link className='btn errorLink fs-5 vertical-align-center' to={"/"}>Click</Link></h3>
    </div>
    </StyledError> 
  )
}
