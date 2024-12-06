// 'use client'

// import React, { useState, useRef, useEffect } from 'react'
// import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize } from 'lucide-react'

// export default function MoviePlayer() {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [progress, setProgress] = useState(0)
//   const [volume, setVolume] = useState(1)
//   const [isMuted, setIsMuted] = useState(false)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   useEffect(() => {
//     const video = videoRef.current
//     if (!video) return

//     const updateProgress = () => {
//       const progress = (video.currentTime / video.duration) * 100
//       setProgress(progress)
//     }

//     video.addEventListener('timeupdate', updateProgress)
//     return () => video.removeEventListener('timeupdate', updateProgress)
//   }, [])

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause()
//       } else {
//         videoRef.current.play()
//       }
//       setIsPlaying(!isPlaying)
//     }
//   }

//   const handleProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const video = videoRef.current
//     if (video) {
//       const time = (parseFloat(e.target.value) * video.duration) / 100
//       video.currentTime = time
//       setProgress(parseFloat(e.target.value))
//     }
//   }

//   const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const video = videoRef.current
//     if (video) {
//       const volume = parseFloat(e.target.value)
//       video.volume = volume
//       setVolume(volume)
//       setIsMuted(volume === 0)
//     }
//   }

//   const toggleMute = () => {
//     const video = videoRef.current
//     if (video) {
//       video.muted = !video.muted
//       setIsMuted(!isMuted)
//     }
//   }

//   const handleSkip = (seconds: number) => {
//     const video = videoRef.current
//     if (video) {
//       video.currentTime += seconds
//     }
//   }

//   const toggleFullScreen = () => {
//     const video = videoRef.current
//     if (!video) return

//     if (document.fullscreenElement) {
//       document.exitFullscreen()
//     } else {
//       video.requestFullscreen()
//     }
//   }

//   return (
//     <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl">
//       <div className="relative">
//         <video
//           ref={videoRef}
//           className="w-full h-auto"
//           src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//           <div className="text-white text-xl font-bold mb-2">Big Buck Bunny</div>
//           <div className="flex items-center space-x-4">
//             <button onClick={() => handleSkip(-10)} className="text-white hover:text-gray-300">
//               <SkipBack size={24} />
//             </button>
//             <button onClick={togglePlay} className="text-white hover:text-gray-300">
//               {isPlaying ? <Pause size={32} /> : <Play size={32} />}
//             </button>
//             <button onClick={() => handleSkip(10)} className="text-white hover:text-gray-300">
//               <SkipForward size={24} />
//             </button>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={progress}
//               onChange={handleProgress}
//               className="w-full"
//             />
//             <button onClick={toggleMute} className="text-white hover:text-gray-300">
//               {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//             </button>
//             <input
//               type="range"
//               min="0"
//               max="1"
//               step="0.1"
//               value={volume}
//               onChange={handleVolume}
//               className="w-24"
//             />
//             <button onClick={toggleFullScreen} className="text-white hover:text-gray-300">
//               <Maximize size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// 'use client'

// import React, { useState, useRef, useEffect } from 'react'
// import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize } from 'lucide-react'

// export default function MoviePlayer({ UrlSeleccionada }) {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [progress, setProgress] = useState(0)
//   const [volume, setVolume] = useState(1)
//   const [isMuted, setIsMuted] = useState(false)
//   const videoRef = useRef(null)

//   useEffect(() => {
//     const video = videoRef.current
//     if (!video) return

//     const updateProgress = () => {
//       const progress = (video.currentTime / video.duration) * 100
//       setProgress(progress)
//     }

//     video.addEventListener('timeupdate', updateProgress)
//     return () => video.removeEventListener('timeupdate', updateProgress)
//   }, [])

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause()
//       } else {
//         videoRef.current.play()
//       }
//       setIsPlaying(!isPlaying)
//     }
//   }

//   const handleProgress = (e) => {
//     const video = videoRef.current
//     if (video) {
//       const time = (parseFloat(e.target.value) * video.duration) / 100
//       video.currentTime = time
//       setProgress(parseFloat(e.target.value))
//     }
//   }

//   const handleVolume = (e) => {
//     const video = videoRef.current
//     if (video) {
//       const volume = parseFloat(e.target.value)
//       video.volume = volume
//       setVolume(volume)
//       setIsMuted(volume === 0)
//     }
//   }

