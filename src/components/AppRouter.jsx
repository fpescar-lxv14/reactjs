import { Route, Routes } from "react-router";
import Candidates from "./components/Candidates.jsx"
import Selection from "./components/Selection.jsx"
import Profile from "./components/Profile.jsx"
import Welcome from "./components/Welcome.jsx"
import Error from "./components/Error.jsx"
import FAQs from "./components/FAQs.jsx"

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