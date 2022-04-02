import React, { createContext, useContext, useState } from 'react'

const HeaderContext = createContext( {value:4 } );


export const HeaderProvider = ( {children}) => {

const [counter , setCounter] = useState(0);
const [cartCounter , setCartCounter]= useState(0);
  return (
    <>
        <HeaderContext.Provider value={{counter , setCounter , cartCounter, setCartCounter}}>
            {children}
        </HeaderContext.Provider>
    </>
  )


}

const useHeader = () => useContext(HeaderContext)

export  {useHeader, HeaderContext}
