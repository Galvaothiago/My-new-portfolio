import React, { useContext, useEffect, useState } from "react"
import { HoverContext } from "../context/HandleHoverContext"


export const useScrollPosition = (HTMLElement: React.RefObject<HTMLDivElement>, ScrollLimit: number) => {
    const [valueScroll, setValueScroll] = useState<number>(0)
    const { handleBackground } = useContext(HoverContext)
    const SCROLL_LIMIT = ScrollLimit | 6  /*default value*/

    useEffect(() => {
        if(HTMLElement.current) {
          const updateSCrollValue = () => {
            const element = HTMLElement.current
            const { scrollTop, scrollHeight, offsetHeight }: any = element
    
            const progressScroll = Number((scrollTop / (scrollHeight - offsetHeight) * 100).toFixed(2))
            setValueScroll(progressScroll)
          }
    
        HTMLElement.current.addEventListener('scroll', updateSCrollValue)
  

        if(valueScroll > SCROLL_LIMIT) {
            handleBackground(true)
          } else {
            handleBackground(false)
          }
        return () => HTMLElement.current?.removeEventListener('scroll', updateSCrollValue) 
        
        }
      }, [valueScroll, HTMLElement])

      return valueScroll
}