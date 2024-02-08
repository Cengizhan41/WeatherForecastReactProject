import styled from "styled-components";

 export const StyledError=styled.div`
 width: 70%;
 background-color: ${(props)=> props.theme.themeBg2} !important;
 color: ${(props)=>props.theme.themeText2} !important;
  .errorLink{
    background-color: ${(props)=> props.theme.themeBtnBg} !important;
    color: ${(props)=>props.theme.themeBtnText} !important;
  }

  @media (max-width:768px){
    width: 100%;

    h3{
        font-size: 1.2rem;
    }
    .errorDiv{
        text-align: center;
    }
  }
 `