import { Route, Routes } from "react-router";
import Candidates from "./components/Candidates"
import Selection from "./components/Selection"
import Profile from "./components/Profile"
import Welcome from "./components/Welcome"
import Error from "./components/Error"
import FAQs from "./components/FAQs"

export default function AppRouter(){
    const routes = [
        { path: "candidates",  element: <Candidates/>  },
        { path: "selection",   element: <Selection/>   },
        { path: "faqs",        element: <FAQs/>        },
        { path: "profile/:id", element: <Profile/>     },
        { path: "/",           element: <Welcome/>     },
        { path: "*",           element: <Error/>       },
    ]
    return (
    <Routes>
        { routes.map((r,i) => <Route key={i} {...r} />)}
    </Routes>
)}