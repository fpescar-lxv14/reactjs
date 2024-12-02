import { Routes, Route } from "react-router";
import Home from "./Home";
import Login from "./Login";
import Signin from "./Signin";
import NotFound from "./NotFound";

export default function AppRouter(){
    return(
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
)}