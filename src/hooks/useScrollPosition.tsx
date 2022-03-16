import React, { useContext, useEffect, useState } from "react"
import { HoverContext } from "../context/HandleHoverContext"

export const useScrollPosition = (HTMLElement: React.RefObject<HTMLElement>) => {
    const [valueScroll, setValueScroll] = useState<number>(0)

    useEffect(() => {
        if(HTMLElement.current) {
          const updateSCrollValue = () => {
            const element = HTMLElement.current
            const { scrollTop, scrollHeight, offsetHeight }: any = element
    
            const progressScroll = Number((scrollTop / (scrollHeight - offsetHeight) * 100).toFixed(2))
            setValueScroll(progressScroll)
          }
    
        HTMLElement.current.addEventListener('scroll', updateSCrollValue)

        return () => HTMLElement.current?.removeEventListener('scroll', updateSCrollValue) 
        
        }
      }, [valueScroll, HTMLElement])

      return valueScroll
}