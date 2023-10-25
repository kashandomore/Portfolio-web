import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const LoadingAnimation: React.FC = () => {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const playVideo = () => {
        const video: any = document.getElementById('loadingAnimation')
        if (!video.playing) {
          video.play
        }
      }
      document.body.addEventListener('touchstart', playVideo)
    })

    return () => {
      document.removeEventListener('DOMContentLoaded', () => {
        const playVideo = () => {
          const video: any = document.getElementById('loadingAnimation')
          if (!video.playing) {
            video.play
          }
        }
        document.body.removeEventListener('touchstart', playVideo)
      })
    }
  }, [])

  return (
    <>

    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    AOS.init({
      once: true,
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </>
      )}
    </>
  )
}

export default MyApp
