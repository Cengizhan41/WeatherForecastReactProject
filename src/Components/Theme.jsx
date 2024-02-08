import React, { useContext } from 'react'
import { GeneralContext } from '../Context/GeneralContext'

function Theme() {
    const{moon,sun,handleTheme,themeName}=useContext(GeneralContext)
  return (
    <button onClick={handleTheme} className='btn'>
        {
        themeName == "light" ? sun : moon
        }
        </button>
    
  )
}

export default Theme