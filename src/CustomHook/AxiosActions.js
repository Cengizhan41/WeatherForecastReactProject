import axios from "axios";
import { useState } from "react";


function axiosActionsHook(){

    const [axiosData,setAxiosData]=useState([]);
    const [axiosLoading,setAxiosLoading]=useState(true);
    const [axiosError,setAxiosError]=useState(false);

    async function getUrlbyAxios(path){
        try{
            const response= await axios.get(path)
            const responseData= await response.data;
            setAxiosData(responseData);
            setAxiosLoading(false)
            
        }
        catch{
            setAxiosError(true) 
        }  
      
    }
  return [axiosData,axiosLoading,axiosError,getUrlbyAxios]

}
export default axiosActionsHook