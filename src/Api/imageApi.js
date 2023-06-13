import {API_URL} from '../Utils/Utils'

export const getImageApi = async(IconCode) =>{
    try{
        const url =`${API_URL}/image?id=${IconCode}`
        const params ={
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                //Authorization
            }
        }


        const response = await fetch(url,params);
        const result = await response.json();

        return result
    }catch(error){
        console.log(error.message);

        return {error: 'Error on fetching requrired info'}
    }
}

export const getImagesApi = async() =>{
    try {
        const url = `${API_URL}/image/all`
        const params = {
            method: 'GET',
            headers:{
                "Content-Type":"application/json",
            }
        }
        const response = await fetch(url,params)
        const result = await response.json();

        return result
    } catch (error) {
        console.log(error.message);
        return {error:'Error on fetching requrired info'}
    }
}