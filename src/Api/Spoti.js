import { API_URL } from "../Utils/Utils";




export const getLandingSongs = async(auth) =>{
    console.log('token from api'+auth.token);
    try {
        const url =`${API_URL}/spotify/landing`
        const params = {
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${auth.token}`
            }
        }

        const response = await fetch(url,params)
        
        return await response.json();

    } catch (error) {
        console.log(error.message);
    }

}