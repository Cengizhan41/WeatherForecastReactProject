import styled from "styled-components";


export const StyledFooter=styled.footer`
background-color: ${(props)=> props.theme.themeBg} !important;
color: ${(props)=>props.theme.themeText} !important;

span{
    background-color: ${(props)=> props.theme.themeBg} !important;
    color: ${(props)=>props.theme.themeText} !important;
}
a{
    background-color: ${(props)=> props.theme.themeBg} !important;
    color: ${(props)=>props.theme.themeText} !important;
}

@media (max-width:768px){
span{
    font-size:1rem !important;
}
a{
    font-size:1.3rem !important;  
}
 
}
`