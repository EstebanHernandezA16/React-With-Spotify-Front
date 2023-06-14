import { API_URL } from "../Utils/Utils";




export const cerrar = async() =>{

 const url = `${API_URL}/shutdown`
 const params = {
    method:'POST',
    headers:{
        "Content-Type":"application/json"

    }
 }


 const response = await fetch(url,params)

 if(response.status==200){
    window.close();
 }



}