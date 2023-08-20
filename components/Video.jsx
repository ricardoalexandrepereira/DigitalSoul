import { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
/* import {video} from "../public/video-digital1.mp4"; */
import "../components/Video.css";

const Video = () => {
    const [playVideo, SetPlayVideo] = useState(false)
    const videoRef = useRef()
  
    const handleVideo = ()=>{
      SetPlayVideo((prevPlayVideo) => !prevPlayVideo)
  
      if(playVideo){
        videoRef.current.pause()
      }else{
        videoRef.current.play()
      }
    }
  
    return (
      <div className="app__video mt-6">
        
        <video
          src="/video-digital1.mp4"
          type="video/mp4"
          loop
          controls={false}
          muted
          ref={videoRef}
        />
  
        <div className="app__video-overlay flex__center">
          <div className="app__video-overlay_circle flex__center"
              onClick={handleVideo}
          >
            {playVideo ? <BsPauseFill color="#e83468" fontSize={30}/> : <BsFillPlayFill color="#e83468" fontSize={30}/>}
          </div>
        </div>
      </div>
    );
}

export default Video