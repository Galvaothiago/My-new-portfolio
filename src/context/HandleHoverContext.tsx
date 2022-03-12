import { createContext, ReactNode, useState } from "react";

interface BackgroundProps {
    showBackground: boolean,
    handleBackground: (state: boolean) => void 
}

export const HoverContext = createContext({} as BackgroundProps)

interface ChildrenProps {
    children: ReactNode
}

export function HandleHoverProvide({ children }: ChildrenProps){
    const [ showBackground, setShowBackground ] = useState<boolean>(false)

    const handleBackground = (state: boolean) => {
        setShowBackground(state)
    }
    return (
        <HoverContext.Provider value={{
            handleBackground,
            showBackground
        }}>
        { children }
        </HoverContext.Provider>
    )
}