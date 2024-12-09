import { useEffect } from "react"
import { getPosts } from "../../store/postsSlice"
import { useDispatch, useSelector } from "react-redux"
import { CircularProgress, ImageList, ImageListItem, List, ListItem } from "@mui/material" 

export default function Posts() {
    const dispatch = useDispatch()
    const {loading, data, error} = useSelector(state => state.posts)
    useEffect( () => {
        dispatch(getPosts())
    },[])
    console.log("error:", error)
    return (
    <section>{ 
        loading ? <CircularProgress/> :
        data.length?
        <ImageList variant="masonry" cols={3} gap={8}>{
            data?.map(({id,title,url, thumbnailUrl}) =>
            <ImageListItem key={id}>
                <img src={thumbnailUrl || url} alt={title}/>
            </ImageListItem>
        )}
        </ImageList> :
        <header>
            <h2>Lo sentimos, ocurrio un error</h2>
            <p>No se han podido cargar las imagenes</p>
        </header>
        }
    </section>
)}
