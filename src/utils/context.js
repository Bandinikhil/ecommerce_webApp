import React, { Children, createContext } from 'react'

export const Context = createContext();

const AppContext = ({children})=>{
    return(
        <Context.Provider>
           {Children}
        </Context.Provider>
    )
}

export default AppContext;