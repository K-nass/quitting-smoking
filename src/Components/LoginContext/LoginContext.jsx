import React, { createContext, useState } from 'react'

export const loginContext = createContext()


export default function LoginContextProvider(props) {
    const [loginToken, setLoginToken] = useState(null);


    return (
        <loginContext.Provider value={{ loginToken, setLoginToken }}>
            {props.children}
        </loginContext.Provider>
    )

}