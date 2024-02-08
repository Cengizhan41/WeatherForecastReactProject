import styled from "styled-components";


export const  StyledResults=styled.div`

.searchCard-1{
    img{
        width: 150px !important;
    }

    @media (max-width:768px){
        .card-img{
        img{
            width: 95px !important;
        }
        }
        .headeTitle{
        font-size: 1.5rem !important;
        }
        .description{
        font-size: 1rem !important;
            
        }
        .infos{
        font-size: 1rem !important;
        }
        .card-titles{
            align-items: center;
        .name{
          font-size: 1.5rem !important;
          padding-right: .5rem;
          border-right: 2px solid ${(props)=>props.theme.themeText} !important;
        }
        .country{
          padding-left: .5rem;
          font-size: 1.3rem !important;
        }
        }
       
            
        }
       
        
    }
.searchCard-2{
    img{
        width: 75px !important;
    }
    small{
        font-weight:lighter !important;
        font-size: 1rem !important;
    }
    @media (max-width:768px){
    .card-infos{
        margin-bottom: 1rem !important;
        border-bottom: 1px solid ${(props)=>props.theme.themeBg}  !important;
        border-radius: 30%;
        div{
            font-size: 1rem !important;
        }
        }
        img{
        width: 55px !important;
      
    }
    small{
        font-weight:lighter !important;
        font-size: .7rem !important;
    }
     
    }
}

@media (max-width:768px){
    .SRComp2Head{
        font-size:  1.2rem !important;
    }
}

`