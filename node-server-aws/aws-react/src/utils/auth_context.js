import React, {createContext,useState} from "react";

const auth_context = createContext()
const auth_update_context = createContext()

export function Auth_provider({ children }) {
    const [auth, set_auth] = useState(false)

    function change_auth() {
        set_auth(prev_auth => !prev_auth)
    }

    return(
        <auth_context.Provider value= {auth}>
            <auth_update_context.Provider value={change_auth}>
                {children}
            </auth_update_context.Provider>
        </auth_context.Provider>

    )
}
