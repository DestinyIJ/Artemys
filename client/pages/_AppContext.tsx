import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

const AppContext = createContext({
    
})

interface ProviderProps {
    children: ReactNode
}
export const AppProvider = ({ children }: ProviderProps) => {
    


    return (
        <AppContext.Provider value={{
            
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)