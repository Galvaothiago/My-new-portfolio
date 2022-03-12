import { useEffect, useRef, useState } from "react";
import { Card } from "../../components/cardProject";
import { Sidebar } from "../../components/sidebar";
import { Container, Content } from "./style";

export function Projects() {
    const [ value, setValue ] = useState(0)
    const container = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
      if(container.current) {
        const updateSCrollValue = () => {
          const element = container.current
          const { scrollTop, scrollHeight, offsetHeight }: any = element
  
          const progressScroll = Number((scrollTop / (scrollHeight - offsetHeight) * 100).toFixed(2))
          setValue(progressScroll)
        }
  
      container.current.addEventListener('scroll', updateSCrollValue)
  
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