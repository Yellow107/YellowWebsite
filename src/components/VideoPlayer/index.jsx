/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { initMagneticButton } from "../splitTextUtils";

const VideoPlayer = ({ isOpen, onClose, videoSrc, poster }) => {
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorImgRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      gsap.to(modalRef.current, {
        autoAlpha: 1,
        zIndex: 910,
        duration: 0.5,
      });
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      gsap.to(modalRef.current, {
        autoAlpha: 0,
        zIndex: -1,
        duration: 0.5,
      });
      videoRef.current.pause();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((currentTime / duration) * 100);
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  useEffect(()=>{
    initMagneticButton();
 }, []);


  const handleProgressClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  return (
    <div
      ref={modalRef}
      className="fixed top-0 cursor-none left-0 w-full h-full flex items-center justify-center opacity-0 -z-10"
      onClick={onClose}
    >
      <div className="relative w-full h-full bg-black" onClick={handleVideoClick} data-magnetic-target data-magnetic-strength="200">
        <video
          ref={videoRef}
          poster={poster}
          loop
          className="w-full h-full object-cover tablet:object-contain mobile:object-contain"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div
          className="relative bottom-[10%] cursor-pointer w-[70%] p-4 mx-auto tablet:w-[90%] mobile:w-full mobile:px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between w-full">
            <button onClick={handlePlayPause} className="text-white uppercase w-[7.5%] tablet:w-[14%] mobile:w-[20%] mobile:text-[16px]">
              {isPlaying ? "Pause" : "Play"}
            </button>
            <div
              className="h-[8px] rounded-[40px] overflow-hidden w-[85%] mobile:w-[60%] bg-slate-800 mt-[2px] cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="h-2 bg-white rounded-[40px]"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
            <button onClick={handleMuteUnmute} className="text-white uppercase w-[7.5%] tablet:w-[14%] mobile:w-[20%] mobile:text-[16px]">
              {isMuted ? "Mute" : "Unmute"}
            </button>
          </div>
        </div>
        
        <div
          ref={cursorRef}
          className="w-[7vw] h-[7vw] flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden pointer-events-none magnetic-inner mobile:top-[10%] mobile:right-[2%] mobile:left-auto mobile:w-[10vw] mobile:h-[10vw]"
          id="cursor"
        >
          <img ref={cursorImgRef} className="object-cover h-full w-full" src="/assets/icons/close-cursor.svg" alt="close-cursor" />
        </div>
      </div>
    </div>
  )
};

export default VideoPlayer;
