import React, { useEffect, useState } from "react"
import Iframe from "react-iframe"

type Props = {}

export default function Score({}: Props) {
     const size: Size = useWindowSize()

     let width = Number(size.width) - 20
     if (width > 700) width = 700
     let height = Number(size.height) - 20
     if (height > 600) height = 600

     return (
          <div className='grid justify-items-center'>
               <Iframe
                    url='https://www.score108.com/soccer/scoreAPI'
                    width={width?.toString()}
                    height={height?.toString()}
                    id='myId'
                    className='rounded-2xl'
                    position='relative'
               />
          </div>
     )
}
interface Size {
     width: number | undefined
     height: number | undefined
}

function useWindowSize(): Size {
     const [windowSize, setWindowSize] = useState<Size>({
          width: undefined,
          height: undefined,
     })
     useEffect(() => {
          function handleResize() {
               setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
               })
          }
          window.addEventListener("resize", handleResize)
          handleResize()
          return () => window.removeEventListener("resize", handleResize)
     }, [])
     return windowSize
}
