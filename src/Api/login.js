import { API_URL } from "../Utils/Utils";





export const createUser =async(formValue) =>{
    delete formValue.confirmPassword
    try {

        const url = `${API_URL}/user`
        const params = {
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formValue)
        }

        const response = await fetch(url,params);
        const result = await response.json();
        
        return {result, statusCode: response.status} 

        
    } catch (error) {
        console.log(error.message);
    }
        return {error: error}
    }


    export const loginUser = async(formValue) =>{
       

        try {
            const url = `${API_URL}/user/login`
            const params = {
                method: 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formValue)
            }


            
            const response = await fetch(url,params)
            const result = await response.json();

            return {result, statusCode: response.status}

        } catch (error) {
            console.log(error.message);

            return {error:error.message}
        }

    }

       

