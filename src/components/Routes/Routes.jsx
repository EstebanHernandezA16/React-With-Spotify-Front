import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Home} from "../Home/Home";
import {NotFound} from "../NotFound/NotFound";
import {Login} from "../session/Login/login";
import {SignIn} from "../session/SignIn/SignIn";
import {Shop} from "../Shop/Shop";

export const ClientRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route  path="/shop" element={<Shop />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </>
    );







//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/sign" element={<SignIn />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/page-not-found" element={<NotFound />} />
//         <Route path="*" element={<Navigate to="/page-not-found" />} />
//       </Routes>
//     </Router>
//   );
};

