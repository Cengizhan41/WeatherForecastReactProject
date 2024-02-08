import styled from "styled-components"


export const StyledNavbar=styled.nav`
background-color: ${(props)=> props.theme.themeBg2} !important;
color: ${(props)=>props.theme.themeText} !important;

.navbar-brand{
 background-color: ${(props)=> props.theme.themeBg2} !important;
 color: ${(props)=>props.theme.themeText2} !important;
}
.navbar-toggler{
background-color:#ffeaa7 !important;
&:hover{
     background-color:#ffeaa7 !important ;
}
}
@media (max-width:976px){
    .d-flex{
        margin-top: 1rem;
    }
    .themeComp{
        margin-top: 1rem !important;
        text-align: center;
    }
}

`