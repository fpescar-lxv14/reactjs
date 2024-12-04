import Home from "../components/Home"
import Login from "../components/Login"
import Signin from "../components/Signin/"
import NotFound from "../components/NotFound"

export const appRoutes = [
    {paths: ["/", "/home", "/inicio", "/main"], Element: Home},
    {paths: ["/login", "/sign", "/session"], Element: Login},
    {paths: ["/signin", "/register", "/account"], Element: Signin},
    {paths: ["*"], Element: NotFound},
]