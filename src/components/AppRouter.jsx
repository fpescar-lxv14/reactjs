import { Route, Routes } from "react-router";
import Candidates from "./Candidates.jsx"
import Selection from "./Selection.jsx"
import Profile from "./Profile.jsx"
import Welcome from "./Welcome.jsx"
import Error from "./Error.jsx"
import FAQs from "./FAQs.jsx"

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