import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Home} from "../Home/Home";
import {NotFound} from "../NotFound/NotFound";
import {Login} from "../session/Login/login";
import {SignIn} from "../session/SignIn/SignIn";
import {Shop} from "../Shop/Shop";
import { cerrar } from "../../Api/cerrar";
import { Socket } from "../Socket/Socket";

export const ClientRoutes = () => {


window.addEventListener("beforeunload", cerrar)


    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/shop" element={<Shop />}/>
                <Route path="/socket" element={<Socket />}/>
                
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    );







};


