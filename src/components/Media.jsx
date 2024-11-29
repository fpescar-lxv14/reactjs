export default function Media(props){
    const {
        downsized_small: { mp4:dsVideo, webp:dsImage}, 
        original: { mp4:Video, webp:Image},
        open = false, 
    } = props;
    return (
        <video className={open ? "fullscreen" : "standard"}
            autoPlay={open} 
            loop={open}
            src={ open ? Video : dsVideo }>
        </video>
)}