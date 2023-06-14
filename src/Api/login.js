import { API_URL } from "../Utils/Utils";





export const createUser =async(formValue) =>{

    try {

        const url = `${API_URL}/user`
        const params = {
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email: formValue.email,
                password: formValue.password
            })
        }

        const response = await fetch(url,params);
        const result = await response.json();

        return result 

        
    } catch (error) {
        console.log(error.message);
    }

       

}