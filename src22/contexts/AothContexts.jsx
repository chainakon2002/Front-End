import { createContext, useState } from "react";
 
const AuthContextProvider(props) {
    const [user, setUser] =  useState(nall)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            { props.children}
        </AuthContext.Provider>

    )
}

export {AuthContextProvider}
export default AuthContext