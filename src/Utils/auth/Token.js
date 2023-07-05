import { useEffect } from "react"
import Cookies from "js-cookie"
import jwt_decode from 'jwt-decode'



export const setTokenCookie = (token) =>{

   if(Cookies.get('token')){
    Cookies.remove('token');
    }

    Cookies.set('token', token)

}

export const checkToken = () =>{
    
    const tokenCookie = Cookies.get('token')
    if(tokenCookie){
        alert('Usuario logueado')
    }else{
        alert('Usuario no logueado')
    }
    
}

export const getTokenCookie = () =>{

 return Cookies.get('token')

}


export const getUsername = () =>{
// const Secret_Key = 'JxmxSyNxV5HQtZdvqdjg1zgQxG8CEH4w4bU36swBXsM='
const token =  getTokenCookie();

try {
    setTimeout(() =>{
        const decoded = jwt_decode(token)
        // const user = decoded.username
        console.log('Token Info ', decoded);
        return decoded.username
    }, 2000)
   
} catch (error) {
    console.log('Error decoding token: ',error.message);
}
    

}