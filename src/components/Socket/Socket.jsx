import React, { useEffect, useRef, useState } from "react";
import socketIOClient from 'socket.io-client'





export const Socket = () =>{
    
const socket = useRef();

const [weight, setWeight]= useState(null);

    useEffect(() =>{
        

        bringWeight();
        console.log('wei '+ weight);
    },[])

    const bringWeight = () => {
        socket.current = socketIOClient('http://localhost:3001');
        socket.current.on('Weight_Socket', async (data) => {
            console.log('Socket on Front');
            console.log(data);
            setWeight(data, () => {
                console.log('wei ' + weight);
            });
        });
    };
    
    useEffect(() => {
        setTimeout(() => {
            bringWeight();
            console.log('wei ' + weight);
        }, 500);
    }, [weight && weight !== null]);
    
    socket.current.emit('Weight_Socket');
return(
<>
    <div>Socket Comp</div>
    <br />
    {weight? (<>
    <h3>{weight}</h3>
    </>):null}
</>
);


}
