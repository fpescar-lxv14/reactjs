import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Login from "./components/Login";
import Signin from "./components/Signin";

export default function AppRouter(){
    return(
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/*" element={<NotFound/>}/>
    </Routes>
)}