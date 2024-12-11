import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useResolvedPath } from "react-router"

export const useProfile = () => {
    const [profile, setProfile] = useState()
    const selection = useSelector(s => s.selection);
    const { results } = useSelector(s => s.candidates);
    const { pathname } = useResolvedPath()
    const [ _, path, userId ] = pathname.split("/")
    useEffect(() => {
        const array = path === "selection" ? selection : path === "candidates" ? results : [];
        setProfile(array.find(item => item.login?.uuid === userId) ?? null)
    },[])
    return { profile, path }
}