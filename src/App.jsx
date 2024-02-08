import { ThemeProvider } from 'styled-components'
import Navbar from './Components/Navbar'
import { ThemeInformations } from './StyledComponents/Theme/Theme'
import { GlobalStyles } from './StyledComponents/Global/GlobalStyle'
import { useContext } from 'react'
import { GeneralContext } from './Context/GeneralContext'
import SiteRoutes from './Components/SiteRoutes'
import Footer from './Components/Footer'



function App() {

  const {themeName}=useContext(GeneralContext)
  // console.log(themeName)
  return (
    <ThemeProvider theme={ themeName=="light" ? ThemeInformations.lightThemeColors : ThemeInformations.darkThemeColors}>
       <GlobalStyles/>
       <Navbar/>
       <SiteRoutes/>
       <hr  className='mt-3 mb-0 py-0'/>
       <Footer/>
    </ThemeProvider>
  )
}

export default App
