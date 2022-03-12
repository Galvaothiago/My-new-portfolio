import { useContext, useEffect, useRef, useState } from "react";
import { Card } from "../../components/cardProject";
import { Sidebar } from "../../components/sidebar";
import { HoverContext } from "../../context/HandleHoverContext";
import { Container, Content } from "./style";

export function Projects() {
    const [ value, setValue ] = useState(0)
    const SCROLL_LIMIT = 6

    const container = useRef<HTMLDivElement>(null)

    const { handleBackground } = useContext(HoverContext)
    
    useEffect(() => {
      if(container.current) {
        const updateSCrollValue = () => {
          const element = container.current
          const { scrollTop, scrollHeight, offsetHeight }: any = element
  
          const progressScroll = Number((scrollTop / (scrollHeight - offsetHeight) * 100).toFixed(2))
          setValue(progressScroll)
        }
  
      container.current.addEventListener('scroll', updateSCrollValue)
  

      if(value > SCROLL_LIMIT) {
        handleBackground(true)
      } else {
        handleBackground(false)
      }
      return () => container.current?.removeEventListener('scroll', updateSCrollValue) 
      
      }
    }, [value, container])

    return (
        <Container>
            <Sidebar />
            <Content ref={container} >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Content>
        </Container>
    )
}