//   const toggleMute = () => {
//     const video = videoRef.current
//     if (video) {
//       video.muted = !video.muted
//       setIsMuted(!isMuted)
//     }
//   }

//   const handleSkip = (seconds) => {
//     const video = videoRef.current
//     if (video) {
//       video.currentTime += seconds
//     }
//   }

//   const toggleFullScreen = () => {
//     const video = videoRef.current
//     if (!video) return

//     if (document.fullscreenElement) {
//       document.exitFullscreen()
//     } else {
//       video.requestFullscreen()
//     }
//   }

//   return (
//     <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl">
//       <div className="relative">
//         <video
//           ref={videoRef}
//           className="w-full h-auto"
//           src={UrlSeleccionada}
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
//           <div className="text-white text-xl font-bold mb-2">Big Buck Bunny</div>
//           <div className="flex items-center space-x-4">
//             <button onClick={() => handleSkip(-10)} className="text-white hover:text-gray-300">
//               <SkipBack size={24} />
//             </button>
//             <button onClick={togglePlay} className="text-white hover:text-gray-300">
//               {isPlaying ? <Pause size={32} /> : <Play size={32} />}
//             </button>
//             <button onClick={() => handleSkip(10)} className="text-white hover:text-gray-300">
//               <SkipForward size={24} />
//             </button>
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={progress}
//               onChange={handleProgress}
//               className="w-full"
//             />
//             <button onClick={toggleMute} className="text-white hover:text-gray-300">
//               {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
//             </button>
//             <input
//               type="range"
//               min="0"
//               max="1"
//               step="0.1"
//               value={volume}
//               onChange={handleVolume}
//               className="w-24"
//             />
//             <button onClick={toggleFullScreen} className="text-white hover:text-gray-300">
//               <Maximize size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize } from 'lucide-react'
import { UrlModificada } from '@/config/urlModificada'

export default function MoviePlayer({ UrlSeleccionada, titulo }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
    }

    video.addEventListener('timeupdate', updateProgress)
    return () => video.removeEventListener('timeupdate', updateProgress)
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgress = (e) => {
    const video = videoRef.current
    if (video) {
      const time = (parseFloat(e.target.value) * video.duration) / 100
      video.currentTime = time
      setProgress(parseFloat(e.target.value))
    }
  }

  const handleVolume = (e) => {
    const video = videoRef.current
    if (video) {
      const volume = parseFloat(e.target.value)
      video.volume = volume
      setVolume(volume)
      setIsMuted(volume === 0)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !video.muted
      setIsMuted(!isMuted)
    }
  }

  const handleSkip = (seconds) => {
    const video = videoRef.current
    if (video) {
      video.currentTime += seconds
    }
  }

  const toggleFullScreen = () => {
    const video = videoRef.current
    if (!video) return

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      video.requestFullscreen()
    }
  }

  return (
    <div className="mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl">
      <div className="relative">
        <video
          ref={videoRef}
          className="sm:w-full xl:w-[1440px] lg:w-[1150px] md:w-[750px] xl:h-[900px] lg:h-[400px] md:h-[500px] sm:h-[160px]"
          src={UrlModificada("https://www.dropbox.com/scl/fi/fa5hxuiiwlipswbg78xte/Ver-Capitan-America-Civil-War-Online-Completa-Gratis-en-HD.mp4?rlkey=qxuqji84k2oqinwsoedonz6c6&st=y3k4u1e8&dl=0")}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <div className="text-white lg:text-xl md:text-xl sm:text-sm font-bold mb-2">{titulo}</div>
          <div className="flex items-center space-x-4">
            <button onClick={() => handleSkip(-10)} className="text-white hover:text-gray-300">
              <SkipBack size={24} />
            </button>
            <button onClick={togglePlay} className="text-white hover:text-gray-300">
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
            <button onClick={() => handleSkip(10)} className="text-white hover:text-gray-300">
              <SkipForward size={24} />
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgress}
              className="w-full"
            />
            <button onClick={toggleMute} className="text-white hover:text-gray-300">
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolume}
              className="w-24"
            />
            <button onClick={toggleFullScreen} className="text-white hover:text-gray-300">
              <Maximize size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
