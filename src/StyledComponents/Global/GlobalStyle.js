import { createGlobalStyle } from "styled-components";

//theme
export const GlobalStyles=createGlobalStyle`

body{
background-color: ${(props)=> props.theme.themeBg} !important;
color: ${(props)=>props.theme.themeText} !important;

button{
background-color: ${(props)=> props.theme.themeBtnBg} !important;
color: ${(props)=>props.theme.themeBtnText} !important;

&:hover{
background-color: ${(props)=> props.theme.themeBtnText} !important;
color: ${(props)=>props.theme.themeBtnBg} !important; 
}
}

a{
background-color: ${(props)=> props.theme.themeBg} !important;
color: ${(props)=>props.theme.themeText} !important;

}

.card{
  background-color: ${(props)=> props.theme.themeBg2} !important;
  color: ${(props)=>props.theme.themeText2} !important;
}

}

`